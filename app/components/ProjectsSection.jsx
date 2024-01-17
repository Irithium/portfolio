"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "ShoesOnTrack",
    description:
      "ShoesOnTrack is an innovative application designed with the goal of helping smaller vendors.",
    image: "/images/projects/ShoesOnTrack.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/orgs/ShoesOnTrack/repositories",
    previewUrl: "https://deploy-front-alpha.vercel.app/",
  },
  {
    id: 2,
    title: "EventifyPro",
    description:
      "EventifyPro is an innovative application designed to support emerging event producers.",
    image: "/images/projects/EventifyPro.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Eventify-PF/Eventifypro-Front",
    previewUrl: "https://lighthearted-entremet-b6aec9.netlify.app/event",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-white text-center text-4xl border-b-secondary-600 border-b-2 pb-4 font-bold mt-4 mb-4 md:mb-12  ">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid lg:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
