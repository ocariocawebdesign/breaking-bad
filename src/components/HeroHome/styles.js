import styled from "styled-components";
import bgHome from "../../assets/background-home.jpg";

export const HeroSection = styled.div`
  height: 100vh;
  background-image: url(${bgHome});
  background-position: center top;
  background-size: cover;
  display: flex;
  align-items: flex-end;

  h1 {
    text-align: center;
    font-size: 40px;
  }

  p {
    text-align: center;
  }
  .cards {
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
    margin-top: 30px;

    img {
      border: solid 1px #fff;
      transition: 0.3s;

      &:hover {
        filter: brightness(130%);
        transform: scale(1.03);
      }
    }

    @media (max-width: 600px) {
      flex-direction: column;
      gap: 20px;
      padding: 20px;
    }
  }
`;
