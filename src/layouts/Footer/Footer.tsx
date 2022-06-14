import "./Footer.scss";
import { StyleSheet } from "../../utils/StyleSheet";
import ContainerCustom from "../ContainerCustom/ContainerCustom";
import { Box, Typography } from '@mui/material';

function Footer() {
  const styles = StyleSheet.create({
    variante: {
      color: "yellow",
    },
  });

  return (
    <Box component="footer" 
    sx={{
      backgroundColor:'primary.main',
      display: 'flex',
      minHeight: 64,
      alignItems: 'center',
    }} 
    className="footer">
      <ContainerCustom>
        <Box className="footerBody">
          <Box className="horizontalLine"></Box>
          <Box className="content">
            <Typography>Copyright © 2022 Universidade de Pernambuco. Todos os direitos reservados.</Typography>
            <Box>
              <Box component="strong">Nós Siga:</Box>
              <Box component="span">IMG1</Box>
              <Box component="span">IMG2</Box>
            </Box>
          </Box>
        </Box>
      </ContainerCustom>
    </Box>
  );
}

export default Footer;
