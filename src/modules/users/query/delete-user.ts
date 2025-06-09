import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "@/lib/api";

export function useDeleteUser() {
  const api = useApi();
  const queryClient = useQueryClient();

  async function deleteUser(id: string) {
    const response = await api.delete(`/usuarios/${id}`);
    return response.data;
  }

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}
