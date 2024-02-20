import Image from "next/image.js";
import React from "react";
import heroImage from "../../../public/assets/hero_1.png";

const Hero = () => {
  return (
    <section className="border-2 border-white flex justify-center">
      <Image
        alt="Young queer couple in fashionable clothes with a city backdrop"
        src={heroImage}
        width={"contain"}
        height={300}
      />
    </section>
  );
};

export default Hero;
