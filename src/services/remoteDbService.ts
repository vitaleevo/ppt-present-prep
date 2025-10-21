import { supabase } from "@/integrations/supabase/client";

export interface RemoteDbResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  count?: number;
  message?: string;
  version?: any;
  connectionInfo?: {
    host: string;
    port: number;
    database: string;
    user: string;
    sslMode: string;
  };
  details?: string;
}

export interface FetchDataParams {
  table: string;
  filters?: Record<string, any>;
  limit?: number;
  offset?: number;
}

export interface InsertDataParams {
  table: string;
  data: Record<string, any>;
}

export interface UpdateDataParams {
  table: string;
  id: number | string;
  data: Record<string, any>;
}

export interface DeleteDataParams {
  table: string;
  id: number | string;
}

/**
 * Test connection to remote PostgreSQL database
 */
export async function testRemoteConnection(): Promise<RemoteDbResponse> {
  try {
    const { data, error } = await supabase.functions.invoke('test-remote-db', {
      body: {},
    });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error testing remote connection:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Fetch data from remote PostgreSQL database
 */
export async function fetchRemoteData<T = any>(
  params: FetchDataParams
): Promise<RemoteDbResponse<T[]>> {
  try {
    const { data, error } = await supabase.functions.invoke('get-remote-data', {
      body: params,
    });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching remote data:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Insert data into remote PostgreSQL database
 */
export async function insertRemoteData<T = any>(
  params: InsertDataParams
): Promise<RemoteDbResponse<T>> {
  try {
    const { data, error } = await supabase.functions.invoke('insert-remote-data', {
      body: params,
    });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error inserting remote data:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Update data in remote PostgreSQL database
 */
export async function updateRemoteData<T = any>(
  params: UpdateDataParams
): Promise<RemoteDbResponse<T>> {
  try {
    const { data, error } = await supabase.functions.invoke('update-remote-data', {
      body: params,
    });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error updating remote data:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Delete data from remote PostgreSQL database
 */
export async function deleteRemoteData<T = any>(
  params: DeleteDataParams
): Promise<RemoteDbResponse<T>> {
  try {
    const { data, error } = await supabase.functions.invoke('delete-remote-data', {
      body: params,
    });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error deleting remote data:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
