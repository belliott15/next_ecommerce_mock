import Image from "next/image";
import Nav from "./components/nav/Nav.jsx";
import Hero from "./components/hero/Hero.jsx";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
    </main>
  );
}
