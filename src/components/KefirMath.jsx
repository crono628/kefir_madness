import { Slider } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useReducer } from 'react';
import { initialState, reducer } from './reducer';

const KefirMath = () => {
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

  return (
    <Box my={5}>
      <Container maxWidth="xs">
        <div>
          <div>Tablespoons: {state.tablespoons}</div>
          <div>Grains: {state.grains} grams</div>
        </div>
        <Slider
          min={15}
          max={250}
          value={state.grains}
          onChange={handleGrainChange}
        />
        <div>
          <div>Cups: {state.cups}</div>
          <div>Milk: {state.milk} milliliters</div>
        </div>
      </Container>
    </Box>
  );
};

export default KefirMath;
