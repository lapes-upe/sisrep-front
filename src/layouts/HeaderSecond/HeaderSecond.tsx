import "./HeaderSecond.scss";
import { StyleSheet } from "../../utils/StyleSheet";
import ContainerCustom from "../ContainerCustom/ContainerCustom";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

function HeaderSecond() {
  const styles = StyleSheet.create({
    variante: {
      color: "blue",
    },
  });

  return (
    <Box component="header" className="headerSecond">
      <ContainerCustom>
        <Box className="headerBody">
          <Box className="left">
            <Box className="logo">UPE</Box>
            <Box>
              <Box component="ul">
                <Box component="li"><Link to={'/'}>Preencher PADs</Link></Box>
                <Box component="li"><Link to={'/sobre'}>Emissão de Diploma</Link></Box>
                <Box component="li"><Link to={'/contato'}>Dispensa de ACEs/DCEs</Link></Box>
                <Box component="li"><Link to={'/contato'}>Dispensa de Disciplina</Link></Box>
              </Box>
            </Box>
          </Box>
          <Box className="rigth">
            <Box className="verticalLine"></Box>
            <Button variant="contained" sx={{backgroundColor: "secondary.main"}}>Acessar</Button>
          </Box>
        </Box>
      </ContainerCustom>
    </Box>
  );
}

export default HeaderSecond;
