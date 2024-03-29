import { Box, Container } from '@mui/material'
import React from 'react'
import github from '../assets/github.svg'

const Footer = () => {
  return (
    <Container
      sx={{
        padding: '10px',
        backgroundColor: 'gray',
        position: 'fixed',
        bottom: '0',
        fontSize: '0.7rem'
      }}
      maxWidth="lg"
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <div>
          © 2022-{new Date().getFullYear()}
          {` `}
          <a
            style={{ textDecoration: 'none', color: 'black' }}
            href="https://www.michaeldesantis.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.michaeldesantis.dev
          </a>
        </div>
        <div>
          <a
            href="https://github.com/crono628/kefir_madness"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} />
          </a>
        </div>
      </Box>
    </Container>
  )
}

export default Footer
