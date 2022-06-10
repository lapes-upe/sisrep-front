import "./Footer.scss";
import { StyleSheet } from "../../utils/StyleSheet";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import ContainerGlobal from "../ContainerGlobal";

function Footer() {
  const styles = StyleSheet.create({
    main: {
      color: "red",
    },
  });

  return (
    <Stack className="footerStack">
      <Container className="footerContainer" maxWidth="lg" >
        <h1>Footer</h1>
      </Container>
    </Stack>
  );
}

export default Footer;
