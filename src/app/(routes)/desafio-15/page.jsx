"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RefreshCcw } from "lucide-react"

export default function Desafio8() {
  const [diasTrabalhados, setDiasTrabalhados] = useState(0);
  const [salario, setsalario] = useState(0);



  const calculateSalary = (event) => {
    event.preventDefault();
    const totalHoras = diasTrabalhados * 8
    const salario = totalHoras * 25
    setsalario(salario)
  }

  const refreshPage = () => {
    window.location.reload()
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl mt-7 mb-7">Desafio 15</h1>
      <p className="text-base text-justify m-4">
        Crie um programa que leia o número de dias trabalhados em um mês e mostre o salário de um funcionário,
        sabendo que ele trabalha 8 horas por dia e ganha R$25 por hora trabalhada.<br />
      </p>

      <div
        className="w-[320px] min-h-[300px] md:w-[600px] xl:w-[1000px] pt-3 pb-3 border-2 flex items-center justify-center"
      >
        <form>
          {!salario ? (
            <>
              <Label className=" text-base ">
                Digite quantidade de <br /> dias trabalhados este mês:
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="number"
                min={0}
                onChange={(event) => setDiasTrabalhados(Number(event.target.value))}
              />
              <Button type="submit" variant={"default"} size={"lg"} onClick={calculateSalary}>
                Calcular Salário
              </Button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="md:text-2xl text-center p-4 font-bold">
                SALÁRIO DO MÊS <br />
                <Button variant={"destructive"} size={"lg"}>
                  R$ {salario.toFixed(2).toString().replace(".", ",")}
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