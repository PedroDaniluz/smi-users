import { useQuery } from "@tanstack/react-query";
import { useApi } from "@/lib/api";

export function useGetUsers() {
  const api = useApi();

  async function getUsers() {
    const response = await api.get("/usuarios");
    return response.data;
  }

  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
}
