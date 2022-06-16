import "./Home.scss"
import ContainerCustom from '../../layouts/ContainerCustom/ContainerCustom';
import { useContext } from "react";
import { DataContext } from "../../contexts/Data/Context";
import { Box, Button } from "@mui/material";

export default function Home() {
  const { setLoading } = useContext(DataContext);
  return (
    <ContainerCustom customClass='min-height'>
      <Box>
        <h1>Pagina Inicial</h1>
        <Button variant="contained" onClick={()=>setLoading(true)}>botão</Button>
      </Box>
    </ContainerCustom>
  );
}
