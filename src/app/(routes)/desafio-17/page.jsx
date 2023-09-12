"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RefreshCcw } from "lucide-react"

export default function Desafio17() {
  const [velocidadeCarro, setVelocidadeCarro] = useState(0);
  const [velocidadeChecada, setVelocidadeChecada] = useState(0);



  const calculateSpeed = (event) => {
    event.preventDefault();
  
    if (velocidadeCarro > 80) {
      const multa = velocidadeCarro - 80
      const valorMulta = multa * 5
      setVelocidadeChecada(
        `Você ultrapassou a velocidade permitida e será multado em R$${valorMulta},00 Reais`
      );
    }
    else {
      setVelocidadeChecada(
        `Você está dentro da velocidade permitida.`
      );
    }

  }

  const refreshPage = () => {
    window.location.reload()
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl mt-7 mb-7">Desafio 17</h1>
      <p className="text-base text-justify m-4">
        Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse <br />
        80Km/h, exiba uma mensagem dizendo que o usuario foi multado. Nesse caso,  <br />
        exiba o valor da multa, cobrando R$5,00 por cada Km acima da velocidade <br />
        permitida.
      </p>

      <div
        className="w-[320px] min-h-[300px] md:w-[600px] xl:w-[1000px] pt-3 pb-3 border-2 flex items-center justify-center"
      >
        <form>
          {!velocidadeChecada ? (
            <>
              <Label className=" text-base ">
                Qual a velocidade do carro?
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="number"
                min={0}
                onChange={(event) => setVelocidadeCarro(Number(event.target.value))}
              />
              <Button type="submit" variant={"default"} size={"lg"} onClick={calculateSpeed}>
                Checar 
              </Button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="md:text-2xl text-center p-4 font-bold">
                {velocidadeChecada}
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