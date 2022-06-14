import "./HeaderSecond.scss";
import { StyleSheet } from "../../utils/StyleSheet";
import ContainerCustom from "../ContainerCustom/ContainerCustom";
import { Link } from "react-router-dom";

function HeaderSecond() {
  const styles = StyleSheet.create({
    variante: {
      color: "blue",
    },
  });

  return (
    <header className="headerSecond">
      <ContainerCustom>
        <div className="headerBody">
          <div className="left">
            <div className="logo">UPE</div>
            <div>
              <ul>
                <li><Link to={'/'}>Preencher PADs</Link></li>
                <li><Link to={'/sobre'}>Emissão de Diploma</Link></li>
                <li><Link to={'/contato'}>Dispensa de ACEs/DCEs</Link></li>
                <li><Link to={'/contato'}>Dispensa de Disciplina</Link></li>
              </ul>
            </div>
          </div>
          <div className="rigth">
            <div className="verticalLine"></div>
            <button>Acessar</button>
          </div>
        </div>
      </ContainerCustom>
    </header>
  );
}

export default HeaderSecond;
