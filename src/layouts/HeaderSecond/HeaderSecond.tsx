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
    <Stack className="headerSecondStack">
      <Container className="headerSecondContainer" maxWidth="lg" >
        <h1>HeaderSecond</h1>
      </Container>
    </Stack>
  );
}

export default HeaderSecond;
