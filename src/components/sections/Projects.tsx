import { useInView } from '../../hooks/useInView';
import projectsData from '../../data/projects.json';

const Projects = () => {
  const [containerRef, isVisible] = useInView();

  return (
    <section id="projects" className="section" ref={containerRef as React.RefObject<HTMLElement>}>
      <div className="container-content">
        <div className="space-y-12">
          <div className={`flex items-center gap-4 fade-in-bottom ${isVisible ? 'is-visible' : ''}`}>
            <h2 className="section-title">{projectsData.title}</h2>
            <div className="h-px bg-border-tint flex-grow"></div>
          </div>

          <div className="space-y-24">
            {projectsData.projects.map((project, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center ${
                  index % 2 === 1 ? 'md:dir-rtl' : ''
                } fade-in-bottom delay-${(index + 1) * 100} ${isVisible ? 'is-visible' : ''}`}
              >
                {/* Project Image */}
                <div className="md:col-span-7 md:dir-ltr">
                  <div className="relative overflow-hidden rounded-lg border border-border-tint">
                    <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-all duration-300"></div>
                    <div className="aspect-video bg-border-tint">
                      <img
                        src={project.image}
                        alt="Screenshot of [Project Name]"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>


                {/* Project Info */}
                <div className="md:col-span-5 md:dir-ltr">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-heading-highlight">
                      {project.title}
                    </h3>
                    <div className="p-5 bg-border-tint/30 rounded-lg backdrop-blur-sm">
                      <p className="text-primary-text">{project.description}</p>
                    </div>
                    <ul className="flex flex-wrap gap-3 text-sm text-secondary-gray">
                      {project.technologies.map((tech, techIndex) => (
                        <li key={techIndex} className="bg-border-tint py-1 px-3 rounded-full">
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <div className="flex py-1 px-3 gap-4 pt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-text projects-link"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-text projects-link"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 