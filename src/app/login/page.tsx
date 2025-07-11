/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
  const currentPath = window.location.pathname;
  const handleLogin = () => {
    signIn("google", {
      callbackUrl: currentPath,
    })
  }
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Login to Your Account</h1>
        <p className="text-gray-600 mb-6">Use your Google account to continue</p>

        <button
          onClick={handleLogin}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}
