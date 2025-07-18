'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';
import bcrypt from 'bcryptjs';
import useAxiosPublic from '@/components/Hooks/useAxiosPublic';
import Link from 'next/link';


const RegisterPage = () => {


  const axiosPublic = useAxiosPublic();



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const fromData = new FormData(form);

    const name = fromData.get("name") as string;
    const email = fromData.get("email") as string;
    const password = fromData.get("password") as string;
    const securePass = await bcrypt.hash(password, 10);

    const userInfo = {
      name: name,
      email: email,
      password: securePass,
      role: 'user'
    }

    try {
      const { data } = await axiosPublic.post("/api/users", userInfo);
      if (data.success === true) {
        alert(data.message)
      }

      if (data.success === false) {
        alert(data.message)
      }
    } catch (error) {
      console.log('create user error', error)
    }



  }


  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
        <div className="bg-amber-100 rounded-xl shadow-xl p-8 w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4">Welcome to register</h1>
          <p className="text-gray-600 mb-6">Use your Google account to continue</p>
          <form className=" space-y-4" onSubmit={handleSubmit}>

            <Input className="placeholder:text-sm font-semibold" type="text" name="name" id="name" placeholder="Name" required />

            <Input className="placeholder:text-sm font-semibold" type="email" name="email" id="email" placeholder="Email" required />
            <Input className="placeholder:text-sm font-semibold" type="text" name="password" id="password" placeholder="Password" required />
            <Button type="submit">Submit</Button>
          </form>
          <p className="font-semibold">if you are not logged in got to <Link className="text text-red-400 underline" href={`/login`}>Login</Link></p>
          <hr className='my-2' />
         

        

        </div>
      </div>
    </div>
  );
};

export default RegisterPage;