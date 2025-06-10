"use client";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TUser } from "../types";
import { Eye, EyeOff } from "lucide-react";

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

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="*********"
                defaultValue={user.senha}
              />
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent border-none p-0 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setShowPassword((v) => !v);
                }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
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
