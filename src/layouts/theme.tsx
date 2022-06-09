import React from 'react';
import { createTheme } from '@mui/material';


export const theme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#E30613',
        '100': '#FB5F67',
        '300': '#F7343E',
        '500': '#E30613',
        '700': '#B50009',
        '900': '#8D0007',
      },
      secondary: {
        main: '#F8AC1B',
        '100': '#FFCE72',
        '300': '#FFC049',
        '500': '#F8AC1B',
        '700': '#CB8604',
        '900': '#A06900',
      },
      warning: {
        main: '#FF5005',
        '100': '#FF9366',
        '300': '#FF763C',
        '500': '#FF5005',
        '700': '#C83C00',
        '900': '#9D2F00',
      },
      divider: '#ECECEC',
      text: {
        disabled: '#C7C7C7',
        secondary: '#A3A3A3',
        primary: '#464646',
      },
      common: {
        black: '#464646',
        white: '#FFFFFF',
      },
      error: {
        main: '#F1B2B8',
        light: '#FAE1E4',
        dark: '#EB5757',
      },
      success: {
        main: '#7ADFC6',
        light: '#CCF3E9',
        dark: '#219653',
      },
      background: {
        default: '#F6F6F6',
        paper: '#FFFFFF',
      },
      grey: {
        '100': '#F6F6F6',
        '300': '#ECECEC',
        '500': '#C7C7C7',
        '700': '#A3A3A3',
        '900': '#464646',
      },
    },
    typography: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeightBold: 700,
      fontWeightMedium: 600,
      fontWeightRegular: 400,
      h1: {
        fontSize: 76.8,
        fontWeight: 900,
        lineHeight: 1.46,
        '@media screen and (min-width: 1280px)': {
          fontSize: 96,
        },
      },
      h2: {
        fontSize: 48,
        fontWeight: 700,
        lineHeight: 1.46,
        '@media screen and (min-width: 1280px)': {
          fontSize: 60,
        },
      },
      h3: {
        fontSize: 38.4,
        fontWeight: 700,
        lineHeight: 1.46,
        '@media screen and (min-width: 1280px)': {
          fontSize: 48,
        },
      },
      h4: {
        fontSize: 27.2,
        fontWeight: 700,
        lineHeight: 1.46,
        '@media screen and (min-width: 1280px)': {
          fontSize: 34,
        },
      },
      h5: {
        fontSize: 19.2,
        fontWeight: 700,
        lineHeight: 1.46,
        '@media screen and (min-width: 1280px)': {
          fontSize: 24,
        },
      },
      subtitle1: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.5,
        '@media screen and (min-width: 1280px)': {
          fontSize: 20,
        },
      },
      body1: {
        fontSize: 12.8,
        fontWeight: 400,
        lineHeight: 1.62,
        '@media screen and (min-width: 1280px)': {
          fontSize: 16,
        },
      },
      body2: {
        fontSize: 11.2,
        fontWeight: 400,
        lineHeight: 1.42,
        '@media screen and (min-width: 1280px)': {
          fontSize: 14,
        },
      },
      caption: {
        fontSize: 9.6,
        fontWeight: 400,
        lineHeight: 1.33,
        '@media screen and (min-width: 1280px)': {
          fontSize: 12,
        },
      },
      button: {
        fontSize: 11.2,
        fontWeight: 600,
        lineHeight: 1.33,
        textTransform: 'uppercase',
        '@media screen and (min-width: 1280px)': {
          fontSize: 14,
        },
      },
    },
  });
