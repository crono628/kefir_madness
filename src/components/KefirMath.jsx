import { Card, Slider } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useAppContext } from '../AppContext'

const KefirMath = ({ metric }) => {
  const { state, dispatch } = useAppContext()
  const ratio = 240 / 15

  useEffect(() => {
    if (metric && state.grains < 15) {
      dispatch({ type: 'update', payload: { key: 'grains', value: 15 } })
    }
  }, [metric])

  const handleGrainChange = (e) => {
    dispatch({
      type: 'set_multiple',
      payload: {
        grains: e.target.value,
        tablespoons: roundHalf(e.target.value / 15),
        milk: e.target.value * ratio,
        cups: roundHalf((e.target.value * ratio) / 240)
      }
    })
  }

  const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    height: '60px',
    margin: '10px'
  }

  return (
    <Card elevation={3}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
        m={3}
      >
        <Box sx={boxStyle}>
          {metric ? (
            <Box py={0.7}>
              Grams of kefir grains:
              <Box component="span" ml={1} sx={{ position: 'absolute' }}>
                {state.grains}
              </Box>
            </Box>
          ) : (
            <Box py={0.7}>
              Tablespoons:
              <Box component="span" ml={1} sx={{ position: 'absolute' }}>
                {state.tablespoons}
              </Box>
            </Box>
          )}
          {metric ? (
            <Box py={0.7}>
              <div>
                Milliliters of milk:
                <Box component="span" ml={1} sx={{ position: 'absolute' }}>
                  {state.milk}
                </Box>
              </div>
              <div style={{ fontSize: '0.7rem' }}>
                * 1ml of milk weighs 1 gram
              </div>
            </Box>
          ) : (
            <Box py={0.7}>
              8oz cups of milk:
              <Box component="span" ml={1} sx={{ position: 'absolute' }}>
                {state.cups}
              </Box>
            </Box>
          )}
        </Box>
        <Box mt={4}>
          <Slider
            min={15}
            max={250}
            marks={!metric}
            value={state.grains}
            step={!metric ? 7.5 : 1}
            onChange={handleGrainChange}
          />
        </Box>
      </Box>
    </Card>
  )
}

export default KefirMath

function roundHalf(num) {
  return Math.round(num * 2) / 2
}
