import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import router from './router';
import './index.css';

function App() {
  useEffect(() => {
    const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (GA_MEASUREMENT_ID) {
      ReactGA.initialize(GA_MEASUREMENT_ID);
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
