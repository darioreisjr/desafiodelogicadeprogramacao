"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RefreshCcw } from "lucide-react"

export default function Desafio7() {
  const [numero, setNumero] = useState(0);
  const [dobro, setDobro] = useState(0);
  const [terca, setTerca] = useState(0);

  const calculate = (event) => {
    event.preventDefault();
    setDobro(numero * 2)
    setTerca(numero / 3)
  }

  const refreshPage = () => {
    window.location.reload()
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl mt-7 mb-7">Desafio 05</h1>
      <p className="text-base text-justify m-4">
        Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a terça parte<br />
        Ex: <br />
        Digite um número: 3.5 <br />
        O dobro de 3.5 é 7.0 <br />
        A terça parte de 3.5 é 1.16666
      </p>

      <div
        className="w-[320px] min-h-[300px] md:w-[600px] xl:w-[1000px] pt-3 pb-3 border-2 flex items-center justify-center"
      >
        <form>
          {!dobro || !terca ? (
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
              <Button type="submit" variant={"default"} size={"lg"} onClick={calculate}>
                Monstrar
              </Button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="md:text-2xl text-justify p-4">O Dobro de <span className="font-bold">{numero}</span> é <span className="font-bold">{dobro}</span></p>
              <p className="md:text-2xl text-justify p-4">A terça parte de <span className="font-bold">{numero}</span> é <span className="font-bold">{terca}</span></p>
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