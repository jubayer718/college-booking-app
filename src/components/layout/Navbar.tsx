"use client";
import { useSession,signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="fixed top-0 z-50 w-full p-4 px-8 bg-white shadow flex justify-between items-center">
      <span className="font-bold">College Booking</span>
      <div className="flex items-center gap-4">

        <ul className="flex gap-4 sm:gap-2 font-semibold">
          <Link href={''}>Home</Link>
          <Link href={''}>Colleges</Link>
          <Link href={''}>My College</Link>
        </ul>
          {
        session ? (
          <div className="flex gap-4 items-center">
            <p>{session.user?.name}</p>
            <button onClick={()=>signOut()} className="text-sm bg-red-500 text-white px-4 py-1 rounded">Logout</button>
          </div>
        ) : (
            <a href="/login"
            className="text-sm bg-blue-500 text-white px-4 py-1 rounded"
            >Login</a>
        )
      }
    </div>
    </div>
  );
};

export default Navbar;