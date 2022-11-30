import styled from "styled-components";

export const Infocard = styled.div`
  background-color: #000;
  padding: 20px;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    filter: brightness(130%);
    transform: scale(1.03);
  }

  .image {
    width: 100%;
    height: 280px;
    overflow: hidden;
    margin-bottom: 20px;
  }

  .info {
    ul {
      margin-top: 20px;
      font-size: 14px;
      list-style: square;
      list-style-position: inside;
    }

    li {
      margin-bottom: 5px;
    }
  }
`;
