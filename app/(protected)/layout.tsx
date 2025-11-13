export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full pt-[60px] pb-8 flex flex-col items-center">
      {children}
    </div>
  );
}
