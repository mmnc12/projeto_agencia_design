import estilos from "./card.module.css";

export default function Card(props) {
  return (
    <div className={estilos.card}>
      <div className={estilos.titulo}>
        <span>{props.data}</span>
        <h3>{props.titulo}</h3>
        <small>{props.empresa}</small>
      </div>
      <p>{props.paragrafo}</p>
    </div>
  )
}