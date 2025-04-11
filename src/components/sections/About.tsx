import { useInView } from '../../hooks/useInView';
import aboutData from '../../data/about.json';

const About = () => {
  const [containerRef, isVisible] = useInView();

  return (
    <section id="about" className="section" ref={containerRef as React.RefObject<HTMLElement>}>
      <div className="container-content">
        <div className="space-y-12">
          <div className={`flex items-center gap-4 fade-in-bottom ${isVisible ? 'is-visible' : ''}`}>
            <h2 className="section-title">{aboutData.title}</h2>
            <div className="h-px bg-border-tint flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* About Me Text */}
            <div className="md:col-span-2 space-y-6">
              {aboutData.content.map((paragraph, index) => (
                <p key={index} className={`fade-in-bottom delay-${(index + 1) * 100} ${isVisible ? 'is-visible' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Skills */}
            <div className={`fade-in-bottom delay-400 ${isVisible ? 'is-visible' : ''}`}>
              <h3 className="text-xl font-medium mb-4">{aboutData.skills.title}</h3>
              <ul className="grid grid-cols-2 gap-2">
                {aboutData.skills.list.map((skill, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-accent">▹</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 