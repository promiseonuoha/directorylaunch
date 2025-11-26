"use client";
import InputGroup from "@/components/input-group";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="pt-[60px] max-mobile:pt-10 max-mobile:pb-7 pb-[90px] flex flex-col items-center">
      <h1 className="font-semibold max-mobile:text-xl text-[28px] text-center mb-3">
        Log in to your account
      </h1>
      <p className="text-center font-medium max-mobile:text-sm max-mobile:mb-7 text-base text-black/70 mb-12">
        Welcome back! Please sign in to continue.
      </p>
      <button
        type="button"
        className="h-12 flex font-medium max-mobile:text-sm text-base gap-3 items-center rounded border border-[#CDCDE1] px-3.5 cursor-pointer"
      >
        <Image src="/svg/google.svg" alt="Google" width={24} height={24} />
        Continue with Google
      </button>
      <div className="w-[405px] max-w-full max-mobile:px-3 max-mobile:mt-5 mt-8 flex flex-col">
        <div className="relative w-full mb-8 h-full flex justify-center items-center">
          <div className="absolute w-full left-0 top-[50%] -translate-y-[50%] border-t border-x-[#E4E4F6] z-0"></div>
          <p className="text-black/70 max-mobile:text-sm font-medium text-base px-3.5 bg-white z-20">
            Or continue with
          </p>
        </div>
        <div className="w-full flex flex-col gap-8 mb-7">
          <InputGroup
            value={email}
            setValue={setEmail}
            id="email"
            label="Email address"
            required={true}
            type="email"
            large
          />
          <InputGroup
            value={password}
            setValue={setPassword}
            id="password"
            label="Password"
            required={true}
            type="password"
            large
          />
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Checkbox className="w-6 h-6" id="remember" />
              <label
                htmlFor="remember"
                className="text-black/70 text-base max-mobile:text-sm font-medium"
              >
                Remember me
              </label>
            </div>
            <Link
              href="/forgot-password"
              className="font-medium max-mobile:text-sm text-black/70"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        <Button
          variant="default"
          className="bg-[#FF4407] max-mobile:mb-4 mb-12 hover:bg-[#FF4407]/80 cursor-pointer w-full h-12 rounded-xl text-lg text-white font-bold"
        >
          Continue with Email
        </Button>
        <div className="w-full gap-3 flex items-center justify-center">
          <p className="font-medium max-mobile:text-sm text-black/70">
            Don't have an account?
          </p>
          <Link href="/register" className="font-semibold max-mobile:text-sm">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
