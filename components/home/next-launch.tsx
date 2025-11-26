import Image from "next/image";

export default function NextLaunch() {
  return (
    <div className="w-full pl-6 max-mobile:pl-1 pt-8">
      <div className="w-full max-mini:flex-col max-tablet:gap-5 bg-[#FDF4EE] px-5 py-4 max-mobile:px-2.5 rounded-[12px] flex justify-between items-center">
        <div className="gap-5 max-mobile:gap-2.5 flex items-start">
          <Image
            src="/svg/space-ship.svg"
            alt=""
            className="max-mobile:w-5 max-mobile:h-5"
            width={32}
            height={32}
          />
          <div className="flex flex-col gap-1">
            <h3 className="text-lg max-mobile:text-base font-semibold text-black">
              New launches in
            </h3>
            <p className="text-black/80 text-base max-mobile:text-sm">
              Launch only 10 products every day for better reach.
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <RenderTime value={20} label="hours" />
          <RenderTime value={45} label="mins" />
          <RenderTime value={20} label="secs" />
        </div>
      </div>
    </div>
  );
}

interface TimeProps {
  value: number;
  label: string;
}

const RenderTime = (props: TimeProps) => {
  const { value, label } = props;
  return (
    <div className="w-[60px] max-mobile:w-12 max-mobile:h-12 max-mobile:rounded-md h-[60px] bg-white border-2 border-[#FF430680] rounded-xl flex flex-col justify-center items-center gap-0.5">
      <h2 className="text-base max-mobile:text-sm text-black font-semibold">
        {value}
      </h2>
      <p className="text-xs max-mobile:text-[10px] font-medium text-black">
        {label}
      </p>
    </div>
  );
};
