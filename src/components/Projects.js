import ProjectItem from "./ProjectItem";
import styles from "@/styles/Hero.module.css";

import img1 from "../../public/images/placeholder.webp";

function Projects() {
  const projects = [
    {
      title: "Project 1",
      imageUrl: img1,
      projectUrl: "#",
      description: "Korte beschrijving van Project 1",
      date: "Juli 2023",
    },
    {
      title: "Project 1",
      imageUrl: img1,
      projectUrl: "#",
      description: "Korte beschrijving van Project 1",
      date: "Juli 2023",
    },
    {
      title: "Project 1",
      imageUrl: img1,
      projectUrl: "#",
      description: "Korte beschrijving van Project 1",
      date: "Juli 2023",
    },
    {
      title: "Project 1",
      imageUrl: img1,
      projectUrl: "#",
      description: "Korte beschrijving van Project 1",
      date: "Juli 2023",
    },
    // Voeg meer projecten toe...
  ];
  return (
    <section id="projects" className="py-12 md:py-24 container mx-auto px-5">
      {/* Als de projecten erin staan moet de styling van de <p> tag hieronder iets gewijzigd worden: md:mb-[114px] */}
      <p className="text-2xl md:text-4xl font-medium text-center mb-12 md:mb-[64px]">
        Projecten
      </p>
      <p className="leading-relaxed text-md md:text-lg text-center max-w-3xl mx-auto">
        Het beste project dat ik op dit moment kan laten zien, is mijn
        portfolio. Helaas mag ik mijn meest recente projecten van mijn stage
        niet delen. Hoewel ik nog projecten van school heb, tonen deze niet
        volledig mijn huidige vaardigheden, dus is dit gedeelte tijdelijk leeg.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 projecten hidden">
        {projects.map((project, index) => (
          <div className={styles.project} key={index}>
            <ProjectItem {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
