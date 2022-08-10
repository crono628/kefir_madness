import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import React, { useState } from 'react';
import { kefirInstructions } from './kefir-info/kefirInstructions';
import { kefirDo } from './kefir-info/kefirDo';
import { kefirDont } from './kefir-info/kefirDont';
import KefirInfo from './KefirInfo';

const InfoTabs = () => {
  const [value, setValue] = useState('1');

  const handleTabs = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box mt={3}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleTabs} aria-label="lab API tabs example">
              <Tab label="Instructions" value="1" />
              <Tab label="Do's" value="2" />
              <Tab label="Don'ts" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <KefirInfo
              title={'Kefir Instructions'}
              list={kefirInstructions}
              ordered={true}
            />
          </TabPanel>
          <TabPanel value="2">
            <KefirInfo title={'Kefir DO'} list={kefirDo} />
          </TabPanel>
          <TabPanel value="3">
            <KefirInfo title={"Kefir DON'T"} list={kefirDont} />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default InfoTabs;
