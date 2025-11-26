"use client";
import InputGroup from "@/components/input-group";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";

export default function Form() {
  const [profileInfo, setProfileInfo] = useState({
    password: "",
    passwordConfirm: "",
    oldPassword: "",
  });

  const updateProfile = (newValue: string, label: string) => {
    setProfileInfo((prev) => {
      return { ...prev, [label]: newValue };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[1000px] h-max flex flex-col"
    >
      <div className="w-full flex flex-col gap-6">
        <h1 className="font-semibold max-mobile:text-lg text-xl">
          Change Password
        </h1>

        <div className="w-full grid max-mobile:grid-cols-1 max-mobile:gap-3 grid-cols-2 gap-8">
          <InputGroup
            value={profileInfo.password}
            setValue={(value) => updateProfile(value, "password")}
            large={true}
            id="newPassword"
            label="New password (Optional)"
            placeholder="New password"
            required={false}
            type="password"
          />
          <InputGroup
            value={profileInfo.passwordConfirm}
            setValue={(value) => updateProfile(value, "passwordConfirm")}
            large={true}
            id="confirmPassword"
            label="Confirm password (Optional)"
            placeholder="Confirm password"
            required={false}
            type="password"
          />
        </div>
        <div className="w-full max-mobile:grid-cols-1 grid grid-cols-2 gap-8">
          <InputGroup
            large={true}
            id="currentPassword"
            label="Current password (Optional)"
            placeholder="Enter Current password"
            required={false}
            type="password"
            value={profileInfo.oldPassword}
            setValue={(value) => updateProfile(value, "oldPassword")}
          />
        </div>
        <div className="w-full flex justify-start pt-2">
          <Button
            variant="default"
            type="button"
            className="bg-primary-color text-base font-semibold hover:bg-primary-color/80 cursor-pointer"
          >
            Change Password
          </Button>
        </div>
      </div>
    </form>
  );
}
