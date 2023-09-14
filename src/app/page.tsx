import About from "@/components/About";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Header from "@/components/Header";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Header />

      {/* Grid */}
      <Grid />

      {/* About */}
      <About />

      {/* Projects */}
      <Projects />

      {/* Connect */}
      <Connect />

      <Footer />
    </>
  );
}
