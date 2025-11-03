import Image from "next/image";

export default function NextLaunch() {
  return (
    <div className="w-full pl-6 pt-8">
      <div className="w-full bg-[#FDF4EE] px-5 py-4 rounded-[12px] flex justify-between items-center">
        <div className="gap-5 flex items-start">
          <Image src="/svg/space-ship.svg" alt="" width={32} height={32} />
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold text-black">
              New launches in
            </h3>
            <p className="text-black/80 text-base">
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
    <div className="w-[60px] h-[60px] bg-white border-2 border-[#FF430680] rounded-xl flex flex-col justify-center items-center gap-0.5">
      <h2 className="text-base text-black font-semibold">{value}</h2>
      <p className="text-xs font-medium text-black">{label}</p>
    </div>
  );
};
