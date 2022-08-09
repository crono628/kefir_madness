import { Box, Container, Switch } from '@mui/material';
import React, { useState } from 'react';
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
    <Container maxWidth="sm">
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }} mt={5}>
        <h1 className="title">Kefir Madness</h1>
        <div>
          {metric ? 'Metric' : 'Imperial'}{' '}
          <Switch checked={metric} onChange={handleMetricChange} />
        </div>
      </Box>
      <KefirMath metric={metric} />
    </Container>
  );
};

export default App;
