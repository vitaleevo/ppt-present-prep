import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchRemoteData,
  insertRemoteData,
  updateRemoteData,
  deleteRemoteData,
  testRemoteConnection,
  type FetchDataParams,
  type InsertDataParams,
  type UpdateDataParams,
  type DeleteDataParams,
} from "@/services/remoteDbService";
import { toast } from "sonner";

/**
 * Hook to test remote database connection
 */
export function useTestRemoteConnection() {
  return useQuery({
    queryKey: ['remote-db-test'],
    queryFn: testRemoteConnection,
    retry: false,
    staleTime: 0,
  });
}

/**
 * Hook to fetch data from remote database
 */
export function useRemoteData<T = any>(
  table: string,
  filters?: Record<string, any>,
  options?: {
    limit?: number;
    offset?: number;
    enabled?: boolean;
  }
) {
  return useQuery({
    queryKey: ['remote-data', table, filters, options?.limit, options?.offset],
    queryFn: () =>
      fetchRemoteData<T>({
        table,
        filters,
        limit: options?.limit,
        offset: options?.offset,
      }),
    enabled: options?.enabled ?? true,
    select: (response) => {
      if (!response.success) {
        throw new Error(response.error || 'Failed to fetch data');
      }
      return response.data || [];
    },
  });
}

/**
 * Hook to insert data into remote database
 */
export function useInsertRemoteData<T = any>(table: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Record<string, any>) =>
      insertRemoteData<T>({ table, data }),
    onSuccess: (response) => {
      if (response.success) {
        queryClient.invalidateQueries({ queryKey: ['remote-data', table] });
        toast.success(response.message || 'Data inserted successfully');
      } else {
        toast.error(response.error || 'Failed to insert data');
      }
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to insert data');
    },
  });
}

/**
 * Hook to update data in remote database
 */
export function useUpdateRemoteData<T = any>(table: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number | string; data: Record<string, any> }) =>
      updateRemoteData<T>({ table, id, data }),
    onSuccess: (response) => {
      if (response.success) {
        queryClient.invalidateQueries({ queryKey: ['remote-data', table] });
        toast.success(response.message || 'Data updated successfully');
      } else {
        toast.error(response.error || 'Failed to update data');
      }
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to update data');
    },
  });
}

/**
 * Hook to delete data from remote database
 */
export function useDeleteRemoteData<T = any>(table: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number | string) =>
      deleteRemoteData<T>({ table, id }),
    onSuccess: (response) => {
      if (response.success) {
        queryClient.invalidateQueries({ queryKey: ['remote-data', table] });
        toast.success(response.message || 'Data deleted successfully');
      } else {
        toast.error(response.error || 'Failed to delete data');
      }
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to delete data');
    },
  });
}
