import styled, { keyframes } from "styled-components";

export const ContentCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); //1fr 1fr 1fr 1fr
  gap: 20px;

  margin-top: 20px;
  margin-bottom: 100px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const fade = keyframes`
from{
 opacity: 0;

} to {

  opacity:1
}

`;

export const Loader = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    animation: ${fade} 1s infinite;
  }
`;


export const ButtonLoadMore = styled.button`
background-color: var(--greenLight);
display: block;
margin: 0 auto 70px auto;//top, right, bottom, left
border: none;
width: 200px;
height:50px;
border-radius: 5px;
color: #fafafa;
cursor: pointer;

&:hover{
  background-color:var(--greenPrimary);
}

&:disabled{
  opacity: 0.5;
  cursor: not-allowed;
}

`