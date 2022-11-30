import { HeroSection } from "./styles";
import cardBB from "../../assets/card-bb.jpg";
import cardSaul from "../../assets/card-saul.jpg";
import { Link } from "react-router-dom";

export default function HeroHome() {
  return (
    //componente de estilo
    <HeroSection>
      <div className="container">
        <h1>"Não estou em perigo. Eu sou o perigo!"</h1>
        <p>Atenção: Contém Spoiler</p>

        <div className="cards">
          <Link to="/breaking-bad">
            <img src={cardBB} alt="" />
          </Link>
          <Link to="/better-call-saul">
          <img src={cardSaul} alt="" />
          </Link>
        </div>
      </div>
    </HeroSection>
  );
}
