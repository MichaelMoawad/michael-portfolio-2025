import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import SocialLinks from './components/layout/SocialLinks';

const appStyle = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column' as const,
  transition: 'background-color 0.3s ease, color 0.3s ease'
};

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Add or remove dark class based on theme state
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div 
      style={{ 
        ...appStyle,
        backgroundColor: theme === 'dark' ? '#0F1A24' : '#FEF8EE'
      }}
    >
      <Header toggleTheme={toggleTheme} currentTheme={theme} />
      <SocialLinks currentTheme={theme} />
      
      <main style={{ flexGrow: 1 }}>
        <Hero currentTheme={theme} />
        <About />
        <Experience />
        <Projects />
        <Contact currentTheme={theme} />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
