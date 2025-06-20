export default function ViewDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen px-4 py-6 bg-gray-50">{children}</div>;
}
