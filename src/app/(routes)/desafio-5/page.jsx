"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RefreshCcw } from "lucide-react"

export default function Desafio5() {
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [media, setMedia] = useState(0);

  const calculateAverage = (event) => {
    event.preventDefault();
    const media = (nota1 + nota2) / 2
    setMedia(media);
  }

  const refreshPage = () => {
    window.location.reload()
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl mt-7 mb-7">Desafio 05</h1>
      <p className="text-base text-justify m-4">
        Faça um programa que leia duas notas de um aluno em uma matéria e mostre na tela a sua média na disciplina.<br />
        Ex: <br />
        Nota 1: 4.5 <br />
        Nota 2: 8.5 <br />
        A média entre 4.5 e 8.5 é igual a 6.5.
      </p>

      <div
        className="w-[320px] min-h-[300px] md:w-[600px] xl:w-[1000px] pt-3 pb-3 border-2 flex items-center justify-center"
      >
        <form>
          <Label className=" text-base ">
            Nota 1
          </Label>
          <Input
            className="w-[300] max-w-[600px] mb-4 mt-4"
            type="number"
            min={0}
            onChange={(event) => setNota1(Number(event.target.value))}
          />

          {nota1 ? (
            <>
              <Label className=" text-base">
                Nota 2
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="number"
                min={0}
                onChange={(event) => setNota2(Number(event.target.value))}
              />
            </>
          ) : (
            <></>
          )}

          {nota1 || nota2 ? (
            <Button type="submit" variant={"default"} size={"lg"} onClick={calculateAverage}>
              Calcular Média
            </Button>
          ) : (
            <></>
          )}
          {media ? (
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="md:text-2xl text-justify p-4">A média entre <span className="font-bold">{nota1}</span>  e <span className="font-bold">{nota2}</span> é igual a <span className="font-bold">{media}</span></p>
              <Button variant={"outline"} size={"icon"} onClick={refreshPage}>
                <RefreshCcw />
              </Button>
            </div>
          ) : (
            <></>
          )}
        </form>
      </div>
    </div>
  )
}