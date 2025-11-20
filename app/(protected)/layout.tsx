import { NewToolProvider } from "@/contexts/new-tool";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NewToolProvider>
      <div className="w-full pt-[60px] pb-8 flex flex-col items-center">
        {children}
      </div>
    </NewToolProvider>
  );
}
