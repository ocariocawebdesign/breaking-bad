import { HeroSectionPage } from "./styles";

export function HeroPage({nameSerie, title}) {
  return (
    <>
      <HeroSectionPage serie={nameSerie}>
        <div className="container">
          <h1>{title}</h1>
        </div>
      </HeroSectionPage>
    </>
  );
}
