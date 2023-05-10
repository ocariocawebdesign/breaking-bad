import { FooterApp } from "./styles";

export function Footer() {
  return (
    <FooterApp>
      <p>
        Projeto desenvolvido por Carlos Abreu |{" "}
        <a
          style={{
            textDecoration: "none",
            color: "#FAFAFA",
            fontWeight: "bold",
          }}
          href="https://camistudio.com.br/"
          target="_blank"
        >
          CAMI STUDIO
        </a>
      </p>
    </FooterApp>
  );
}
