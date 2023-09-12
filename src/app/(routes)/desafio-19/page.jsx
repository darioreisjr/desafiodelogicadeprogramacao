"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RefreshCcw } from "lucide-react"

export default function Desafio19() {
  const [nomeAluno, setNomeAluno] = useState("");
  const [notaPrimeiroSemestre, setNotaPrimeiroSemestre] = useState(0);
  const [notaSegundoSemestre, setNotaSegundoSemestre] = useState(0);
  const [mediaFinal, setMediaFinal] = useState(0);



  const calculateAverage = (event) => {
    event.preventDefault();

    if(!nomeAluno  || !notaPrimeiroSemestre || !notaSegundoSemestre ) {
      return (
        alert("Preencha todos os campos corretamente!!!")
      )
    }

    const media = (notaPrimeiroSemestre + notaSegundoSemestre) / 2

    if (media >= 7 ) {
      setMediaFinal(
        `Parabéns, ${nomeAluno}! Você foi aprovado na disciplina com média de ${media.toFixed(1)} Pontos.`
      );

    }
    else {
      setMediaFinal(
        `Infelizmente ${nomeAluno}, você não foi aprovado na disciplina. Sua média foi de ${media.toFixed(1)} Pontos.`
      );
    }

  }

  const refreshPage = () => {
    window.location.reload()
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl mt-7 mb-7">Desafio 19</h1>
      <p className="text-base text-justify m-4">
        Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua média e mostre na tela. <br />
        No final, analise a média e mostre se o aluno teve ou não um bomaproveitamento (se ficou acima da <br />média 7.0).
      </p>

      <div
        className="w-[320px] min-h-[300px] md:w-[600px] xl:w-[1000px] pt-3 pb-3 border-2 flex items-center justify-center"
      >
        <form>
          {!mediaFinal ? (
            <>
              <Label className=" text-base ">
                Qual seu nome?
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="text"
                onChange={(event) => setNomeAluno(event.target.value)}
              />
              <Label className=" text-base ">
                Nota do Primeiro semestre:
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="number"
                min={0}
                onChange={(event) => setNotaPrimeiroSemestre(Number(event.target.value))}
              />
              <Label className=" text-base ">
                Nota do Segundo semestre:
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="number"
                min={0}
                onChange={(event) => setNotaSegundoSemestre(Number(event.target.value))}
              />
              <Button type="submit" variant={"default"} size={"lg"} onClick={calculateAverage}>
                Calcular Média
              </Button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="md:text-2xl text-center p-4 font-bold">
                {mediaFinal}
              </p>
              <Button variant={"outline"} size={"icon"} onClick={refreshPage}>
                <RefreshCcw />
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}