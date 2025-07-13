/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { signIn } from "next-auth/react";
import { usePathname } from "next/navigation";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {FaGoogle} from "react-icons/fa6"


export default function LoginPage() {

  const currentPath = usePathname();

  const handleLogin = () => {
    signIn("google", {
      callbackUrl: currentPath || "/",
    })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const fromData = new FormData(form);

    const name = fromData.get("name") as string;
    const email = fromData.get("email") as string;

    const userInfo = {
      name: name,
      email: email,
      role: 'user'
    }


  }
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <div className="bg-amber-100 rounded-xl shadow-xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Login to Your Account</h1>
        <p className="text-gray-600 mb-6">Use your Google account to continue</p>
        <form className="my-6 space-y-4" onSubmit={handleSubmit}>
          
          <Input className="placeholder:text-sm font-semibold" type="text" name="name" id="name" placeholder="Name" required />
          
          <Input className="placeholder:text-sm font-semibold" type="email" name="email" id="email" placeholder="Email" required />
          <Button type="submit">Submit</Button>
        </form>
        <Button
          onClick={handleLogin}
          className=" text-white px-6 py-2 rounded-lg"
        >
          <FaGoogle size={24}/>Continue with Google
        </Button>
      </div>
    </div>
  );
}
