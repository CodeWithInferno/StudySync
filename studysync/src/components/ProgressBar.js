import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function ProgressBar() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    // Get the timestamp when the user first visited the website
    let firstVisitTimestamp = localStorage.getItem('firstVisitTimestamp');
    if (!firstVisitTimestamp) {
      firstVisitTimestamp = new Date().getTime();
      localStorage.setItem('firstVisitTimestamp', firstVisitTimestamp);
    }

    const timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - parseInt(firstVisitTimestamp);
      const percentage = (elapsedTime / (24 * 60 * 60 * 1000)) * 100; // Calculate percentage in 24 hours

      setProgress(percentage > 100 ? 100 : percentage);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '80%' }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}
