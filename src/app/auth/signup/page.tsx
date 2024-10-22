"use client"
import { signupadmin } from "@/api/auth";
import SycureButton from "@/components/SycureButton";
import SycureInput from "@/components/SycureInput";
import SycureText from "@/components/SycureText";
import useApi from "@/hooks/useApi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Cookies from 'js-cookie'; // Import js-cookie

export default function Page() {
   const router = useRouter()
   const [firstname, setFirstname] = React.useState('')
   const [lastname, setLastname] = React.useState('')
   const [email, setEmail] = React.useState('')
   const [estate, setEstate] = React.useState('')
   const [password, setPassword] = React.useState('')
   const [confirmPassword, setConfirmPassword] = React.useState('')

   const {response, request, loading, error} = useApi()
  const handleSignup = async() => {
    const data = {
      firstname,
      lastname,
      email,
      estate,
      password,
      confirmPassword
    }
     try {
      await request('post', '/register', data); // Make the request      
      if (response) {
        Cookies.set('adminToken', response, {expires: 10})
        router.push('/'); // Redirect user to home page
      }
    } catch (err) {
      console.error('Signup failed', err);
    }
  }

  console.log(response, error, loading)
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center">
        <h1 className="text-3xl text-center font-bold">Create New Account</h1>

        <div className="w-full">
          <form action="">
            <SycureInput value={firstname} setValue={setFirstname} type="text" label="First Name" placeholder="Enter your name" />
            <SycureInput value={lastname} setValue={setLastname} type="text" label="Last Name" placeholder="Enter your name" />
            <SycureInput value={email} setValue={setEmail} type="text" label="Email Address" placeholder="Enter your email address" />
            <SycureInput value={estate} setValue={setEstate} type="text" label="Estate name" placeholder="Enter your estate name" />
            <SycureInput value={password} setValue={setPassword} type="text" label="Password" placeholder="Enter your password" />
            <SycureInput value={confirmPassword} setValue={setConfirmPassword} type="text" label="Re-Password" placeholder="Enter the password you entered in the box above" />
          </form>
         <SycureText  type="TEXT" className="text-[12px] mb-5">By clicking “Sign up”, I agree to Peachville’s privacy policy and terms of service.</SycureText>
          <SycureButton onClick={handleSignup} variant="PRIMARY">{loading ? 'Loading...' : 'Sign up'}</SycureButton>
        </div>
      </main>
    </div>
  );
}
