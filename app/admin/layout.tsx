import "../admin.css";

export const metadata = {
  title: "Admin | NUBS-GHANA",
  description: "Admin portal for NUBS-GHANA",
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
