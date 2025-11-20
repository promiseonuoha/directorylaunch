"use client";

import InputGroup from "@/components/input-group";
import MultiSelect from "@/components/multi-select";
import { Button } from "@/components/ui/button";
import { FormEvent, useMemo, useState } from "react";
import RichTextGroup from "./richtext-group";
import PaymentModels from "./payment-models";
import InputIconGroup from "./input-icon-group";
import FileUpload from "./file-upload";
import { cn } from "@/lib/utils";
import { Category, UploadedFile } from "@/types/schema";
import { useNewTool } from "@/contexts/new-tool";
import { useRouter } from "next/navigation";

const options = [
  { id: 1, label: "Analytics" },
  { id: 2, label: "AI Tools" },
  { id: 3, label: "Design" },
  { id: 4, label: "Developer Tools" },
  { id: 5, label: "Finance" },
];

export default function AddProductForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [companyInfo, setCompanyInfo] = useState("");
  const [email, setEmail] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [reddit, setReddit] = useState("");
  const [twitter, setTwitter] = useState("");
  const [ox, setOx] = useState("");
  const [pinterest, setPinterest] = useState("");
  const [logo, setLogo] = useState<UploadedFile[]>([]);
  const [screenshots, setScreenShots] = useState<UploadedFile[]>([]);

  const { setNewTool } = useNewTool();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const isValid = useMemo(() => {
    return (
      categories.length > 0 &&
      logo.length > 0 &&
      description.length > 0 &&
      paymentMethod.length > 0
    );
  }, [categories, description, logo, paymentMethod]);

  const handleContinue = () => {
    setNewTool({
      name,
      categories,
      companyInfo,
      description,
      email,
      facebook,
      instagram,
      linkedIn,
      logo,
      ox,
      paymentMethod,
      pinterest,
      reddit,
      screenshots,
      shortDescription,
      twitter,
      website,
    });
    router.push("/add-product/schedule");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[1000px] h-max flex flex-col"
    >
      <div className="w-full flex flex-col gap-6">
        <h1 className="font-semibold text-xl">Add a Product</h1>
        <InputGroup
          large={true}
          id="name"
          label="Tool Name"
          placeholder="Enter tool name"
          value={name}
          setValue={setName}
          required={true}
          type="text"
        />
        <InputGroup
          large={true}
          id="website"
          label="Tool URL/Website"
          placeholder="Enter tool url"
          value={website}
          setValue={setWebsite}
          required={true}
          type="url"
        />
        <MultiSelect
          options={options}
          label="Categories"
          large
          required
          selected={categories}
          placeholder="Select categories"
          setSelected={setCategories}
        />
        <InputGroup
          large={true}
          id="description"
          label="Short Description"
          placeholder="Enter a short description"
          value={shortDescription}
          setValue={setShortDescription}
          required={true}
          type="text"
        />

        <RichTextGroup
          large={true}
          label="Full Description"
          placeholder="Tell us about your tool"
          value={description}
          setValue={setDescription}
          required={true}
        />

        <div className="w-full flex flex-col mobile:gap-0.5 gap-1.5">
          <div className="flex w-max h-max items-start">
            <label
              className={` font-medium mobile:text-xs text-black/70 text-base leading-6`}
            >
              Logo
            </label>{" "}
            &nbsp;
            <span className="text-sm mobile:text-xs text-red-600">*</span>
          </div>
          <FileUpload value={logo} setValue={setLogo} multiple={false} />
        </div>

        <InputGroup
          large={true}
          id="companyinfo"
          label="Developer/Company Info"
          placeholder="Enter info"
          value={companyInfo}
          setValue={setCompanyInfo}
          required={false}
          type="text"
        />

        <div className="w-full flex flex-col tablet:gap-3 gap-6">
          <div className="flex w-max h-max items-start">
            <label
              className={`text-base tablet:text-xs leading-6 font-medium text-gray-700 `}
            >
              Pricing Type
            </label>{" "}
            &nbsp;
            <span className="text-sm tablet:text-xs text-red-600">*</span>
          </div>

          <PaymentModels value={paymentMethod} setValue={setPaymentMethod} />
        </div>
        <div className="w-full flex flex-col mobile:gap-0.5 gap-1.5">
          <div className="flex w-max h-max items-start">
            <label
              className={` font-medium mobile:text-xs text-black/70 text-base leading-6`}
            >
              Screenshots
            </label>
          </div>
          <FileUpload
            value={screenshots}
            setValue={setScreenShots}
            multiple={true}
          />
        </div>

        <div className="w-full flex flex-col tablet:gap-0.5 gap-1.5 my-3">
          <label
            className={`text-base tablet:text-xs leading-6 font-medium text-gray-700 `}
          >
            Contact email{" "}
            <span className="text-sm tablet:text-xs text-red-600">*</span>
          </label>
          <InputIconGroup
            placeholder="Enter email"
            icon="/mail.svg"
            required={true}
            type="email"
            value={email}
            setValue={setEmail}
          />
        </div>
        <div className="w-full flex flex-col tablet:gap-0.5 gap-1.5">
          <label
            className={`text-base tablet:text-xs leading-6 font-medium text-gray-700 `}
          >
            Social media links
          </label>
          <div className="w-full flex flex-col tablet:gap-3 gap-6">
            <InputIconGroup
              placeholder="page link"
              icon="/facebook.svg"
              required={false}
              type="url"
              value={facebook}
              setValue={setFacebook}
            />
            <InputIconGroup
              placeholder="page link"
              icon="/twitter.svg"
              required={false}
              type="url"
              value={twitter}
              setValue={setTwitter}
            />
            <InputIconGroup
              placeholder="page link"
              icon="/instagram.svg"
              required={false}
              type="url"
              value={instagram}
              setValue={setInstagram}
            />
            <InputIconGroup
              placeholder="page link"
              icon="/reddit.svg"
              required={false}
              type="url"
              value={reddit}
              setValue={setReddit}
            />
            <InputIconGroup
              placeholder="page link"
              icon="/linkedin.svg"
              required={false}
              type="url"
              value={linkedIn}
              setValue={setLinkedIn}
            />
            <InputIconGroup
              placeholder="page link"
              icon="/ox.svg"
              required={false}
              type="url"
              value={ox}
              setValue={setOx}
            />
            <InputIconGroup
              placeholder="page link"
              icon="/pinterest.svg"
              required={false}
              type="url"
              value={pinterest}
              setValue={setPinterest}
            />
          </div>
        </div>

        <div className="w-full flex justify-start pb-8 pt-2">
          <Button
            variant="default"
            type="button"
            onClick={handleContinue}
            disabled={!isValid}
            className={cn(
              "bg-primary-color disabled:opacity-70 w-full py-6 text-base font-semibold hover:bg-primary-color/80 cursor-pointer"
            )}
          >
            Next Step: Choose Your Launch Date
          </Button>
        </div>
      </div>
    </form>
  );
}
