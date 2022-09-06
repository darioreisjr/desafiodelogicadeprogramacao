import "./App.css";
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import Framento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from './components/repeticao/TabelaProdutos';

export default function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">

        <Card titulo=" #07 - Desafio Repetição" color="#3A9AD9">
          <TabelaProdutos/>
        </Card>

        <Card titulo=" #06 - Repetição" color="#FF4C65">
          <ListaAlunos/>
        </Card> 
        
        <Card titulo=" #05 - Componente com Filhos" color="#00C8f8">
          <Familia sobrenome="Silva">
            <FamiliaMembro nome="Pedro"/>
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Gustavo"/>
          </Familia>
        </Card>

        <Card titulo=" #04 - Desafio Aleatório" color="#FA6900">
          <Aleatorio max={60} min={1} />
        </Card>
        <Card titulo=" #03 - Fragmento" color="#E94C6F">
          <Framento />
        </Card>
        <Card titulo="  #02 - Com Parametros" color="#E8B71A">
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
