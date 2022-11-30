import { Infocard } from "./style";

export default function CardIntem({ imagem, nome, ator, apelido, status }) {
  return (
    <Infocard>
      <div className="image">
        <img src={imagem} />
      </div>
      <div className="info">
        <h2>{nome}</h2>
        <hr />
        <ul>
          <li>Ator: {ator} </li>
          <li>Nickname: {apelido}</li>
          <li>Status: {status}</li>
        </ul>
      </div>
    </Infocard>
  );
}
