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
    <Stack className="headerPrimaryStack">
      <Container className="headerPrimaryContainer" maxWidth="lg" >
        <h1>HeaderPrimary</h1>
      </Container>
    </Stack>
  );
}

export default HeaderPrimary;
