"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RefreshCcw } from "lucide-react";

export default function Desafio24() {
  const [salarioAtual, setSalarioAtual] = useState(0);
  const [genero, setGenero] = useState("");
  const [tempoEmpresa, setTempoEmpresa] = useState(0);
  const [aumento, setAumento] = useState(0);
  const [novoSalario, setNovoSalario] = useState(0);

  const calculationOfTheIncrease = (event) => {
    event.preventDefault();

    if (!salarioAtual || !genero || !tempoEmpresa) {
      return alert("Preencha o campo corretamente!!!");
    }

    if (genero === "feminino") {
      if (tempoEmpresa < 15) {
        setAumento(0.05 * salarioAtual);
      } else if (tempoEmpresa <= 20) {
        setAumento(0.12 * salarioAtual);
      } else {
        setAumento(0.23 * salarioAtual);
      }
    } else {
      if (tempoEmpresa < 20) {
        setAumento(0.03 * salarioAtual);
      } else if (tempoEmpresa <= 30) {
        setAumento(0.13 * salarioAtual);
      } else {
        setAumento(0.25 * salarioAtual);
      }
    }

    setNovoSalario(salarioAtual + aumento);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl mt-7 mb-7">Desafio 37</h1>
      <p className="text-base text-justify m-4">
        Uma empresa precisa reajustar o salário dos seus funcionários, dando um
        aumento de acordo com alguns fatores. Faça um programa que leia o
        salário atual, o gênero do funcionário e há quantos anos esse
        funcionário trabalha na empresa. No final, mostre o seu novo salário,
        baseado na tabela a seguir: <br /> <br />
        - Mulheres - menos de 15 anos de empresa: +5% <br />
        - de 15 até 20 anos de empresa: +12% <br />
        - mais de 20 anos de empresa:+23% <br />
        - Homens - menos de 20 anos de empresa: +3% <br />
        - de 20 até 30 anos de empresa: +13% <br />
        - mais de 30 anos de empresa: +25% <br />
      </p>

      <div className="w-[320px] min-h-[300px] md:w-[600px] xl:w-[1000px] pt-3 pb-3 border-2 flex items-center justify-center">
        <form>
          {!novoSalario ? (
            <>
              <Label className=" text-base ">
                Digite o salário atual do funcionário:
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="text"
                onChange={(event) =>
                  setSalarioAtual(Number(event.target.value))
                }
              />
              <Label className=" text-base ">
                Digite o gênero do funcionário:
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="text"
                onChange={(event) => setGenero(event.target.value)}
              />
              <Label className=" text-base ">
                Digite o tempo de empresa do funcionário:
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="text"
                onChange={(event) =>
                  setTempoEmpresa(Number(event.target.value))
                }
              />
              <Button
                type="submit"
                variant={"default"}
                size={"lg"}
                onClick={calculationOfTheIncrease}
              >
                Cálcular aumento
              </Button>
            </>
          ) : (
            <div className="flex flex-col">
              <p className="md:text-2xl p-4">
                {`O novo salário do funcionário é de R$ ${novoSalario}`}
              </p>
              <Button
                className="m-auto"
                variant={"outline"}
                size={"icon"}
                onClick={refreshPage}
              >
                <RefreshCcw />
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
