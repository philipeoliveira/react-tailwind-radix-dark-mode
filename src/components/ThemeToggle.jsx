import { useState, useEffect } from 'react';
import RadixSwitch from './radix/switch/RadixSwitch';

export function ThemeToggle() {
   const [theme, setTheme] = useState('light');

   function toggleButton() {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('dark-mode-theme', newTheme);
      setTheme(newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
   }

   useEffect(() => {
      const themeFromLocalStorage = localStorage.getItem('dark-mode-theme');

      if (themeFromLocalStorage) {
         setTheme(themeFromLocalStorage);
         document.documentElement.classList.toggle(
            'dark',
            themeFromLocalStorage === 'dark'
         );
      }
   }, []);

   return <RadixSwitch clickAction={toggleButton} theme={theme} />;
}
