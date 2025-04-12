import { useInView } from '../../hooks/useInView';
import heroData from '../../data/hero.json';
import linksData from '../../data/links.json';
import Button3D from '../ui/Button3D';

interface HeroProps {
  currentTheme: 'light' | 'dark';
}

const Hero = ({ currentTheme }: HeroProps) => {
  const [containerRef, isVisible] = useInView();
  const buttonVariant = currentTheme === 'dark' ? 'accent' : 'accentLight';
  
  return (
    <section id="hero" className="min-h-[90vh] flex items-center" ref={containerRef as React.RefObject<HTMLElement>}>
      <div className="container-content py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="md:col-span-3 space-y-6">
            <p className={`text-accent font-medium fade-in-bottom ${isVisible ? 'is-visible' : ''}`}>
              {heroData.greeting}
            </p>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold fade-in-bottom delay-100 ${isVisible ? 'is-visible' : ''}`}>
              {heroData.name}
            </h1>
            <h2 className={`text-2xl md:text-3xl text-secondary fade-in-bottom delay-200 ${isVisible ? 'is-visible' : ''}`}>
              {heroData.title}
            </h2>
            <p className={`max-w-lg fade-in-bottom delay-300 ${isVisible ? 'is-visible' : ''}`}>
              {heroData.description}
            </p>
            <div className={`flex flex-wrap gap-4 pt-4 fade-in-bottom delay-400 ${isVisible ? 'is-visible' : ''}`}>
              <Button3D
                onClick={() => {
                  const element = document.getElementById(linksData.navigation.experience.replace('#', ''));
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                variant={buttonVariant}
                size="md"
              >
                {heroData.cta.work}
              </Button3D>
              <Button3D
                onClick={() => {
                  const element = document.getElementById(linksData.navigation.contact.replace('#', ''));
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                variant="secondary"
                size="md"
              >
                {heroData.cta.contact}
              </Button3D>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className={`md:col-span-2 flex justify-center md:justify-end fade-in-bottom delay-400 ${isVisible ? 'is-visible' : ''}`}>
          <div className="relative aspect-square w-64 sm:w-72 md:w-80 lg:w-96 rounded-full overflow-hidden border-4 border-theme mt-8 sm:mt-10">
          <img
              src="/images/headshot.jpg"
              alt="Profile"
              className="absolute inset-0 w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 