"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RefreshCcw } from "lucide-react"

export default function Desafio21() {
  const [ano, setAno] = useState(0);
  const [bissexto, setBissexto] = useState(0);



  const calculateLeapYear = (event) => {
    event.preventDefault();

    if (!ano) {
      return (
        alert("Preencha o campo corretamente!!!")
      )
    }

    if (ano % 4 == 0 || ano % 100 != 0 && ano % 400 == 0) {
      setBissexto(`O ano ${ano} é bissexto.`)
    }
    else {
      setBissexto`O ano ${ano} não é bissexto.`
    }
  }



  const refreshPage = () => {
    window.location.reload()
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl mt-7 mb-7">Desafio 21</h1>
      <p className="text-base text-justify m-4">
        Faça um algoritmo que leia um determinado ano e mostre se ele é ou não BISSEXTO.
      </p>

      <div
        className="w-[320px] min-h-[300px] md:w-[600px] xl:w-[1000px] pt-3 pb-3 border-2 flex items-center justify-center"
      >
        <form>
          {!bissexto ? (
            <>
              <Label className=" text-base ">
                Digite um ano:
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="number"
                min={0}
                onChange={(event) => setAno(Number(event.target.value))}
              />
              <Button type="submit" variant={"default"} size={"lg"} onClick={calculateLeapYear}>
                Ver se é bissexto
              </Button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="md:text-2xl text-center p-4 font-bold">
                {bissexto}
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