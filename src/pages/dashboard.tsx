import { signIn, signOut, useSession } from "next-auth/react";

import { Sidebar } from "~/components/Sidebar";

export default function Dashboard() {
  const session = useSession();
  const user = session.data?.user;

  return (
    <div className="flex">
      <Sidebar />

      <div>This is the dashboard</div>
    </div>
  );
}
