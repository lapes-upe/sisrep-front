import { PaletteColorOptions, ThemeOptions, TypographyVariant, TypographyVariantsOptions } from "@mui/material";
import React from 'react'

declare module '@mui/material/styles' {
    interface ThemeOptions {
        teste?: React.CSSProperties
    }

    interface PaletteOptions {
        teste?: PaletteColorOptions
    }

}