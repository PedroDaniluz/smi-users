import Header from "@/modules/navbar/components/header";
import { CreateUserDialog } from "@/modules/users/components/create-user-dialog";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="p-8">
        <CreateUserDialog />
      </div>
    </div>
  );
}
