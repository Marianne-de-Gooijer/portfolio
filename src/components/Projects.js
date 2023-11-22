import ProjectItem from "./ProjectItem";

import img1 from "../../public/images/placeholder.webp";

function Projects() {
  const projects = [
    { title: "Project 1", imageUrl: img1, projectUrl: "#", description: 'Korte beschrijving van Project 1' },
    { title: "Project 1", imageUrl: img1, projectUrl: "#", description: 'Korte beschrijving van Project 1' },
    { title: "Project 1", imageUrl: img1, projectUrl: "#", description: 'Korte beschrijving van Project 1' },
    { title: "Project 1", imageUrl: img1, projectUrl: "#", description: 'Korte beschrijving van Project 1' },
    { title: "Project 1", imageUrl: img1, projectUrl: "#", description: 'Korte beschrijving van Project 1' },
    { title: "Project 1", imageUrl: img1, projectUrl: "#", description: 'Korte beschrijving van Project 1' },
    // Voeg meer projecten toe...
  ];
  return (
    <section id="projects" className="py-12 md:py-24 container mx-auto px-5">
      <p className="text-2xl md:text-4xl font-medium text-center mb-12 md:mb-16">
        Projecten
      </p>
      <p className="leading-relaxed text-md md:text-lg text-center max-w-2xl mx-auto">
        Mijn meest recente projecten van stage mag ik niet delen. Ik heb nog
        projecten van school, maar die laten niet zien wat ik op dit moment kan
        dus is dit onderdeel tijdelijk leeg.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 hidden">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
