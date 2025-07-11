'use client';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function AuthButtons() {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <div className="flex items-center gap-2">
        <span>{session.user.name}</span>
        <button onClick={() => signOut()} className="bg-red-500 px-3 py-1 text-white">Sign Out</button>
      </div>
    );
  }

  return (
    <button onClick={() => signIn('google')} className="bg-blue-500 px-3 py-1 text-white">Sign In</button>
  );
}
