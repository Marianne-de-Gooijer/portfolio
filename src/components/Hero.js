import Image from "next/image";

import heroImage from "../../public/images/hero-programmer.webp";

function Hero() {
  return (
    <>
      <section id="home" className="">
        <div className="relative h-screen">
          <Image
            src={heroImage}
            alt="Hero portfolio Marianne de Gooijer"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 right-0 px-10 text-right max-w-screen-2xl m-auto">
            <h1 className="text-3xl mb-4">Hey, ik ben Marianne de Gooijer</h1>
            <p className="text-xl">- Front-end web developer</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
