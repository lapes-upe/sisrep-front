import "./Footer.scss";
import { StyleSheet } from "../../utils/StyleSheet";
import ContainerCustom from "../ContainerCustom/ContainerCustom";
import { Box, Typography } from '@mui/material';
import { BsFacebook, BsInstagram } from 'react-icons/Bs';


function Footer() {
  const styles = StyleSheet.create({
    variante: {
      color: "yellow",
    },
  });

  return (
    <Box component="footer"
      sx={{
        backgroundColor: 'primary.main',
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
            <Box className="socialMedia">
              <Box component="strong">Siga os perfis oficiais da UPE:</Box>
              <Box component="span">
                <a href="https://www.facebook.com/universidadepernambuco" target = "_blank">
                  <BsFacebook size={20} color='white' />
                </a>
              </Box>
              <Box component="span">
                <a href="https://www.instagram.com/upenasredes/" target = "_blank">
                  <BsInstagram size={20} color='white' />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </ContainerCustom>
    </Box>
  );
}

export default Footer;
