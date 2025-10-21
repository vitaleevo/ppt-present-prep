import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const ALLOWED_TABLES = [
  'services',
  'packages',
  'testimonials',
  'portfolio',
  'blog_posts',
  'categories',
  'contacts',
];

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  let client: Client | null = null;

  try {
    const { table, data } = await req.json();

    console.log(`Inserting data into table: ${table}`);

    if (!ALLOWED_TABLES.includes(table)) {
      throw new Error(`Table "${table}" is not allowed`);
    }

    if (!data || typeof data !== 'object') {
      throw new Error('Invalid data object');
    }

    client = new Client({
      hostname: Deno.env.get('REMOTE_DB_HOST'),
      port: parseInt(Deno.env.get('REMOTE_DB_PORT') || '5432'),
      database: Deno.env.get('REMOTE_DB_NAME'),
      user: Deno.env.get('REMOTE_DB_USER'),
      password: Deno.env.get('REMOTE_DB_PASSWORD'),
      tls: {
        enabled: (Deno.env.get('REMOTE_DB_SSL_MODE') || 'prefer') !== 'disable',
        enforce: Deno.env.get('REMOTE_DB_SSL_MODE') === 'require',
      },
    });

    await client.connect();

    // Build INSERT query
    const columns = Object.keys(data);
    const values = Object.values(data);
    const placeholders = columns.map((_, i) => `$${i + 1}`).join(', ');

    const query = `
      INSERT INTO ${table} (${columns.join(', ')})
      VALUES (${placeholders})
      RETURNING *
    `;

    console.log('Executing query:', query);
    console.log('Values:', values);

    const result = await client.queryObject(query, values);

    await client.end();

    return new Response(
      JSON.stringify({
        success: true,
        data: result.rows[0],
        message: 'Data inserted successfully',
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 201,
      }
    );
  } catch (error) {
    console.error('Error inserting data:', error);

    if (client) {
      try {
        await client.end();
      } catch (e) {
        console.error('Error closing connection:', e);
      }
    }

    const errorMessage = error instanceof Error ? error.message : 'Unknown error';

    return new Response(
      JSON.stringify({
        success: false,
        error: errorMessage,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
