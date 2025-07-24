import React from 'react';
import ThemeToggle from './components/togglers/ThemeToggle';
import LangToggle from './components/togglers/LangToggle';
import { IoMdCloudDownload } from 'react-icons/io';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Languages from './components/Languages';
import './style/css/section.css';
import Description from './components/Description';
import Formation from './components/Education';

const App = () => {
  const downloadPDFCV = async () => {
    const response = await fetch('/cv.pdf', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/pdf',
      },
    });

    if (!response.ok) {
      console.error('Failed to download CV');
      return;
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cv.pdf';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className='App'>
      <div className='toggleMode'>
        <ThemeToggle />
        <LangToggle />
        <IoMdCloudDownload
          className='downloadCV'
          onClick={downloadPDFCV}
          title='Download CV'
        />
      </div>
      <AboutMe />
      <Description />
      <Experience />
      <Languages />
      <Skills />
      <Portfolio />
      <Formation />
    </div>
  );
};

export default App;