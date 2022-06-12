import "./HeaderPrimary.scss";
import { StyleSheet } from "../../utils/StyleSheet";
import ContainerCustom from "../ContainerCustom/ContainerCustom";
import { Link } from "react-router-dom";

function HeaderPrimary() {
  const styles = StyleSheet.create({
    variante: {
      color: 'red'
    },
  });

  return (
    <header className="headerPrimary">
      <ContainerCustom>
        <div className="headerBody">
          <div className="left">
            <strong>SISREP</strong>
          </div>
          <div className="rigth">
            <ul>
              <li><Link to={'/'}>Início</Link></li>
              <div className="verticalLine"></div>
              <li><Link to={'/sobre'}>Sobre</Link></li>
              <div className="verticalLine"></div>
              <li><Link to={'/contato'}>Contato</Link></li>
            </ul>
          </div>
        </div>
      </ContainerCustom>
    </header>
  );
}

export default HeaderPrimary;
