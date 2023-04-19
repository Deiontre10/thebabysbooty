import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "../components/Nav";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="bg-purple-500 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button onClick={() => signIn('google')} className="bg-white p-2 px-4 rounded-lg">Login with Google</button>
        </div>
      </div>
    )
  }
  return (
    <div className="bg-purple-500 min-h-screen">
      <Nav />
      <div className="">Logged in {session.user.email}</div>
    </div>
  )
}
