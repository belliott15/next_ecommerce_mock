import Nav from "./components/nav/Nav.jsx";
import Hero from "./components/hero/Hero.jsx";
import Carousel from "./components/carousel/Carousel.jsx";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Carousel />
      <section className="flex flex-col items-center m-4">
        <h1>Get the best in style and substance</h1>
        <p>See our products</p>
        <span className="flex min-w-10 w-80 justify-around m-2">
          <button className="bg-lavender rounded px-2 font-bold text-white">
            Color!
          </button>
          <button className="bg-lavender rounded px-2 font-bold text-white">
            Black & White
          </button>
        </span>
      </section>
    </main>
  );
}
