import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Whitelist of allowed tables
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
    const { table, filters = {}, limit = 100, offset = 0 } = await req.json();

    console.log(`Fetching data from table: ${table}`);

    // Validate table name
    if (!ALLOWED_TABLES.includes(table)) {
      throw new Error(`Table "${table}" is not allowed`);
    }

    // Create PostgreSQL client
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

    // Build query with filters
    let query = `SELECT * FROM ${table}`;
    const queryParams: any[] = [];
    let paramIndex = 1;

    if (Object.keys(filters).length > 0) {
      const conditions = Object.entries(filters).map(([key, value]) => {
        queryParams.push(value);
        return `${key} = $${paramIndex++}`;
      });
      query += ` WHERE ${conditions.join(' AND ')}`;
    }

    query += ` LIMIT $${paramIndex++} OFFSET $${paramIndex}`;
    queryParams.push(limit, offset);

    console.log('Executing query:', query);
    console.log('Parameters:', queryParams);

    const result = await client.queryObject(query, queryParams);

    await client.end();

    return new Response(
      JSON.stringify({
        success: true,
        data: result.rows,
        count: result.rows.length,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error fetching data:', error);

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
