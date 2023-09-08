"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RefreshCcw } from "lucide-react"

export default function Desafio8() {
  const [quantidadeKm, setQuantidadeKm] = useState(0);
  const [quantidadeDias, setQuantidadeDias] = useState(0);
  const [quantidadePagar, setQuantidadePagar] = useState(0);



  const calculatePrice = (event) => {
    event.preventDefault();
    const valorTotalKm = quantidadeKm * 0.20
    const valorTotalDias = quantidadeDias * 90
    setQuantidadePagar(valorTotalKm + valorTotalDias)
  }

  const refreshPage = () => {
    window.location.reload()
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl mt-7 mb-7">Desafio 14</h1>
      <p className="text-base text-justify m-4">
        A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva um programa que pergunte a quantidade de KM percorridos
        por um carro alugado e a quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar, sabendo que o carro custa R$90,00
        por dia e R$0,20 por KM rodado.<br />
      </p>

      <div
        className="w-[320px] min-h-[300px] md:w-[600px] xl:w-[1000px] pt-3 pb-3 border-2 flex items-center justify-center"
      >
        <form>
          {!quantidadePagar ? (
            <>
              <Label className=" text-base ">
                Digite quantidade de KM percorridos:
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="number"
                min={0}
                onChange={(event) => setQuantidadeKm(Number(event.target.value))}
              />
              <Label className=" text-base ">
                Digite quantidade de dias alugado:
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="number"
                min={0}
                onChange={(event) => setQuantidadeDias(Number(event.target.value))}
              />
              <Button type="submit" variant={"default"} size={"lg"} onClick={calculatePrice}>
                Calcule o preço total a pagar
              </Button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="md:text-2xl text-center p-4 font-bold">
                VALOR A PAGAR <br />
                <Button variant={"destructive"} size={"lg"}>
                  R$ {quantidadePagar.toFixed(2).toString().replace(".", ",")}
                </Button>
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