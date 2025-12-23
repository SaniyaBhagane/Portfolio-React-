import { ExternalLink, ExternalLinkIcon, Github } from 'lucide-react'
import React from 'react'

const projects = [
  {
    id: 1,
    title: "Title of project 1",
    description: "Desc of project1",
    // image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Gemini"],
    demoUrl: "#",
    githuburl: "#",
  },
  {
    id: 2,
    title: "Title of project 2",
    description: "Desc of project2",
    // image: "/projects/project2.png",
    tags: ["React", "TailwindCSS", "Gemini"],
    demoUrl: "#",
    githuburl: "#",
  },
  {
    id: 3,
    title: "Title of project 3",
    description: "Desc of project3",
    // image: "/projects/project3.png",
    tags: ["React", "TailwindCSS", "Gemini"],
    demoUrl: "#",
    githuburl: "#",
  }
]

const ProjectsSection = () => {
  return (
    <section id='projects' className='py-24 px-24 relative'>
      <div className='container mx-auto mx-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Featured <span className='text-primary'>Projects</span>
        </h2>

        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Here are some of my recent projects. These projects highlight my practical experience, technical skills, and ability to design and develop scalable, performance-focused web applications.  
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-xl overflow-hidden shadow-sm card-hover flex flex-col"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Actions */}
                <div className="flex items-center justify-end gap-4 mt-auto">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition"
                    >
                      <ExternalLinkIcon size={20} />
                    </a>
                  )}

                  {project.githuburl && (
                    <a
                      href={project.githuburl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/SaniyaBhagane"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full
                      border border-primary text-primary font-medium
                      transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            Check out my GitHub
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
