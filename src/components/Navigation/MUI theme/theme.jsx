import React from 'react';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#FFFFFF',
      },
      grey: {
        // This is green.A700 as hex.
        main: '#A3A3A3',
        secondary:'#CFCFCF',
        light:"#DEDEDE"

      },
     yellow:{
        main:'#E8B83F'
      },
      blue:{
        main:"#0083DB"
      },
      black:{
        main:'#000000'
      }
    },
  });

export default theme