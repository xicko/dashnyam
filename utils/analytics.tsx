// utils/analytics.js
import ReactGA from 'react-ga';

declare global {
  interface Window {
    GA_INITIALIZED: boolean;
  }
}

export const initGA = () => {
  ReactGA.initialize('G-HEM8VG97PJ');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
