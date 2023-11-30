import Image from "next/image";

import aboutImg1 from "../../public/images/about1.webp";
import aboutImg2 from "../../public/images/about2.webp";

function About() {
  return (
    <section id="about" className="py-20 md:py-32 container mx-auto">
      <p className="text-2xl md:text-4xl font-medium text-center mb-12 md:mb-16">
        Over mij
      </p>
      <div className="px-5">
        <div className="border-b border-black md:border-0 flex flex-wrap md:pb-32 pb-14">
          <div className="md:w-1/2 w-full md:pr-10 mb-5 md:mb-0 ">
            <div className="md:rounded-full rounded-xl overflow-hidden shadow-xl lg:w-[350px] lg:h-[350px] md:w-[320px] md:h-[320px] sm:max-h-[500px] max-h-[350px] w-auto md:ml-auto">
              <Image
                src={aboutImg1}
                alt="Foto van Marianne de Gooijer"
                className="object-cover object-center w-full h-full block"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full md:pl-10">
            <p className="leading-relaxed text-base md:text-lg">
              Hey, ik ben Marianne de Gooijer. Ik heb mijn opleiding software
              development gevolgd aan het Technova College in Ede, waar ik veel
              kennis heb opgedaan over programmeren. Met trots ben ik
              afgestudeerd als software developer. Mijn passie ligt met name in
              front-end web development.
            </p>
            <br />
            <p className="leading-relaxed text-base md:text-lg">
              Ik ben erg leergierig en wil graag beter worden in het ontwikkelen
              van de front-end van websites. Mijn doel is om websites nauwkeurig
              af te stemmen op de visie van de klant en zo de wensen van mensen
              te vervullen als het gaat om de front-end van de website.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap px-5 pt-14 md:pt-0">
        <div className="md:w-1/2 w-full md:pl-10">
          <p className="leading-relaxed text-base md:text-lg">
            In mijn vrije tijd geniet ik ervan om te fotograferen. Deze passie
            is ontstaan nadat ik een opleiding in fotografie heb gevolgd. Ik
            vind het het leukst om dieren in de natuur te fotografen, maar ik
            hou er ook van om te expirimenteren met andere dingen. Of het nu
            gaat om de de natuur, interessante gebouwen, levendige steden of
            mooie portretten, ik geniet van het verkennen van verschillende
            soorten fotografie.
          </p>
          <br />
          <p className="leading-relaxed text-base md:text-lg">
            Mijn droom is om mijn passies voor programmeren en fotograferen te
            combineren. Voor elke website zijn ook foto&apos;s nodig, en ik heb
            de wens om deze zelf te kunnen cre&euml;ren. Op deze manier kan ik
            niet alleen een aantrekkelijke front-end ontwikkelen die aan de
            wensen van de klant voldoet, maar ook voorzien aan mooie foto&apos;s
            die de klant graag wilt.
          </p>
        </div>
        <div className="md:w-1/2 w-full md:pl-10 mt-5 md:mt-0">
          <div className="md:rounded-full rounded-xl overflow-hidden shadow-xl lg:w-[350px] lg:h-[350px] md:w-[320px] md:h-[320px] sm:max-h-[500px] max-h-[350px] w-auto md:mr-auto">
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
