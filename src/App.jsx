import { Box, Container, Switch } from '@mui/material';
import React, { useState } from 'react';
import Footer from './components/Footer';
import KefirMath from './components/KefirMath';

const App = () => {
  const [metric, setMetric] = useState(true);
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  };

  const handleMetricChange = (e) => {
    setMetric(e.target.checked);
  };

  return (
    <Box>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          my={5}
        >
          <Box sx={{ fontSize: '3rem' }} className="title">
            Kefir Madness
          </Box>
          <div>
            {metric ? 'Metric' : 'Imperial'}{' '}
            <Switch checked={metric} onChange={handleMetricChange} />
          </div>
        </Box>
        <KefirMath metric={metric} />
      </Container>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default App;
