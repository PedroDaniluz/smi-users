import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApi } from "@/lib/api";
import { TUser } from "../types";

export function useUpdateUser() {
  const api = useApi();
  const queryClient = useQueryClient();

  async function updateUser(user: TUser) {
    const response = await api.put(`/usuarios/${user.id}`, user);
    return response.data;
  }

  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}
