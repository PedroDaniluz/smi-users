"use client";

import Header from "@/modules/navbar/components/header";
import { CreateUserDialog } from "@/modules/users/components/create-user-dialog";
import { UserDataTable } from "@/modules/users/components/users-list-table";
import { useCreateUser } from "@/modules/users/query/create-user";
import { useGetUsers } from "@/modules/users/query/get-users";
import { useDeleteUser } from "@/modules/users/query/delete-user";
import { useUpdateUser } from "@/modules/users/query/update-user";

export default function Home() {
  const { data: users, isLoading } = useGetUsers();
  const { mutate: createUser } = useCreateUser();
  const { mutate: deleteUser } = useDeleteUser();
  const { mutate: updateUser } = useUpdateUser();

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="p-8 ">
        <UserDataTable
          data={users ?? []}
          loading={isLoading}
          onDeleteUser={deleteUser}
          updateUser={updateUser}
        />
        <CreateUserDialog createUser={createUser} />
      </div>
    </div>
  );
}
