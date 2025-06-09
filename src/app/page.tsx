"use client";

import Header from "@/modules/navbar/components/header";
import { CreateUserDialog } from "@/modules/users/components/create-user-dialog";
import { UserDataTable } from "@/modules/users/components/users-list-table";
import { useGetUsers } from "@/modules/users/query/get-users";

export default function Home() {
  const { data: users, isLoading } = useGetUsers();

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="p-8">
        <CreateUserDialog />
        <UserDataTable data={users ?? []} loading={isLoading} />
      </div>
    </div>
  );
}
