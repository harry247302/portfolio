import { CursorGlow, Navbar, ScrollProgress } from "./components/Chrome";
import Hero from "./components/Hero";
import { About, Contact, Experience, Footer, Projects, Skills } from "./components/Sections";

export default function App() {
  return (
    <div className="grain relative min-h-screen overflow-x-hidden bg-ink">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
