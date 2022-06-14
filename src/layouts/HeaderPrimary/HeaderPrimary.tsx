import "./HeaderPrimary.scss";
import { StyleSheet } from "../../utils/StyleSheet";
import ContainerCustom from "../ContainerCustom/ContainerCustom";
import { Link } from "react-router-dom";
import { Box, Typography } from '@mui/material';

function HeaderPrimary() {
  const styles = StyleSheet.create({
    variante: {
      color: 'red'
    },
  });

  return (
    <Box component='header' className="headerPrimary">
      <ContainerCustom>
        <Box className="headerBody">
          <Box className="left">
            <Typography>SISREP</Typography>
          </Box>
          <Box className="rigth">
            <Box component='ul'>
              <Box component='li'><Link to={'/'}>Início</Link></Box>
              <Box className="verticalLine"></Box>
              <Box component='li'><Link to={'/sobre'}>Sobre</Link></Box>
              <Box className="verticalLine"></Box>
              <Box component='li'><Link to={'/contato'}>Contato</Link></Box>
            </Box>
          </Box>
        </Box>
      </ContainerCustom>
    </Box>
  );
}

export default HeaderPrimary;
