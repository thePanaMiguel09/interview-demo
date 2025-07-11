"use client";

import Button from "@/components/Button";
import React, { useState } from "react";
import Link from "next/link";
import z from "zod";
import login from "@/lib/action/login";
import { log } from "console";

const loginSchema = z.object({
  email: z.email().nonoptional(),
  passwor: z.string().nonoptional(),
});

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerButton = async () => {
    try {
        const {data,status} = await login({email,password});
        if (status == 404) {
            console.log('No existe el usuario ' + email);
        }

        console.log(data);

    } catch (error) {
        console.log('Error ' + error);
    }
  };

  return (
    <div className="w-[80%] h-[80%] bg-blue-600 rounded-xl">
      <header className="w-full h-[20%] flex flex-col items-center justify-center">
        <h1 className="font-extrabold">Gestión de Proyectos</h1>
        <h2 className="text-center font-light">
          Sistema para la gestión de proyectos escolares
        </h2>
      </header>
      <main className="w-full h-[60%] flex flex-col justify-evenly items-center sm:flex sm:flex-col">
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
            onChange={(e)=> setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
            className="w-full h-10 bg-blue-900 rounded-sm border-1 border-blue-500
                pl-2"
          />
        </section>

        <Button onClick={handlerButton} buttonTitle="Ingresar" />
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
