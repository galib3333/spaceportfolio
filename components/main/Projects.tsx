import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20" id="projects">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/themedev.png"
          title="Modern WordPress Theme Development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rerum vitae sint quibusdam delectus tenetur!"
        />
        <ProjectCard
          src="/reactweb.png"
          title="Interactive React JS Website"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rerum vitae sint quibusdam delectus tenetur!"
        />
        <ProjectCard
          src="/laravel.png"
          title="Laravel Hospital Management System"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rerum vitae sint quibusdam delectus tenetur!"
        />
      </div>
    </div>
  );
};

export default Projects;
