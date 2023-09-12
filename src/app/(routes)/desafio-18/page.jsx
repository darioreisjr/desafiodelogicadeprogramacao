"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RefreshCcw } from "lucide-react"

export default function Desafio18() {
  const [anoNascimento, setAnoNadcimento] = useState(0);
  const [idadevotar, setIdadeVotar] = useState(0);



  const checkIfYouCanVote = (event) => {
    event.preventDefault();

    const idade =  2023 - anoNascimento
  
    if (idade >= 18) {
      setIdadeVotar(
        "Você agora é um eleitor e pode contribuir para o futuro do nosso país. Parabéns!"
      );
      
    }
    else {
      setIdadeVotar(
        "Nesta eleição, você não pode votar, pois ainda não tem idade suficiente. Mas você pode acompanhar as eleições e aprender mais sobre o processo eleitoral."
      );
    }

  }

  const refreshPage = () => {
    window.location.reload()
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl mt-7 mb-7">Desafio 18</h1>
      <p className="text-base text-justify m-4">
        Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade dela <br /> e despois mostre se ela pode ou não votar.
      </p>

      <div
        className="w-[320px] min-h-[300px] md:w-[600px] xl:w-[1000px] pt-3 pb-3 border-2 flex items-center justify-center"
      >
        <form>
          {!idadevotar ? (
            <>
              <Label className=" text-base ">
                Qual seu ano de nascimento?
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="number"
                min={0}
                onChange={(event) => setAnoNadcimento(Number(event.target.value))}
              />
              <Button type="submit" variant={"default"} size={"lg"} onClick={checkIfYouCanVote}>
                Checar 
              </Button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="md:text-2xl text-center p-4 font-bold">
                {idadevotar}
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