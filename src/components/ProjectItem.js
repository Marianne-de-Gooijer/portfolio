import Image from "next/image";
import { FaHandPointer } from 'react-icons/fa';
import styles from "@/styles/Hero.module.css";

function ProjectItem({ title, imageUrl, projectUrl, description }) {
  return (
    <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="group block">
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <Image
          src={imageUrl}
          alt={`Screenshot van project ${title}`}
          className="transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center p-4">
          <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-lg font-bold">{title}</h3>
            <p>{description}</p>
          </div>
        </div>
        <div className="absolute top-3 right-3 text-xl text-light">
            <FaHandPointer className={styles.animateTap} />
        </div>
      </div>
    </a>
  );
}

export default ProjectItem;
