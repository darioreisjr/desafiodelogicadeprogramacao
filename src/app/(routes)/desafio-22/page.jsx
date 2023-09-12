"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RefreshCcw } from "lucide-react"

export default function Desafio22() {
  const [anoNascimento, setAnoNascimento] = useState(0);
  const [nome, setNome] = useState("");
  const [situacaoMilitar, setSituacaoMilitar] = useState(0);



  const checkStatus = (event) => {
    event.preventDefault();

    if (!anoNascimento || !nome) {
      return (
        alert("Preencha o campo corretamente!!!")
      )
    }

    const idade = 2023 - anoNascimento

    if (idade < 18) {
      setSituacaoMilitar(`${nome}, ainda não tem idade para se alistar. Faltam ${18 - idade} anos`)
    }
    if (idade > 18) {
      setSituacaoMilitar(` ${nome}, já pode se alistar. Pois ja passaram ${idade - 18} anos`)
    }
    if(idade === 18) {
      setSituacaoMilitar(`${nome}, já pode se alistar. Pois já tem a idade minima de 18 anos`)
    }
  }



  const refreshPage = () => {
    window.location.reload()
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl mt-7 mb-7">Desafio 22</h1>
      <p className="text-base text-justify m-4">
        Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua <br />
        situação em relação ao alistamento militar. <br />
        - Se esiver antes dos 18 anos, mostre em quantos anos faltam para o alistamento. <br />
        - Se já tiver depois dos 18 anos, mostre quantos anos já passaram do alistamento.
      </p>

      <div
        className="w-[320px] min-h-[300px] md:w-[600px] xl:w-[1000px] pt-3 pb-3 border-2 flex items-center justify-center"
      >
        <form>
          {!situacaoMilitar ? (
            <>
              <Label className=" text-base ">
                Digite um seu nome:
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="text"
                onChange={(event) => setNome(event.target.value)}
              />
              <Label className=" text-base ">
                Digite o Ano de Nascimento:
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="number"
                min={0}
                onChange={(event) => setAnoNascimento(Number(event.target.value))}
              />
              <Button type="submit" variant={"default"} size={"lg"} onClick={checkStatus}>
                Consultar Situação
              </Button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="md:text-2xl text-center p-4 font-bold">
                {situacaoMilitar}
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