import RenderTools from "./components/render-tools";

export const dynamic = "force-dynamic";

export default async function Page() {
  return (
    <>
      <div className="w-full max-tablet:mb-4 mb-8 pt-6 max-tablet:flex-col max-tablet:gap-5 flex justify-between items-start">
        <div className="w-max flex flex-col gap-1">
          <h1 className="text-gray-900 max-tablet:text-xl font-semibold text-30 leading-7">
            My Upvotes
          </h1>
          <p className="text-gray-600 max-tablet:text-xs text-base font-normal leading-6">
            Products you liked
          </p>
        </div>
      </div>
      <RenderTools />
    </>
  );
}
