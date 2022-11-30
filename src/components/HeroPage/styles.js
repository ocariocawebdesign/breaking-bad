import styled from "styled-components";
import bbHome from "../../assets/background-bb.jpg";
import bbSaul from "../../assets/background-saul.jpg";

export const HeroSectionPage = styled.div`
  height: 400px;
  background-position: top center;
  background-size: cover;
  display: flex;
  align-items: flex-end;

  h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  ${(props) => {
    if (props.serie === "Breakingbad") {
      return `background-image: url(${bbHome});
`;
    } else if (props.serie === "BetterCallSaul")
      return `background-image: url(${bbSaul});`;
  }}
`;
