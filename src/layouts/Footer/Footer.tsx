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
    <ContainerGlobal>
      <Container maxWidth="lg" >
        <Stack style={styles.main}>
          <h1>Footer</h1>
        </Stack>
      </Container>
    </ContainerGlobal>
  );
}

export default Footer;
