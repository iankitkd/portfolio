import {
  Background,
  Contact,
  Experience,
  Footer,
  Header,
  Hero,
  Projects,
  Skills,
} from "@/components";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-foreground transition-colors duration-500">
      <Background />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
