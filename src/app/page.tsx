import { Background, Contact, Footer, Header, Hero, Projects, ScrollToTop, Skills } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-gray-100 overflow-x-hidden">
      <Background />
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}