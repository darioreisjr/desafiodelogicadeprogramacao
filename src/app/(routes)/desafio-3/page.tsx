"use client"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RefreshCcw } from "lucide-react"


export default function Desafio3() {
  const [funcionario, setFuncionario] = useState('');
  const [atuaFuncionario, setAtualFuncionario] = useState('');
  const [salario, setSalario] = useState('');
  const [atualSalario, setAtualSalario] = useState('');

  const handleClick = () => {
    setAtualFuncionario(funcionario)
    setAtualSalario(salario)
  };

  const refreshPage = () => {
    window.location.reload()
  };


  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl mt-7 mb-7">Desafio 03</h1>
      <p className="text-base text-justify m-4">
        Crie um programa que leia o nome e o sálario de um funcionário, mostrando no final uma mensagem. <br />
        Ex: <br />
        Nome do Funcionário: Maria do Carmo <br />
        Salário: R$1850,45 <br />
        O funcionário Maria do carmo tem um salário de R$1859,45 em Junho.
      </p>

      <div
        className="w-[320px] min-h-[300px] md:w-[600px] xl:w-[1000px] mt-3 border-2 flex items-center justify-center"
      >
        {!atuaFuncionario || !atualSalario ? (
          <form>
            <Label className=" text-base">
              Nome do funcionário
            </Label>
            <Input
              className="w-[300] max-w-[600px] mb-4 mt-4"
              type="text"
              value={funcionario}
              onChange={(event) => setFuncionario(event.target.value)}
            />
            <Label className=" text-base">
              Salário
            </Label>
            <Input
              className="w-[300] max-w-[600px] mb-4 mt-4"
              type="text"
              value={salario}
              onChange={(event) => setSalario(event.target.value)}
            />
            <Button type="submit" variant={"secondary"} size={"lg"} onClick={handleClick}  >
              Enviar
            </Button>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="md:text-2xl text-justify p-4">O funcionário <span className="font-bold">{atuaFuncionario}</span>, tem um salário de R$<span className="font-bold">{atualSalario}</span> em Junho.</p>
            <Button variant={"outline"} size={"icon"} onClick={refreshPage}>
              <RefreshCcw />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}