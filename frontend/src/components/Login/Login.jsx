import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import React from 'react'

function Login() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  )
}

export default Login