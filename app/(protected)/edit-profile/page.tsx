"use client";
import InputGroup from "@/components/input-group";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";

export default function Form() {
  const [profileInfo, setProfileInfo] = useState({
    name: "",
    bio: "",
    username: "",
    website: "",
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
        <h1 className="font-semibold text-xl">Edit Profile Details</h1>
        <div className="w-full grid grid-cols-1 gap-8">
          <InputGroup
            large={true}
            id="name"
            label="Your Full Name"
            placeholder="Enter name"
            value={profileInfo.name}
            setValue={(value) => updateProfile(value, "name")}
            required={true}
            type="text"
          />
        </div>
        <div className="w-full max-mobile:grid-cols-1 max-mobile:gap-3 grid grid-cols-2 gap-8">
          <InputGroup
            large={true}
            id="username"
            label="Username"
            placeholder="Your username"
            required={true}
            value={profileInfo.username}
            setValue={(value) => updateProfile(value, "username")}
            type="text"
          />
          <InputGroup
            large={true}
            id="website"
            label="Website"
            placeholder="Enter website"
            value={profileInfo.website}
            setValue={(value) => updateProfile(value, "website")}
            required={false}
            type="url"
          />
        </div>
        <InputGroup
          large={true}
          id="bio"
          label="Bio"
          value={profileInfo.bio}
          setValue={(value) => updateProfile(value, "bio")}
          placeholder="Enter your bio"
          required={false}
          type="textarea"
        />

        <div className="w-full flex justify-start pb-8 pt-2">
          <Button
            variant="default"
            type="button"
            className="bg-primary-color text-base font-semibold hover:bg-primary-color/80 cursor-pointer"
          >
            Update Profile
          </Button>
        </div>
      </div>
    </form>
  );
}
