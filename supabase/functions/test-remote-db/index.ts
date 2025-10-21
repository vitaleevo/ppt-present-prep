import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  console.log('Testing remote PostgreSQL connection...');

  let client: Client | null = null;

  try {
    const host = Deno.env.get('REMOTE_DB_HOST');
    const port = parseInt(Deno.env.get('REMOTE_DB_PORT') || '5432');
    const database = Deno.env.get('REMOTE_DB_NAME');
    const user = Deno.env.get('REMOTE_DB_USER');
    const password = Deno.env.get('REMOTE_DB_PASSWORD');
    const sslMode = Deno.env.get('REMOTE_DB_SSL_MODE') || 'prefer';

    console.log(`Connecting to: ${user}@${host}:${port}/${database}`);

    // Create PostgreSQL client
    client = new Client({
      hostname: host,
      port: port,
      database: database,
      user: user,
      password: password,
      tls: {
        enabled: sslMode !== 'disable',
        enforce: sslMode === 'require',
      },
    });

    // Connect with timeout
    const connectPromise = client.connect();
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Connection timeout after 30s')), 30000)
    );

    await Promise.race([connectPromise, timeoutPromise]);
    console.log('Connected successfully!');

    // Test query
    const result = await client.queryObject('SELECT version()');
    console.log('Query executed successfully');

    const version = result.rows[0];

    await client.end();
    console.log('Connection closed');

    return new Response(
      JSON.stringify({
        success: true,
        message: 'PostgreSQL connection successful',
        version: version,
        connectionInfo: {
          host,
          port,
          database,
          user,
          sslMode,
        },
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Connection error:', error);

    if (client) {
      try {
        await client.end();
      } catch (e) {
        console.error('Error closing connection:', e);
      }
    }

    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorDetails = error instanceof Error ? error.toString() : String(error);

    return new Response(
      JSON.stringify({
        success: false,
        error: errorMessage,
        details: errorDetails,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
