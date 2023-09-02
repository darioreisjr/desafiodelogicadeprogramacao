"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RefreshCcw } from "lucide-react"

export default function Desafio8() {
  const [valorReal, setValorReal] = useState(0);
  const [valorDolar, setValorDolar] = useState(0);



  const convertToDollar = (event) => {
    event.preventDefault();
    setValorDolar(valorReal / 3.45)
  }

  const refreshPage = () => {
    window.location.reload()
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl mt-7 mb-7">Desafio 09</h1>
      <p className="text-base text-justify m-4">
        Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) e mostre aquantos dólares ela pode comprar. Considere US$1,00 = R$3,45. <br />
      </p>

      <div
        className="w-[320px] min-h-[300px] md:w-[600px] xl:w-[1000px] pt-3 pb-3 border-2 flex items-center justify-center"
      >
        <form>
          {!valorDolar ? (
            <>
              <Label className=" text-base ">
                Quanto dinheiro você tem na carteira (em R$)?
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="number"
                min={0}
                onChange={(event) => setValorReal(parseFloat(event.target.value))}
              />
              <Button type="submit" variant={"default"} size={"lg"} onClick={convertToDollar}>
                Converter
              </Button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="md:text-2xl text-justify p-4">
                {valorDolar >= 1 ?
                  `Você pode comprar ${valorDolar.toFixed(2)} Dólares.`
                  : `Você pode comprar ${valorDolar.toFixed(2)} Cents.`}
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