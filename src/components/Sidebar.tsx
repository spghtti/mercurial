import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function Sidebar() {
  const session = useSession();
  const user = session.data?.user;

  return (
    <div className="color-white left-0 top-0 flex h-screen w-36 flex-col border-x bg-backgroundDarker text-white shadow-lg">
      <nav className="">
        {/* <Image src="#" alt="" className="w-5" /> */}
        <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href={"/stocks/"}>Stocks</Link>
          </li>
          <li>
            <Link href={"/friends/"}>Friends</Link>
          </li>
          {user != null && (
            <li>
              <Link href={`/profiles/${user?.id}`}>Profile</Link>
            </li>
          )}
          <li>
            <Link href={"/settings/"}>Settings</Link>
          </li>
          {user == null ? (
            <li>
              <button onClick={() => void signIn()}>Sign in</button>
            </li>
          ) : (
            <li>
              <button onClick={() => void signOut()}>Log out</button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
