export default function Aleatorio(props) {
  const numeroAleatorio = Math.floor(
    Math.random() * (props.max - props.min) + props.min
  );

  return (
    <>
      <div>
        <h2>Valor Aleatório</h2>
      </div>
      <div>
        <p>Valor Mínimo: {props.min} </p>
        <p>Valor Máximo: {props.max} </p>
        <p>Valor Escolhido: {numeroAleatorio}</p>
      </div>
    </>
  );
}
