import React, { useEffect } from 'react';
import './App.css';
import mixpanel from 'mixpanel-browser';
import Router from './pages';
import { ShepherdTour, ShepherdTourContext } from 'react-shepherd'
import steps from './Tour'

const tourOptions = {
  defaultStepOptions: {
    cancelIcon: {
      enabled: true
    }
  },
  useModalOverlay: false
};

function App() {
  useEffect(() => {
    mixpanel.init(process.env.REACT_APP_MIXPANEL_KEY);
    mixpanel.track('App Launched');
  }, []);

  return( 
    <ShepherdTour tourOptions={tourOptions} steps={steps}>
  <Router />
  </ShepherdTour>

  );
}

export default App;
