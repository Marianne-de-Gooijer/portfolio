import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

function LiIcon({ reference }) {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="absolute left-0 stroke-white">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-pink-600 stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-sand"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-pink-600"
        />
      </svg>
    </figure>
  );
}

function Details({ company, position, time }) {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="md:w-[80%] w-[70%] ml-auto my-8 first:mt-0 last:mb-0 flex flex-col justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <p className=" text-lg md:text-2xl">{company}</p>
        <p className="text-white/75 text-base">{time}</p>
        <p>{position}</p>
      </motion.div>
    </li>
  );
}

function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <section id="experience" className="py-20 md:py-32 bg-sand">
      <div className="container mx-auto text-white px-5 max-w-4xl">
        <p className="text-2xl md:text-4xl font-medium text-center mb-12 md:mb-16">
          Ervaringen
        </p>
        <p className="leading-relaxed text-base md:text-lg mb-9">
          Ik deel graag mijn meest recente en waardevolle werk en stage
          ervaringen. Neem gerust contact met mij op voor mijn hele CV!
        </p>
        <div className="relative leading-relaxed text-base md:text-lg">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            ref={ref}
            className="absolute left-9 top-0 w-[4px] h-full bg-pink-600/50 origin-top"
          />
          <ul>
            <Details
              company="Praxis"
              position="Kassa en servicebalie medewerkster"
              time="Mei 2022 - heden"
            />
            <Details
              company="BOOOM Digital"
              position="Stage webdevelopment"
              time="Sep 2022 - Feb 2023"
            />
            <Details
              company="Depositado"
              position="Stage webdevelopment"
              time="Sep 2021 - Feb 2022"
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
