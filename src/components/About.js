import Image from "next/image";

import aboutImg1 from "../../public/images/about1.webp";
import aboutImg2 from "../../public/images/about2.webp";

function About() {
  return (
    <section id="about" className="py-12 md:py-24 container mx-auto ">
      <p className="text-2xl md:text-4xl font-medium text-center mb-12 md:mb-16">
        Over mij
      </p>
      <div className="flex flex-wrap px-5 md:mb-52 mb-28">
        <div className="md:w-1/2 w-full md:pr-10 mb-5 md:mb-0">
          <div className="md:rounded-full rounded-xl overflow-hidden shadow-xl lg:w-[450px] lg:h-[450px] md:w-[320px] md:h-[320px] sm:max-h-[500px] max-h-[350px] w-auto md:ml-auto">
            <Image
              src={aboutImg1}
              alt="Foto van Marianne de Gooijer"
              className="object-cover object-center w-full h-full block"
            />
          </div>
        </div>
        <div className="md:w-1/2 w-full md:pl-10 ">
          <p className="leading-relaxed text-md md:text-lg">
            Hey, ik ben Marianne de Gooijer. Tijdens de opleiding software
            development die ik op het Technova College in Ede heb gevolgd heb ik
            veel geleerd over programmeren. Ik ben daar ook afgestudeerd als
            software developer. Mijn voorkeur gaat zelf uit naar front-end web
            devlopment.
          </p>
          <br />
          <p className="leading-relaxed text-md md:text-lg">
            Ik wil zelf graag beter worden met React.js en Next.js.
          </p>
          <br />
          <p className="leading-relaxed text-md md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap px-5">
        <div className="md:w-1/2 w-full md:pl-10">
          <p className="leading-relaxed text-md md:text-lg">
            Hier komt meer informatie over mijn hobby's.
          </p>
          <br />
          <p className="leading-relaxed text-md md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <br />
          <p className="leading-relaxed text-md md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="md:w-1/2 w-full md:pl-10 mt-5 md:mt-0">
          <div className="md:rounded-full rounded-xl overflow-hidden shadow-xl lg:w-[450px] lg:h-[450px] md:w-[320px] md:h-[320px] sm:max-h-[500px] max-h-[350px] w-auto md:mr-auto">
            <Image
              src={aboutImg2}
              alt="Foto van Marianne de Gooijer"
              className="object-cover object-center w-full h-full block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
