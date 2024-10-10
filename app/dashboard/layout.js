"use client";
import { SignedIn, SignedOut, SignIn, SignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
export default function RootLayout({ children }) {
  const router = useRouter();
  return (
    <>
      {children}
      {/* <SignedOut>{router.push("/auth")}</SignedOut> */}
    </>
  );
}
