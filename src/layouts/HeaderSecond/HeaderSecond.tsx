import "./HeaderSecond.scss";
import { StyleSheet } from "../../utils/StyleSheet";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import ContainerGlobal from "../ContainerGlobal";

function HeaderSecond() {
  const styles = StyleSheet.create({
    main: {
      color: "blue",
    },
  });

  return (
    <ContainerGlobal>
      <Container maxWidth="lg">
        <Stack style={styles.main}>
          <h1>HeaderSecond</h1>
        </Stack>
      </Container>
    </ContainerGlobal>
  );
}

export default HeaderSecond;
