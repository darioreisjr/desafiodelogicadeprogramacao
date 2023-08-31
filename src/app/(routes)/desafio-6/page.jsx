"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RefreshCcw } from "lucide-react"

export default function Desafio6() {
  const [numero, setNumero] = useState(0);
  const [antecessor, setAntecessor] = useState(0);
  const [sucessor, setSucessor] = useState(0);

  const clickShow = (event) => {
    event.preventDefault();
    setAntecessor(numero - 1)
    setSucessor(numero + 1)
  }

  const refreshPage = () => {
    window.location.reload()
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl mt-7 mb-7">Desafio 06</h1>
      <p className="text-base text-justify m-4">
        Faça um programa que leia um número inteiro e mostre o seu antecessor e seu sucessor<br />
        Ex: <br />
        Digite um número: 9 <br />
        O antecessor de 9 é 8 <br />
        O sucessor de 9 é 10
      </p>

      <div
        className="w-[320px] min-h-[300px] md:w-[600px] xl:w-[1000px] pt-3 pb-3 border-2 flex items-center justify-center"
      >
        <form>
          {!sucessor || !antecessor  ? (
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

              <Button type="submit" variant={"default"} size={"lg"} onClick={clickShow}>
                Monstrar
              </Button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="md:text-2xl text-justify p-4">O antecessor de <span className="font-bold">{numero}</span> é <span className="font-bold">{antecessor}</span></p>
              <p className="md:text-2xl text-justify p-4">O sucessor de <span className="font-bold">{numero}</span> é <span className="font-bold">{sucessor}</span></p>
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