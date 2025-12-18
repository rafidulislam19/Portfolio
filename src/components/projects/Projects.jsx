import React from 'react';

const projects = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "SaaS Landing Page",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/project2.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "SaaS Landing Page",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/project3.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#",
  }
];

const Projects = () => {
  return (
    <section className="section" id="projects">
  <h2 className="section__title">Featured Projects</h2>
  <span className="section__subtitle">Some of my recent projects</span>

  <div className="app-container">
    <div className="tw-grid tw-grid-cols-1 tw-md:grid-cols-2 tw-lg:grid-cols-3 tw-gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="tw-rounded-lg tw-overflow-hidden tw-shadow"
        >
          <img
            src={project.image}
            alt={project.title}
            className="tw-w-full tw-h-48 tw-object-cover"
          />
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default Projects;