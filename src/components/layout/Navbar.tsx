"use client";
import { useSession,signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="fixed top-0 z-50 w-full p-4 px-8 bg-white shadow flex justify-between items-center">
      <span className="font-bold">College Booking</span>
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
  );
};

export default Navbar;