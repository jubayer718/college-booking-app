'use client'

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      email,
      password,
      redirect:false
    })


    if (res?.ok) {
      router.push('/')
    } else {
        alert("❌ Login failed. Please check credentials.");
    }
  }
  
  return (
    <div className="">


      <form onSubmit={handleSubmit} className="space-y-4 ">
      <Input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
        <Button type="submit">Login</Button>
      </form>
        <p className="font-semibold">if you are not logged in got to <Link className="text text-red-400 underline" href={`/register`}>Register</Link></p>

      


      
      {/* <form
        // action={async (formData) => {
        // "use server"
        // await signIn("credentials", formData)
        // }}
        onSubmit={handleSubmit}
        className="my-6 space-y-4"
      >
        <Input className="placeholder:text-sm font-semibold" type="email" name="email" id="email" placeholder="Email" required />
        <Input className="placeholder:text-sm font-semibold" type="password" name="password" id="password" placeholder="Password" required/>
      <Button type="submit">Login</Button>
      </form> */}

    </div>
  );
};

export default LoginForm;