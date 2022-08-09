import { Box, Container } from '@mui/material';
import React from 'react';
import github from '../assets/github.svg';

const Footer = () => {
  return (
    <Container
      sx={{
        padding: '10px',
        backgroundColor: 'gray',
        position: 'fixed',
        bottom: '0',
        fontSize: '0.7rem',
      }}
      maxWidth="lg"
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>Copyright © 2022 MD. All rights reserved.</div>
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
  );
};

export default Footer;
