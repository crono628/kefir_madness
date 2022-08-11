import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import React, { useState } from 'react';
import { kefirData } from './kefirData';
import KefirInfo from './KefirInfo';

const InfoTabs = () => {
  const [value, setValue] = useState('1');

  const handleTabs = (event, newValue) => {
    setValue(newValue);
  };

  const panelStyles = {
    padding: '0px',
    paddingTop: '24px',
  };

  return (
    <>
      <Box mt={3}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              onChange={handleTabs}
              variant="scrollable"
              scrollButtons={true}
              allowScrollButtonsMobile
            >
              <Tab label="Steps" value="1" />
              <Tab label="Tips" value="2" />
              <Tab label="Do" value="3" />
              <Tab label="Do not" value="4" />
            </TabList>
          </Box>
          <TabPanel sx={panelStyles} value="1">
            <KefirInfo
              title={'Kefir Instructions'}
              list={kefirData.filter((item) => item.type === 'instruction')}
              ordered={true}
            />
          </TabPanel>
          <TabPanel sx={panelStyles} value="2">
            <KefirInfo
              title={'Tips'}
              list={kefirData.filter((item) => item.type === 'tips')}
            />
          </TabPanel>
          <TabPanel sx={panelStyles} value="3">
            <KefirInfo
              title={'Do:'}
              list={kefirData.filter((item) => item.type === 'do')}
              ordered={false}
            />
          </TabPanel>
          <TabPanel sx={panelStyles} value="4">
            <KefirInfo
              title={'Do Not:'}
              list={kefirData.filter((item) => item.type === 'do not')}
              ordered={false}
            />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default InfoTabs;
