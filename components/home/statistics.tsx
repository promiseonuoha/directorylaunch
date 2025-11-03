export default function Statistics() {
  return (
    <div className="w-full mb-12">
      <h3 className="text-base font-semibold text-black mb-5">Statistics</h3>
      <div className="w-full grid grid-cols-2 gap-4">
        <div className="col-span-1 border border-[#E4E4F6] rounded-xl gap-2 flex flex-col items-start justify-center p-5">
          <p className="text-sm text-black">Visits</p>
          <h2 className="text-base text-black font-semibold">23,285</h2>
        </div>
        <div className="col-span-1 border border-[#E4E4F6] rounded-xl gap-2 flex flex-col items-start justify-center p-5">
          <p className="text-sm text-black">Page views</p>
          <h2 className="text-base text-black font-semibold">1,385,295</h2>
        </div>
      </div>
    </div>
  );
}
