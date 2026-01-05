import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Projects />
      <Footer />
    </main>
  );
}