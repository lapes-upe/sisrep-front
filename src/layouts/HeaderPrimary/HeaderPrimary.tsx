import "./HeaderPrimary.scss";
import { StyleSheet } from "../../utils/StyleSheet";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import ContainerGlobal from "../ContainerGlobal";

function HeaderPrimary() {
  const styles = StyleSheet.create({
    main: {
      color: "green",
    },
  });

  return (
    <ContainerGlobal>
      <Container maxWidth="lg">
        <Stack style={styles.main}>
          <h1>HeaderPrimary</h1>
        </Stack>
      </Container>
    </ContainerGlobal>
  );
}

export default HeaderPrimary;
