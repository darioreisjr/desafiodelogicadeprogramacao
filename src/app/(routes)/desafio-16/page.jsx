"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RefreshCcw } from "lucide-react"

export default function Desafio8() {
  const [cigarroPorDia, setCigarroPorDia] = useState(0);
  const [anosFumando, setAnosFumando] = useState(0);
  const [totalDiasPerdidos, setTotalDiasPerdidos] = useState(0);



  const calculationOfDaysLost = (event) => {
    event.preventDefault();
    // Calcula a redução do tempo de vida em minutos
    const minutosPerdidos = cigarroPorDia * 10 * anosFumando * 365
    // Converte os minutos em dias
    const diasPerdidos = minutosPerdidos / 60 / 24
    setTotalDiasPerdidos(diasPerdidos)

  }

  const refreshPage = () => {
    window.location.reload()
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl mt-7 mb-7">Desafio 16</h1>
      <p className="text-base text-justify m-4">
        Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros
        fumados por dias e quantos anos ele já fumou. Considere que um fumante perde 10 min de vida a cada cigarro.
        Calcule quantos dias de vida um fumante perderá e exiba o total em dias.<br />
      </p>

      <div
        className="w-[320px] min-h-[300px] md:w-[600px] xl:w-[1000px] pt-3 pb-3 border-2 flex items-center justify-center"
      >
        <form>
          {!totalDiasPerdidos ? (
            <>
              <Label className=" text-base ">
                Quantos cigarros você fuma por dia?
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="number"
                min={0}
                onChange={(event) => setCigarroPorDia(Number(event.target.value))}
              />
              <Label className=" text-base ">
                Quantos anos você já fuma?
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="number"
                min={0}
                onChange={(event) => setAnosFumando(Number(event.target.value))}
              />
              <Button type="submit" variant={"default"} size={"lg"} onClick={calculationOfDaysLost}>
                Calcular dias perdidos
              </Button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="md:text-2xl text-center p-4 font-bold">
              Você perderá {totalDiasPerdidos.toFixed()} dias de vida por fumar
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