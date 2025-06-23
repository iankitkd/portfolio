import { Background, Contact, Footer, Header, Hero, Projects, Skills } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-start via-gradietn-mid to-gradient-end text-foreground overflow-x-hidden">
      <Background />
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}