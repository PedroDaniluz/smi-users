import { useMutation } from "@tanstack/react-query";
import { useApi } from "@/lib/api";
import { TUserCreate } from "../types";

export function useCreateUser() {
  const api = useApi();

  async function createUser(payload: TUserCreate) {
    const response = await api.post("/usuarios", payload);
    return response.data;
  }

  return useMutation({
    mutationFn: createUser,
  });
}
