
import Link from "next/link";
import { getServerSession } from "next-auth";
import { useSession, signOut } from "next-auth/react";

async function Navbar() {
  const session = await getServerSession();

  return (
    <nav className="bg-zinc-900 p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/about">
          <h1 className="font-bold text-xl"><span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">Xpectra</span></h1>
        </Link>

        <ul className="flex gap-x-2">
          {session ? (
            <>
              <li className="px-3 py-1">
                <Link href="/dashboard/profile">Perfil</Link>
              </li>
              <li className="px-3 py-1">
                <Link href="/dashboard/soporte">Soporte Tecnico</Link>
              </li>
              <li className="px-3 py-1">
                <Link href="/api/auth/signout">LogOut</Link>
              </li>
            </>
            
          ) : (
            <>
              <li className="px-3 py-1">
                <Link href="/about">Home</Link>
              </li>
              <li className="px-3 py-1">
                <Link href="/paquetes">Paquetes</Link>
              </li>
              <li className="bg-indigo-500 px-3 py-1">
                <Link href="/">Login</Link>
              </li>
              <li className="bg-indigo-700 px-3 py-1">
                <Link href="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;