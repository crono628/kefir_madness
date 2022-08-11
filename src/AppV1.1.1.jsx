import { Box, Container, Switch } from '@mui/material';
import React, { useState } from 'react';
import Footer from './components/Footer';
import KefirMath from './components/KefirMath';
import Scroll from './components/Scroll';
import InfoTabs from './components/InfoTabs';
import { db } from '../firebase';

const App = () => {
  const [metric, setMetric] = useState(true);

  const handleMetricChange = (e) => {
    setMetric(e.target.checked);
  };

  return (
    <Box minHeight="1000px">
      <Scroll below={250} />
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
          <Box>
            {metric ? 'Metric' : 'Imperial'}
            <Switch checked={metric} onChange={handleMetricChange} />
          </Box>
        </Box>
        <KefirMath metric={metric} />
        <InfoTabs />
      </Container>
      <Box mt={10} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default App;
