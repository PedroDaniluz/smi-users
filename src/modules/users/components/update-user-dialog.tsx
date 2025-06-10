"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TUser } from "../types";

interface UpdateUserDialogProps {
  user: TUser;
  open: boolean;
  setOpen: (open: boolean) => void;
  updateUser: (user: TUser) => void;
}

export function UpdateUserDialog({
  user,
  open,
  setOpen,
  updateUser,
}: UpdateUserDialogProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const password = data.get("password") as string;
    const updatedUser = {
      id: user.id,
      nome: name,
      email: email,
      senha: password,
    };
    updateUser(updatedUser);
    setOpen(false);
  }

  return (
    <Dialog open={open}>
      <DialogContent className="lg:max-w-[850px]">
        <DialogHeader>
          <DialogTitle>Alterar Usuário</DialogTitle>
          <DialogDescription>
            Altere os detalhes do usuário abaixo.
          </DialogDescription>
        </DialogHeader>

        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-3">
            <Label htmlFor="name">Nome</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="João Silva"
              defaultValue={user.nome}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="mail">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              defaultValue={user.email}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="password">Senha</Label>
            <Input
              type="password"
              id="password"
              name="password"
              defaultValue={user.senha}
            />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button type="submit">Salvar modificações</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
