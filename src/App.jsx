import { Box, Container, Switch } from '@mui/material';
import React, { useState } from 'react';
import Footer from './components/Footer';
import KefirInfo from './components/KefirInfo';
import KefirMath from './components/KefirMath';
import { kefirInstructions } from './components/kefir-info/kefirInstructions';
import { kefirDo } from './components/kefir-info/kefirDo';
import { kefirDont } from './components/kefir-info/kefirDont';
import Scroll from './components/Scroll';

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
          <div>
            {metric ? 'Metric' : 'Imperial'}{' '}
            <Switch checked={metric} onChange={handleMetricChange} />
          </div>
        </Box>
        <KefirMath metric={metric} />
        <KefirInfo
          title={'Kefir Instructions'}
          list={kefirInstructions}
          ordered={true}
        />
        <KefirInfo title={'Kefir DO'} list={kefirDo} />
        <KefirInfo title={"Kefir DON'T"} list={kefirDont} />
      </Container>
      <Box mt={10} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default App;
