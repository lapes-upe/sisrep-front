import "./Footer.scss";
import { StyleSheet } from "../../utils/StyleSheet";
import Container from '@mui/material/Container';
import ContainerCustom from "../ContainerCustom/ContainerCustom";

function Footer() {
  const styles = StyleSheet.create({
    variante: {
      color: "yellow",
    },
  });

  return (
    <footer className="footer">
      <ContainerCustom>
        <div className="footerBody">
          <div className="horizontalLine"></div>
          <div className="content">
            <span>Copyright © 2022 Universidade de Pernambuco. Todos os direitos reservados.</span>
            <div>
              <strong>Nós Siga:</strong>
              <span>IMG1</span>
              <span>IMG2</span>
            </div>
          </div>
        </div>
      </ContainerCustom>
    </footer>
  );
}

export default Footer;
