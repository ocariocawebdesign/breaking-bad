import CardIntem from "../CardItem";
import { useEffect, useState } from "react";
import { ContentCard } from "./style";
import axios from "axios";
import { Loader } from "./style";
import ImgLoader from "../../assets/loader.png";
import { ButtonLoadMore } from "./style";

export default function Application({ serie }) {
  const [totalCards, SetTotalCards] = useState(0);
  const [showCards, SetShowCards] = useState(4);
  const [items, SetItems] = useState([]);
  const [isLoader, setIsLoader] = useState(true);

  function mostrarMais() {
    setIsLoader(true);
    SetShowCards(showCards + 4);
  }

  useEffect(() => {
    //console.log("componente renderizado");

    axios
      .get(
        `https://www.breakingbadapi.com/api/characters?category=${serie}&limit=${showCards}&offset=0`
      )

      .then(
        (response) => {
          console.log(response.data);
          SetItems(response.data);
          SetTotalCards(response.data.length);

          //Dados carregados, esconta o loader
          setIsLoader(false);
        },
        [showCards]
      );
  });

  return (
    <>
      {isLoader && (
        <Loader>
          <img src={ImgLoader} alt="" />
        </Loader>
      )}

      <div className="container">
        <ContentCard>
          {items.map((dados) => {
            //console.log(dados);
            return (
              <CardIntem
                key={dados.char_id}
                imagem={dados.img}
                nome={dados.name}
                ator={dados.portrayed}
                apelido={dados.nickname}
                status={dados.status}
              />
            );
          })}
        </ContentCard>

       {/*} {`Total exibido: ${totalCards}`}
        <br />

        {`Total solicitado: ${showCards}`}
        <br />*/}

        <ButtonLoadMore onClick={mostrarMais} disabled={showCards !== totalCards ? true : false}>Mostrar mais</ButtonLoadMore>
      </div>
    </>
  );
}
