'use client';
import { useState } from "react";
import Rodape from "./componentes/Rodape";
import SecaoBanner from "./componentes/SecaoBanner";
import SecaoExperienciaTrabalho from "./componentes/SecaoExperienciaTrabalho";
import Topo from "./componentes/Topo";
import "./globals.css";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  

  const [mudarFundoDaPagina, setMudarFundoDaPagina] = useState(false);


  function mudarCorFundo() {
    setMudarFundoDaPagina(!mudarFundoDaPagina);
  }

  return (
    <html lang="pt-br">
      <body className={mudarFundoDaPagina ? 'bg-dark' : 'bg-light'}>
        <Topo mudarCorFundo={mudarCorFundo} mudarFundoDaPagina={mudarFundoDaPagina} />
        <SecaoBanner />
        <SecaoExperienciaTrabalho mudarFundoDaPagina={mudarFundoDaPagina} />
        <Rodape mudarFundoDaPagina={mudarFundoDaPagina} />
        {children}
      </body>
    </html>
  );
}
