import Image from "next/image";
import estilos from "./secaoBanner.module.css";
import banner from "../../../../public/banner.jpg";

export default function SecaoBanner() {
  return (
    <section className={estilos.banner}>
      <div className={estilos.fundo}>
      </div>
      <div className={estilos.titulo}>
        <p>BRANDING / UI / UX / TECNOLOGIA</p>
        <h2>Agência de Branding <span>e design digital</span></h2>
      </div>
    </section>
  )
}