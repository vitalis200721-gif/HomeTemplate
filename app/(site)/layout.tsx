import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="pt-24">{children}</main>
      <Footer />
    </>
  );
}
