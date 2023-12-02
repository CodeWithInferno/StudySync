import React, { useEffect, useState } from 'react';
import NoSleep from 'nosleep.js';
import { FormGroup, FormControlLabel, Switch } from '@mui/material';

const Awake = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [noSleep, setNoSleep] = useState(null);

  useEffect(() => {
    if (!noSleep) {
      setNoSleep(new NoSleep());
    }

    if (noSleep) {
      if (isToggleOn) {
        noSleep.enable();
        console.log('NoSleep enabled!');
      } else {
        noSleep.disable();
        console.log('NoSleep disabled.');
      }
    }

    return () => {
      // Clean up when the component unmounts
      if (noSleep) {
        noSleep.disable();
      }
    };
  }, [isToggleOn, noSleep]);

  const handleToggleChange = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div style={{ position: 'fixed', top: '80px', left: '40px', zIndex: '1000', color: 'white' }}>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={isToggleOn} onChange={handleToggleChange} />}
          label="Prevent screen from sleeping"
        />
      </FormGroup>
    </div>
  );
};

export default Awake;
