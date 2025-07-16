"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-8">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="text-xl font-bold">College Booking</span>

        {/* Mobile Menu Toggle Button */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Menu Items */}
        <div className="hidden sm:flex gap-6 items-center font-medium">
          <Link href="/">Home</Link>
          <Link href="/colleges">Colleges</Link>
          <Link href="/admission/demo-id">Admission</Link>
          <Link href="/my-college">My College</Link>

          {session ? (
            <div className="flex items-center gap-3">
              <Link href="/profile" className="underline cursor-pointer">{session.user?.name}</Link>
              <button
                onClick={() => signOut()}
                className="text-sm bg-red-500 text-white px-3 py-1 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="text-sm bg-blue-500 text-white px-3 py-1 rounded"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col items-start px-4 pb-4 gap-3 font-medium bg-white shadow">
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/colleges" onClick={closeMenu}>Colleges</Link>
          <Link href="/admission/demo-id" onClick={closeMenu}>Admission</Link>
          <Link href="/my-college" onClick={closeMenu}>My College</Link>

          {session ? (
            <div className="flex flex-col gap-2">
              <span>{session.user?.name}</span>
              <button
                onClick={() => {
                  signOut();
                  closeMenu();
                }}
                className="text-sm bg-red-500 text-white px-3 py-1 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              onClick={closeMenu}
              className="text-sm bg-blue-500 text-white px-3 py-1 rounded"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
