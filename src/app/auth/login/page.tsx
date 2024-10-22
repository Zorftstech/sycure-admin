"use client";
import SycureButton from "@/components/SycureButton";
import SycureInput from "@/components/SycureInput";
import SycureText from "@/components/SycureText";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center">
        <h1 className="text-3xl text-center font-bold">LOGIN</h1>

        <div className="w-full">
          <form action="">
            <SycureInput type="text" label="Email Address" placeholder="Enter your email address" />
            <SycureInput type="password" label="Password" placeholder="Enter your Password" />
          </form>

          <div className="flex justify-between mb-10">
            <div className="flex gap-3 cursor-pointer">
              <div className="w-7 h-7 rounded-md justify-center flex items-center border-2 border-[#D9D9D9] bg-red-5"><p>✔️</p></div>
              <SycureText type="TEXT">Remember me</SycureText>
            </div>
            <SycureText onClick={() => router.push('reset-password')} type="TEXT">Forgot Password?</SycureText>
          </div>
          <SycureButton onClick={() => router.push('reset-password')} variant="PRIMARY">Login</SycureButton>
          <SycureButton onClick={() => router.push('signup')} variant="TRANSPARENT">Create New Account →</SycureButton>
        </div>
      </main>
    </div>
  );
}
