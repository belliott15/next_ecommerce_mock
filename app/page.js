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
        <span className="">
          <button className="bg-white rounded text-lg px-2 font-bold text-blue-500">
            Color!
          </button>
          <button className="bg-white rounded text-lg px-2 font-bold text-blue-500">
            Black & White
          </button>
        </span>
      </section>
    </main>
  );
}
