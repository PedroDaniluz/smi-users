"use client";

import Header from "@/modules/navbar/components/header";
import { CreateUserDialog } from "@/modules/users/components/create-user-dialog";
import { UserDataTable } from "@/modules/users/components/users-list-table";
import { useGetUsers } from "@/modules/users/query/get-users";
import { useDeleteUser } from "@/modules/users/query/delete-user";

export default function Home() {
  const { data: users, isLoading } = useGetUsers();
  const { mutate: deleteUser } = useDeleteUser();

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="p-8">
        <CreateUserDialog />
        <UserDataTable
          data={users ?? []}
          loading={isLoading}
          onDeleteUser={deleteUser}
        />
      </div>
    </div>
  );
}
