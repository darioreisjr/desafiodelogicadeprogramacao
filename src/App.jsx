import "./App.css"
import React from "react";

import Primeiro from "./componets/basicos/Primeiro";
import Framento from "./componets/basicos/Fragmento";
import ComParametro from "./componets/basicos/ComParametro";
import Aleatorio from "./componets/basicos/Aleatorio";
import Card from "./componets/layout/Card";

export default function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo=" #04 - Desafio Aleatório" color="#FA6900">
          <Aleatorio max={60} min={1} />
        </Card>
        <Card titulo=" #03 - Fragmento" color="#E94C6F">
          <Framento />
        </Card>
        <Card titulo="  #02 - Com Parametros"color="#E8B71A">
          <ComParametro
            titulo="Situação do Aluno"
            aluno="Jorge Santos"
            nota={7.0}
          />
        </Card>
        <Card titulo=" #01 - Primeiro Componente" color="#588C73">
          <Primeiro></Primeiro>
        </Card>
      </div>

    </div>
  );
}
