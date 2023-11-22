import { useState } from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiGithub, SiPhp, SiWordpress, SiMysql } from 'react-icons/si';

const skills = [
  { name: 'HTML', Icon: SiHtml5 },
  { name: 'CSS', Icon: SiCss3 },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'React', Icon: SiReact },
  { name: 'Tailwind', Icon: SiTailwindcss },
  { name: 'Github', Icon: SiGithub },
  { name: 'Php', Icon: SiPhp },
  { name: 'Wordpress', Icon: SiWordpress },
  { name: 'My sql', Icon: SiMysql },
];

const SkillCard = ({ name, Icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="p-4 w-20 h-20 md:w-28 md:h-28 bg-white rounded-lg shadow-xl cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110"
    >
      <div className="flex flex-col items-center justify-center h-full">
        <Icon className={`text-darkSand text-2xl md:text-3xl ${isHovered ? 'mb-2' : ''}`} />
        {isHovered && <p className="text-darkSand text-xs">{name}</p>}
      </div>
    </div>
  );
};

function Skills() {
  return (
    <section id="skills" className="py-12 md:py-24 bg-sand">
      <div className="container mx-auto text-white px-5">
        <p className="text-2xl md:text-4xl font-medium text-center mb-12 md:mb-16">
          Skills
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} Icon={skill.Icon} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
