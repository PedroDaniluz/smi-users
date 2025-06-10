"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CirclePlus } from "lucide-react";
import { TUserCreate } from "../types";
import { Eye, EyeOff } from "lucide-react";

export function CreateUserDialog({
  createUser,
}: {
  createUser: (user: TUserCreate) => void;
}) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const password = data.get("password") as string;
    const user: TUserCreate = {
      nome: name,
      email: email,
      senha: password,
    };
    createUser(user);
    setOpen(false);
  }

  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="w-full p-6">
          <CirclePlus className="mr-2 h-5 w-5" strokeWidth={3} />
          Adicionar usuário
        </Button>
      </DialogTrigger>
      <DialogContent className="lg:max-w-[850px]">
        <DialogHeader>
          <DialogTitle>Adicionar Usuário</DialogTitle>
          <DialogDescription>
            Crie um novo usuário com nome email e senha. O usuário será
            adicionado ao sistema e poderá acessar as funcionalidades
            disponíveis.
          </DialogDescription>
        </DialogHeader>

        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-3">
            <Label htmlFor="name">Nome</Label>
            <Input type="text" id="name" name="name" placeholder="João Silva" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="mail">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="email@email.com"
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
            <Button type="submit">Criar usuário</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
