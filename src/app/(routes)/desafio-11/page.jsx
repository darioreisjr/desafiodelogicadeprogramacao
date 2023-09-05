"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RefreshCcw } from "lucide-react"

export default function Desafio8() {
  const [valorA, setValorA] = useState(0);
  const [valorB, setValorB] = useState(0);
  const [valorC, setValorC] = useState(0);
  const [valorDelta, setValorDelta] = useState(0);



  const calculateDelta = (event) => {
    event.preventDefault();
    const delta = (valorB * valorB) - 4 * valorA * valorC;
    setValorDelta(delta) 

  }

  const refreshPage = () => {
    window.location.reload()
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl mt-7 mb-7">Desafio 11</h1>
      <p className="text-base text-justify m-4">
        Desenvolva uma lógica que leia os valores de A, B e C de uma equação do segundo grau e mostre o valor Delta.<br />
      </p>

      <div
        className="w-[320px] min-h-[300px] md:w-[600px] xl:w-[1000px] pt-3 pb-3 border-2 flex items-center justify-center"
      >
        <form>
          {!valorDelta ? (
            <>
              <Label className=" text-base ">
                Digite o valor de A:
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="number"
                min={0}
                onChange={(event) => setValorA(Number(event.target.value))}
              />
              <Label className=" text-base ">
                Digite o valor de B:
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="number"
                min={0}
                onChange={(event) => setValorB(Number(event.target.value))}
              />
              <Label className=" text-base ">
                Digite o valor de C:
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="number"
                min={0}
                onChange={(event) => setValorC(Number(event.target.value))}
              />
              <Button type="submit" variant={"default"} size={"lg"} onClick={calculateDelta}>
                Calcular Delta
              </Button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="md:text-2xl text-justify p-4">
                Delta: {valorDelta}
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