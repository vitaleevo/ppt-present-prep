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
    const { table, id, data } = await req.json();

    console.log(`Updating data in table: ${table}, id: ${id}`);

    if (!ALLOWED_TABLES.includes(table)) {
      throw new Error(`Table "${table}" is not allowed`);
    }

    if (!id) {
      throw new Error('ID is required');
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

    // Build UPDATE query
    const columns = Object.keys(data);
    const values = Object.values(data);
    const setClause = columns.map((col, i) => `${col} = $${i + 1}`).join(', ');

    const query = `
      UPDATE ${table}
      SET ${setClause}
      WHERE id = $${columns.length + 1}
      RETURNING *
    `;

    console.log('Executing query:', query);
    console.log('Values:', [...values, id]);

    const result = await client.queryObject(query, [...values, id]);

    await client.end();

    if (result.rows.length === 0) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Record not found',
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 404,
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: result.rows[0],
        message: 'Data updated successfully',
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error updating data:', error);

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
