"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RefreshCcw } from "lucide-react"

export default function Desafio4() {
  const [primeiroNumero, setPrimeiroNumero] = useState(0);
  const [segundoNumero, setSegundoNumero] = useState(0);
  const [resultado, setResultado] = useState(0);

  const somar= (e) => {
    e.preventDefault();
    setResultado(primeiroNumero + segundoNumero)
  }

  const refreshPage = () => {
    window.location.reload()
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl mt-7 mb-7">Desafio 04</h1>
      <p className="text-base text-justify m-4">
        Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório entre eles.<br />
        Ex: <br />
        Digite um valor: 8 <br />
        Digite outro valor: 5 <br />
        A Soma entre 8 e 5 é igual a 13.
      </p>

      <div
        className="w-[320px] min-h-[300px] md:w-[600px] xl:w-[1000px] pt-3 pb-3 border-2 flex items-center justify-center"
      >
        <form>
          <Label className=" text-base">
            Digite um valor
          </Label>
          <Input
            className="w-[300] max-w-[600px] mb-4 mt-4"
            type="number"
            min={0}
            value={primeiroNumero}
            onChange={(e) => setPrimeiroNumero(e.target.value)}
          />
          <Label className=" text-base">
            Digite outro valor
          </Label>
          <Input
            className="w-[300] max-w-[600px] mb-4 mt-4"
            type="number"
            min={0}
            value={segundoNumero}
            onChange={(e) => setSegundoNumero(e.target.value)}
          />
          <Button type="submit" variant={"secondary"} size={"lg"} onClick={somar}>
            Enviar
          </Button>
          {resultado === 0 ? (
            <></>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="md:text-2xl text-justify p-4">A Soma entre <span className="font-bold">{primeiroNumero}</span> e <span className="font-bold">{segundoNumero}</span>  é igual a <span className="font-bold">{resultado}</span></p>
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