import { useInView } from '../../hooks/useInView';
import contactData from '../../data/contact.json';
import linksData from '../../data/links.json';
import Button3D from '../ui/Button3D';

interface ContactProps {
  currentTheme: 'light' | 'dark';
}

const Contact = ({ currentTheme }: ContactProps) => {
  const [containerRef, isVisible] = useInView();
  const buttonVariant = currentTheme === 'dark' ? 'accent' : 'accentLight';

  return (
    <section id="contact" className="section" ref={containerRef as React.RefObject<HTMLElement>}>
      <div className="container-content">
        <div className="space-y-12">
          <div className={`flex items-center gap-4 fade-in-bottom ${isVisible ? 'is-visible' : ''}`}>
            <h2 className="section-title">{contactData.title}</h2>
            <div className="h-px bg-border-tint flex-grow"></div>
          </div>

          <div className={`max-w-2xl mx-auto text-center space-y-6 fade-in-bottom delay-100 ${isVisible ? 'is-visible' : ''}`}>
            <h3 className="text-2xl font-medium">{contactData.heading}</h3>
            <p className="text-secondary">
              {contactData.description}
            </p>
            <div className="flex justify-center">
              <Button3D
                href={linksData.social.email}
                variant={buttonVariant}
                size="md"
                className="inline-flex"
              >
                {contactData.cta.text}
              </Button3D>
            </div>
            {/* <p className="text-secondary-gray">
              You can also reach me via email at{' '}
              <a href={linksData.social.email} className="text-accent font-medium">
                {linksData.social.email.replace('mailto:', '')}
              </a>
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 