import estilos from "./rodape.module.css";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import fecebook from "../../../../public/facebook.png";
import twitter from "../../../../public/twitter.png";
import linkedin from "../../../../public/linkedin.png";
import dribble from "../../../../public/dribble.png";
import behance from "../../../../public/behance.png";
import google from "../../../../public/google.png";

export default function Rodape(props) {
  return (
    <footer className={estilos.rodape}>
      <div className={estilos.conteudo_rodape}>
        <div className={estilos.logo_paragrafo}>
          <Image src={logo} alt="logo" />
          <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
          ferramentas e tecnologias personalizadas.</p>
        </div>
        <div className={estilos.imagens}>
          <Image className={estilos.img} src={fecebook} alt="facebook" />
          <Image className={estilos.img} src={twitter} alt="twitter" />
          <Image className={estilos.img} src={linkedin} alt="linkedin" />
          <Image className={estilos.img} src={dribble} alt="dribble" />
          <Image className={estilos.img} src={behance} alt="behance" />
          <Image className={estilos.img} src={google} alt="google" />
        </div>
        <div className={props.mudarFundoDAPagina ? estilos['autor-light'] : estilos['autor-dark']}>
          <p>Copyright 2022 <span>Manoel Mecias do Nascimento</span></p>
        </div>
      </div>
    </footer>
  )
}