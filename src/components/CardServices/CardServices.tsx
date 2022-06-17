import React from 'react';
import './CardServices.scss'
import { Box, Link, Typography } from '@mui/material';
import LogoUPE from "../../assets/LogoUPE(normal).png";

type typeCardServices = {
    imgSrc: string,
    title: string,
    paragraphy: string,
    path?: string,
}

const CardServices: React.FC<typeCardServices> = ({ imgSrc, title, paragraphy, path }) => {
    return (
        <Box className="cardServices">
            <Box className="bodyUp">
                <Box
                    component="img"
                    sx={{
                        height: 100,
                    }}
                    alt="The house from the offer."
                    src={imgSrc}
                />
            </Box>
            <Box className="bodyDown">
                <Box>
                    <Typography variant="h6" >{title}</Typography>
                    <Typography component='p' >{paragraphy}</Typography>
                </Box>
                <Link>Acessar</Link>
            </Box>
        </Box>
    );
}

export default CardServices;