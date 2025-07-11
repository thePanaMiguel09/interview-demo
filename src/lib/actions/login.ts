import api from "../axios";
import {User} from '@/Infrastructure/Interfaces/User'

interface LoginProps {
  email: string;
  password: string;
}

export default async function login({ email, password }: LoginProps) {
  const response = await api.post<User>("/auth/login", {
    email,
    password,
  });
  return {
    user: response.data.usuario,
    token:response.data.token
  };
}
