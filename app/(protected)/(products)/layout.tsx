import SectionNavigation from "./components/section-navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full flex justify-center px-16 xl:px-28 max-tablet:px-6 max-tablet:pb-16 pb-24">
      <div className="w-full max-w-7xl flex flex-col">
        <SectionNavigation />
        {children}
      </div>
    </section>
  );
}
