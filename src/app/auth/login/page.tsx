"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    console.log(res);
    if (res?.error) {
      setError(res.error);
    } else {
      router.push('/dashboard');
      router.refresh();
    }
  });

  return (
    <div className="my-16 flex justify-center items-center">
      <form onSubmit={onSubmit} className="">

        {error && (
          <p className="bg-red-500 text-lg text-white p-3 rounded mb-2">{error}</p>
        )}

        <h1 className="text-slate-200 font-bold text-center text-4xl mb-6">Inicio de sesion</h1>

        <label htmlFor="email" className="text-slate-500 mb-1 block text-sm">
          Correo Electronico:
        </label>
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
          className="p-3 rounded-lg block mb-2 bg-semidark text-slate-300 w-full"
          placeholder="user@email.com"
        />

        {errors.email && (
          <span className="text-red-500 text-xs">{(errors.email.message as string)}</span>
        )}

        <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
          ContraseNa:
        </label>
        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
          })}
          className="p-3 rounded-lg block mb-2 bg-semidark text-slate-300 w-full"
          placeholder="******"
        />

        {errors.password && (
          <span className="text-red-500 text-xs">
            {(errors.password.message as string)}
          </span>
        )}

        <button className="w-full bg-primary font-bold mb-2 text-white p-3 rounded-lg mt-2">
          Iniciar sesion
        </button>
        <p className="text-center">No tienes una cuenta? <a className="text-primary" href="/auth/register">Registrate</a></p>
      </form>
    </div>
  );
}

export default LoginPage;
