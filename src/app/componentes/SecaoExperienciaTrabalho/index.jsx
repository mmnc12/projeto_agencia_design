import Card from "../Card";
import estilos from "./secaoExperienciaTrabalho.module.css";

export default function SecaoExperienciaTrabalho() {
  return (
    <section className={estilos.experiencia_trabalho}>
      <div className={estilos.titulo_descricao}>
        <h1>Experiências De Trabalho</h1>
        <p>Há mais de 10 anos no mercado de Branding,     Desing Gráfico, Criação de
          Sites e Marketing Digital, nos empenhamos diariamente para entregar
          resultados que tragam impacto aos nossos clientes.
        </p>
      </div>
      <div className={estilos.cards}>
        <Card
          data={"JUNHO 2012 - 2016"}
          titulo={"Web Designer"}
          empresa={"Pied Piper StartUp."}
          paragrafo={"Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"}
        />
        <Card
          data={"AGOSTO 2016 - 2019"}
          titulo={"Product Designer"}
          empresa={"E Corp."}
          paragrafo={"Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"}
        />
        <Card
          data={"JFEVEREIRO 2019 - 2021"}
          titulo={"Digital Consulting"}
          empresa={"Arasaka Inc."}
          paragrafo={"Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"}
        />
      </div>
    </section>
  )
}