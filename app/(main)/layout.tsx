import Sidebar from "@/components/sidebar/Sidebar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main>
        <Sidebar>{children}</Sidebar>
      </main>
    </div>
  );
}
