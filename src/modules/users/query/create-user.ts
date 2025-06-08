import { useMutation } from "@tanstack/react-query";
import { useApi } from "@/lib/api";

interface UserPayload {
  nome: string;
  email: string;
  senha: string;
}

async function createUser(payload: UserPayload) {
  const api = useApi();
  const response = await api.post("/usuarios", payload);
  return response.data;
}

export function useCreateUser() {
  return useMutation({
    mutationFn: (payload: UserPayload) => createUser(payload),
  });
}