export type TUser = {
  id: string;
  nome: string;
  email: string;
  senha: string;
};

export type TUserCreate = {
  nome: string;
  email: string;
  senha: string;
};
