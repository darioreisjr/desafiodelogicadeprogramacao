"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RefreshCcw } from "lucide-react"

export default function Desafio8() {
  const [salarioFuncionario, setSalarioFuncionario] = useState(0);
  const [salarioAumento, setSalarioAumento] = useState(0);



  const calculateRaise  = (event) => {
    event.preventDefault();
    const aumento = salarioFuncionario * 15 / 100;
    setSalarioAumento(salarioFuncionario + aumento)
  }

  const refreshPage = () => {
    window.location.reload()
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl mt-7 mb-7">Desafio 13</h1>
      <p className="text-base text-justify m-4">
        Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o seu novo salário, com 15% de aumento.<br />
      </p>

      <div
        className="w-[320px] min-h-[300px] md:w-[600px] xl:w-[1000px] pt-3 pb-3 border-2 flex items-center justify-center"
      >
        <form>
          {!salarioAumento ? (
            <>
              <Label className=" text-base ">
                Digite o Salário do funcionário:
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="number"
                min={0}
                onChange={(event) => setSalarioFuncionario(Number(event.target.value))}
              />
              <Button type="submit" variant={"default"} size={"lg"} onClick={calculateRaise}>
                Calcular Aumento
              </Button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="md:text-2xl text-center p-4 font-bold">
                SALÁRIO COM AUMENTO <br />
                <Button variant={"destructive"} size={"lg"}>
                  R$ {salarioAumento.toFixed(2).toString().replace(".", ",")}
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