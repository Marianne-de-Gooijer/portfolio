import Image from "next/image";

import styles from "@/styles/Hero.module.css";
import heroImage from "../../public/images/hero-programmer.webp";

function Hero() {
  return (
    <>
      <section id="home" className="">
        <div className="relative h-screen flex items-center justify-center text-center">
          <Image
            src={heroImage}
            fill
            className="object-cover"
            alt="Portfolio Marianne de Gooijer"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
          {/* Optional overlay */}
          <div className="z-10">
            <div className="text-white text-4xl sm:text-5xl md:text-6xl text-shadow">
              <p className={styles.textShadow}>Marianne de Gooijer</p>
            </div>
            <p className="text-white text-xl md:text-3xl mt-4">
              - Front-end developer
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
