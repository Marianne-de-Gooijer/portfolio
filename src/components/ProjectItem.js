import Image from "next/image";
import { FaHandPointer } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import styles from "@/styles/Hero.module.css";
import Link from "next/link";

function ProjectItem({ title, imageUrl, projectUrl, description, date }) {
  return (
    <div className="group block">
      <div className="relative overflow-hidden rounded-lg shadow-lg duration-300 ease-in-out transform hover:scale-103">
        <Image
          src={imageUrl}
          alt={`Screenshot van project ${title}`}
          className="transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center p-4">
          <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-xl font-semibold mb-5">{title}</h3>
            <div className="flex leading-relaxed text-md md:text-lg">
              <MdOutlineDateRange className="self-center" />
              <p className="ml-2">{date}</p>
            </div>
            <p>{description}</p>
            <Link href={projectUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:font-bold">
              Bezoeken
            </Link>
          </div>
        </div>
        <div className="absolute top-3 right-3 text-xl text-light">
          <FaHandPointer className={styles.animateTap} />
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
