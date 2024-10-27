"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Welcome from "./components/Welcome"
import HomePage from "./components/Home/HomePage"

export default function Home() {
  const { data: session } = useSession()
  if (session) {
    return (
      // <>
      //   Signed in as {session.user.email} <br />
      //   <button onClick={() => signOut()}>Sign out</button>
      // </>
      <div>
        <HomePage></HomePage>
      </div>
    )
  }
  return (
    // <>
    //   Not signed in <br />
    //   <button onClick={() => signIn()}>Sign in Using Github</button>
    //   {/* <button onClick={() => signIn("google")}>Sign in Using Google</button> */}
    // </>
    <>
      <Welcome></Welcome>
    </>
  )
}