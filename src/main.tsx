import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './style/css/index.css'
import './style/css/toggler.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/600.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/800.css';
import '@fontsource/roboto/900.css';
import React from 'react'
import useThemeStore from './store/ThemeStore'
import 'react-photo-view/dist/react-photo-view.css';

const theme = useThemeStore.getState().theme;
document.documentElement.className = theme;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
