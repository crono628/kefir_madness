import { Slider } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useReducer } from 'react';
import { initialState, reducer } from './reducer';

const KefirMath = ({ metric }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const ratio = 16;

  const handleGrainChange = (e) => {
    dispatch({
      type: 'set_multiple',
      payload: {
        grains: e.target.value,
        tablespoons: Math.round(e.target.value / 15),
        milk: e.target.value * ratio,
        cups: Math.round((e.target.value * ratio) / 240),
      },
    });
  };

  const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    margin: '10px',
  };

  return (
    <Box my={5}>
      <Box sx={{ maxWidth: '60vw' }}>
        <Slider
          min={15}
          max={250}
          value={state.grains}
          onChange={handleGrainChange}
        />
      </Box>
      <Box sx={boxStyle}>
        {metric ? (
          <div>
            Grams of kefir grains:
            <Box component="span" ml={1} sx={{ position: 'absolute' }}>
              {state.grains}
            </Box>
          </div>
        ) : (
          <div>
            Tablespoons:
            <Box component="span" ml={1} sx={{ position: 'absolute' }}>
              {state.tablespoons}
            </Box>
          </div>
        )}
        {metric ? (
          <div>
            Milliliters of milk:
            <Box component="span" ml={1} sx={{ position: 'absolute' }}>
              {state.milk}
            </Box>
          </div>
        ) : (
          <div>
            Cups of milk:
            <Box component="span" ml={1} sx={{ position: 'absolute' }}>
              {state.cups}
            </Box>
          </div>
        )}
      </Box>
    </Box>
  );
};

export default KefirMath;
