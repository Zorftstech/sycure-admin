"use client";
import SycureButton from "@/components/SycureButton";
import SycureInput from "@/components/SycureInput";
import SycureText from "@/components/SycureText";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center">
        <div className="w-full">
         <SycureText type="SUBHEADER" >Account Created Successfully</SycureText>
         <SycureText type="SECONDARYTEXT" className="mb-10 text-center">Please check your email to verify your account and login</SycureText>
          <SycureButton onClick={() => router.push('reset-password')} variant="PRIMARY">Login</SycureButton>
        </div>
      </main>
    </div>
  );
}
