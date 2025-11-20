interface Params {
  placeholder: string;
  required: boolean;
  icon: string;
  type: string;
  value: string;
  setValue: (value: string) => void;
}

export default function InputIconGroup({
  placeholder,
  required,
  icon,
  type,
  value,
  setValue,
}: Params) {
  return (
    <div className="relative w-full h-max">
      <img
        src={icon}
        alt=""
        className="absolute tablet:w-3.5 tablet:h-3.5 w-5 h-5 object-cover top-[50%] left-3.5 translate-y-[-50%]"
      />
      <input
        style={{ borderRadius: 8 }}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="w-full tablet:text-xs outline-0 text-base font-normal placeholder:text-gray-500 text-gray-700 h-11 border border-[#E4E4F6] pl-[42px] pr-3.5"
      />
    </div>
  );
}
