import { useMutation } from "@tanstack/react-query";
import { useApi } from "@/lib/api";

interface UserPayload {
  nome: string;
  email: string;
  senha: string;
}

export function useCreateUser() {
  const api = useApi();

  async function createUser(payload: UserPayload) {
    const response = await api.post("/usuarios", payload);
    return response.data;
  }

  return useMutation({
    mutationFn: createUser,
  });
}
