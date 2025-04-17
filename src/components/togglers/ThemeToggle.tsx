import { useState } from 'react';
import { MdOutlineWbSunny } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa';
import React from 'react';
import useThemeStore, { ThemeStore } from '@/store/ThemeStore';

const ThemeToggle = () => {
  const theme = useThemeStore((state: ThemeStore) => state.theme);
  const toggleTheme = useThemeStore((state: ThemeStore) => state.toggleTheme);
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => {
      toggleTheme();
      setAnimate(false);
    }, 300);
  };

  return (
    <button
      onClick={handleClick}
      className='themeToggler'
      title='Toggle Theme'
    >
      {theme === 'dark' ? (
        <FaMoon className={`toggleModeDark ${animate ? 'animate' : ''}`} />
      ) : (
        <MdOutlineWbSunny className={`toggleModeLight ${animate ? 'animate' : ''}`} />
      )}
    </button>
  );
};

export default ThemeToggle;