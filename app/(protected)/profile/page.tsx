"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const [addedDirectory, setAddedDirectory] = useState(true);
  const [promotion, setPromotion] = useState(true);

  return (
    <div className="w-full max-w-[1000px] h-max flex flex-col">
      <div className="w-full mb-8">
        <h1 className="font-semibold text-xl mb-1">Profile</h1>
        <p className="font-medium text-base text-black/70">
          Update your personal profile information
        </p>
      </div>

      {/* Profile Section */}
      <section className="bg-white mb-8 p-6 rounded-2xl shadow-xs border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-primary-color text-white flex items-center justify-center text-lg font-semibold">
              S
            </div>
            <div>
              <p className="font-medium">Samar Bose</p>
              <p className="text-sm text-gray-600">samarbose60@gmail.com</p>
            </div>
          </div>
          <button
            onClick={() => {
              router.push("/edit-profile");
            }}
            className="px-4 cursor-pointer py-2 text-sm border rounded-lg hover:bg-gray-100"
          >
            Edit Profile
          </button>
        </div>
      </section>

      {/* Security Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-1">Security</h2>
        <p className="text-sm text-gray-600 mb-4">
          Manage your password and account security.
        </p>

        <div className="p-4 rounded-xl border border-gray-200 shadow-xs flex items-center justify-between">
          <div>
            <p className="font-medium">Password</p>
            <p className="text-sm text-gray-600">
              Change your password to keep your account secure.
            </p>
          </div>
          <button
            onClick={() => {
              router.push("/change-password");
            }}
            className="px-4 py-2 text-sm cursor-pointer border rounded-lg hover:bg-gray-100 flex items-center gap-2"
          >
            <span>Change Password</span>
          </button>
        </div>
      </section>

      {/* Notifications Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-1">Notifications</h2>
        <p className="text-sm text-gray-600 mb-4">
          Customize your notification preferences.
        </p>

        <div className="p-4 shadow-xs rounded-xl border border-gray-200 flex flex-col gap-6">
          <div className="w-full flex items-center justify-between">
            <div>
              <p className="font-medium">Notification Settings</p>
              <p className="text-sm text-gray-600">
                Choose what alerts you want to receive.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="w-max max-w-full cursor-pointer flex items-center gap-2">
              <Checkbox
                id="addedDirectory"
                checked={addedDirectory}
                onCheckedChange={(v) => {
                  setAddedDirectory(v as boolean);
                }}
              />
              <label
                htmlFor="addedDirectory"
                className="text-sm font-normal text-black/70 "
              >
                Get notified by email about newly added product.
              </label>
            </div>
            <div className="w-max max-w-full cursor-pointer flex items-center gap-2">
              <Checkbox
                id="promotion"
                checked={promotion}
                onCheckedChange={(v) => {
                  setPromotion(v as boolean);
                }}
              />
              <label
                htmlFor="promotion"
                className="text-sm font-normal text-black/70 "
              >
                Get notified by email about new promotion.
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* Account Deletion Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-1">Account</h2>
        <p className="text-sm text-gray-600 mb-4">
          Options related to account status and deletion.
        </p>

        <div className="p-4 shadow-xs rounded-xl border border-gray-200 flex items-center justify-between">
          <div>
            <p className="font-medium text-red-600">Delete Account</p>
            <p className="text-sm text-gray-600">
              Permanently delete your account and all associated data.
            </p>
          </div>
          <button
            onClick={() => router.push("/delete-account")}
            className="px-4 py-2 cursor-pointer text-sm border border-red-500 text-red-600 rounded-lg hover:bg-red-50"
          >
            Delete
          </button>
        </div>
      </section>

      {/* Session Section */}
      <section>
        <h2 className="text-xl font-semibold mb-1">Session</h2>
        <p className="text-sm text-gray-600 mb-4">
          Manage your current session and sign out.
        </p>

        <div className="p-4 shadow-xs rounded-xl border border-gray-200 flex items-center justify-between">
          <div>
            <p className="font-medium">Current Session</p>
            <p className="text-sm text-gray-600">
              Sign out from your current session.
            </p>
          </div>
          <button className="px-4 py-2 cursor-pointer text-sm bg-primary-color text-white rounded-lg hover:opacity-80">
            Sign Out
          </button>
        </div>
      </section>
    </div>
  );
}
