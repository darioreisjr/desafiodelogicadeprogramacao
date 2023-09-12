"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RefreshCcw } from "lucide-react"

export default function Desafio20() {
  const [numero, setNumero] = useState(0);
  const [parOuImpar, setParOuImpar] = useState(0);



  const evenOrOdd = (event) => {
    event.preventDefault();

    if(!numero ) {
      return (
        alert("Preencha o campo corretamente!!!")
      )
    }

    const restoDivisao = numero % 2

    if (restoDivisao === 0 ) {
      setParOuImpar(
        `O número é par.`
      );

    }
    else {
      setParOuImpar(
        `O número é ímpar.`
      );
    }

  }

  const refreshPage = () => {
    window.location.reload()
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl mt-7 mb-7">Desafio 20</h1>
      <p className="text-base text-justify m-4">
        Desenvolva um programa que leia um numero inteiro e mostre se ele é PAR ou ÍMPAR.
      </p>

      <div
        className="w-[320px] min-h-[300px] md:w-[600px] xl:w-[1000px] pt-3 pb-3 border-2 flex items-center justify-center"
      >
        <form>
          {!parOuImpar ? (
            <>
              <Label className=" text-base ">
                Digite um número
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="number"
                min={0}
                onChange={(event) => setNumero(Number(event.target.value))}
              />
              <Button type="submit" variant={"default"} size={"lg"} onClick={evenOrOdd}>
                Ver se Par ou ìmpar
              </Button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="md:text-2xl text-center p-4 font-bold">
                {parOuImpar}
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