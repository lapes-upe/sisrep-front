import React from 'react'
import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: '#1C3C78',
            dark: '#132a54',
            light: '#496393',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#EC2026',
            dark: '#a5161a',
            light: '#ef4c51',
            contrastText: '#ffffff',
        },
        background: {
            paper: '#ffffff',
            default: '#F1F1F1',
        },
        teste: {
            main: '#000000'
        }
    },
    teste: {
        backgroundColor: '#EC2026'
    },
    typography: {
        h1: {
            fontSize: 40,
        },
        h2: {
            fontSize: 32,
        },
        h6: {
            fontSize: 18,
        },
        subtitle2: {
            fontSize: 16,
        }
    }
    
});