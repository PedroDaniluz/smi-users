import { useQuery } from "@tanstack/react-query";
import { useApi } from "@/lib/api";

async function getUsers() {
  const api = useApi();
  const response = await api.get("/usuarios");
  return response.data;
}

export function useGetUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
}