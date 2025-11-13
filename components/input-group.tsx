interface Params {
  label: string;
  required: boolean;
  placeholder?: string;
  type: string;
  id: string;
  value: string;
  setValue: (value: string) => void;
  large?: boolean;
  shortTextarea?: boolean;
  guideLine?: string;
  limit?: number;
}

export default function InputGroup({
  label,
  required,
  placeholder,
  type,
  id,
  large,
  shortTextarea,
  guideLine,
  value,
  setValue,
  limit,
}: Params) {
  return (
    <div className="w-full flex flex-col mobile:gap-0.5 gap-1.5">
      <div className="flex w-max h-max items-start">
        <label
          htmlFor={id}
          className={` font-medium mobile:text-xs text-black/70 ${
            large ? "text-base leading-6" : "text-sm"
          }`}
        >
          {label}
        </label>{" "}
        &nbsp;
        {required && (
          <span className="text-sm mobile:text-xs text-red-600">*</span>
        )}
      </div>
      {type !== "textarea" ? (
        <input
          type={type}
          required={required}
          placeholder={placeholder}
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full mobile:text-xs shadow-none rounded-xl outline-0 text-base font-normal placeholder:text-gray-500 text-gray-700 h-12 border border-[#E4E4F6] px-3.5"
        />
      ) : (
        <textarea
          className={`w-full mobile:text-xs  text-base font-normal placeholder:text-gray-500 text-gray-700 bg-white border border-gray-300 rounded-xl outline-0 py-2.5 px-3.5 ${
            shortTextarea ? "h-70" : "h-32"
          }`}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id={id}
          maxLength={limit}
        ></textarea>
      )}
      {guideLine && (
        <span className="text-sm tablet:leading-normal tablet:text-[10px] font-normal leading-5 text-gray-600">
          {guideLine}
        </span>
      )}
    </div>
  );
}
