"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import z from "zod";
import login from "@/lib/actions/login";

const loginSchema = z.object({
  email: z
    .string()
    .nonempty("El correo es un campo obligatorio")
    .email("El correo no tiene un formato válido"),
  password: z.string().nonempty("La contraseña es un campo obligatorio"),
});

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerButton = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await login({ email, password });
      if (data) {
        localStorage.setItem("token", data.token);
        router.push("/signup");
        return;
      }
      console.log("No Data");
    } catch (error) {
      console.log("Error " + error);
    }
  };

  return (
    <div className="w-[80%] h-[80%] bg-blue-600 rounded-xl  md:max-w-md lg:max-w-lg">
      <header className="w-full h-[20%] flex flex-col items-center justify-center">
        <h1 className="font-extrabold">Gestión de Proyectos</h1>
        <h2 className="text-center font-light">
          Sistema para la gestión de proyectos escolares
        </h2>
      </header>
      <main className="w-full h-[60%] flex flex-col justify-evenly items-center sm:flex sm:flex-col">
        <form
          onSubmit={handlerButton}
          className="w-full h-full flex flex-col justify-evenly items-center"
        >
          <section className="w-[90%] h-20 flex flex-col justify-center">
            <label htmlFor="email" className="font-semibold">
              Correo
            </label>
            <input
              type="email"
              id="email"
              placeholder="Ingresa tu email"
              className="w-full h-10 bg-blue-900 rounded-sm border-1 border-blue-500
                pl-2"
              onChange={(e) => setEmail(e.target.value)}
            />
          </section>

          <section className="w-[90%] h-20 flex flex-col justify-center">
            <label htmlFor="password" className="font-semibold">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              className="w-full h-10 bg-blue-900 rounded-sm border-1 border-blue-500
                pl-2"
            />
          </section>
          <button
            className="w-[90%] h-[10%] rounded-sm border-1 border-blue-500 hover:bg-blue-700"
            type="submit"
            onClick={handlerButton}
          >
            Ingresar
          </button>
        </form>
      </main>

      <footer className="w-full h-[20%] flex flex-col justify-center items-center">
        <p>¿No tienes una cuenta?</p>
        <nav>
          <Link href="/signup" className="underline font-semibold">
            Registrarse
          </Link>
        </nav>
      </footer>
    </div>
  );
}
