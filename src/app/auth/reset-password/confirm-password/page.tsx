"use client";
import SycureButton from "@/components/SycureButton";
import SycureInput from "@/components/SycureInput";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center">
        <h1 className="text-3xl text-center font-bold">Reset Password</h1>

        <div className="w-full">
          <form action="">
            <SycureInput type="text" label="Enter password" placeholder="Enter your email address" />
            <SycureInput type="text" label="Re-Enter Password" placeholder="Enter your email address" />
          </form>

          <SycureButton onClick={() => router.push('reset-password')} variant="PRIMARY">Login</SycureButton>
          <SycureButton onClick={() => router.back()} variant="TRANSPARENT">← Return to Log in</SycureButton>
        </div>
      </main>
    </div>
  );
}
