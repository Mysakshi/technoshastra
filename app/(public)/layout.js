import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PublicLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex-grow pt-16 sm:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
