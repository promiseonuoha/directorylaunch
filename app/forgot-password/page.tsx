"use client";
import InputGroup from "@/components/input-group";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");

  return (
    <div className="pt-[60px] pb-[90px] flex flex-col items-center">
      <h1 className="font-semibold text-[28px] text-center mb-3">
        Forgot Password
      </h1>
      <p className="text-center font-medium text-base text-black/70 mb-12">
        Please enter your email address.
      </p>

      <div className="w-[405px] mt-8 flex flex-col">
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

          <Button
            variant="default"
            className="bg-[#FF4407] hover:bg-[#FF4407]/80 cursor-pointer w-full h-12 rounded-xl text-lg text-white font-bold"
          >
            Send rest password link
          </Button>
          <div className="w-full flex justify-center">
            <Link href="/login" className="font-medium text-black/70">
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
