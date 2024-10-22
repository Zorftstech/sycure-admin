"use client"
import SycureButton from "@/components/SycureButton";
import SycureInput from "@/components/SycureInput";
import SycureText from "@/components/SycureText";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
   const router = useRouter()
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center">
        <h1 className="text-3xl text-center font-bold">Forgot password</h1>

        <div className="w-full">
          <form action="">
            <SycureInput type="text" label="Email Address" placeholder="Enter your email address" />
          </form>

          <SycureButton onClick={() => router.push('reset-password/confirm-password')} variant="PRIMARY">Reset password</SycureButton>
          <SycureButton onClick={() => router.back()} variant="TRANSPARENT">← Return to Log in</SycureButton>
        </div>
      </main>
    </div>
  );
}
