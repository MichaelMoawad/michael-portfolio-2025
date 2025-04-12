import { useState, useEffect, useRef, RefCallback } from 'react';
import { useInView } from '../../hooks/useInView';
import experienceData from '../../data/experience.json';

const Experience = () => {
  const [containerRef, isVisible] = useInView();
  const [activeTab, setActiveTab] = useState(0);
  const [key, setKey] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const setTabRef: RefCallback<HTMLButtonElement> = (element: HTMLButtonElement | null) => {
    if (element) {
      const index = Number(element.dataset.index);
      tabsRef.current[index] = element;
    }
  };

  // Update key when active tab changes to restart animation
  useEffect(() => {
    setKey(prev => prev + 1);
  }, [activeTab]);

  // Update indicator position when active tab changes
  useEffect(() => {
    const activeTabElement = tabsRef.current[activeTab];
    if (activeTabElement) {
      setIndicatorStyle({
        transform: `translateY(${activeTabElement.offsetTop}px)`,
        height: `${activeTabElement.offsetHeight}px`
      });
    }
  }, [activeTab]);

  return (
    <section
      id="experience"
      className="section min-h-[80vh] max-h-[1400px] py-24 md:py-32 flex items-center"
      ref={containerRef as React.RefObject<HTMLElement>}
    >

      <div className="container-content w-full">
        <div className="space-y-12 max-w-7xl mx-auto">
          <div className={`flex items-center gap-4 fade-in-bottom ${isVisible ? 'is-visible' : ''}`}>
            <h2 className="section-title">{experienceData.title}</h2>
            <div className="h-px bg-border-tint flex-grow"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:overflow-auto md:max-h-[calc(100vh-16rem)]">
          {/* Tabs */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible md:min-w-[180px]">
              <div className="relative flex md:flex-col w-full border-b md:border-b-0 md:border-l border-border-tint">
                <div className="hidden md:block tab-indicator" style={indicatorStyle} />

                {experienceData.jobs.map((job, index) => (
                  <button
                    key={index}
                    ref={setTabRef}
                    data-index={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-4 py-3 text-sm md:text-base font-medium whitespace-nowrap transition-colors text-left w-full md:pl-5 ${
                      activeTab === index
                        ? 'text-accent'
                        : 'text-secondary-gray hover:text-primary-text hover:bg-border-tint/20'
                    }`}
                  >
                    {job.company}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div key={key} className={`fade-in space-y-4 flex-1 ${isVisible ? 'is-visible' : ''}`}>
              <h3 className="text-xl font-medium">
                <span>{experienceData.jobs[activeTab].role}</span>
                <span className="text-accent"> @ {experienceData.jobs[activeTab].company}</span>
              </h3>
              <p className="text-secondary-gray text-sm">{experienceData.jobs[activeTab].period}</p>
              <ul className="space-y-4">
                {experienceData.jobs[activeTab].description.map((point, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-accent">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="pt-4">
                <h4 className="text-sm font-medium text-accent mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {experienceData.jobs[activeTab].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm rounded-full bg-border-tint/30 text-secondary-gray"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Experience; 