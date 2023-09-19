"use client"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RefreshCcw } from "lucide-react"

export default function Desafio24() {
  const [distancia, setDistancia] = useState(0);
  const [preco, setPreco] = useState(0);


  const calculateDistanceValue = (event) => {
    event.preventDefault();

    if (!distancia) {
      return (
        alert("Preencha o campo corretamente!!!")
      )
    }

    if (distancia <= 200) {
      setPreco(distancia * 0.5) 
    } else {
      setPreco(distancia * 0.45) 
    }

  }

  const refreshPage = () => {
    window.location.reload()
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl mt-7 mb-7">Desafio 24</h1>
      <p className="text-base text-justify m-4">
        Faça um algoritmo que pergunte a distância que um passageiro deseja <br />
        percorrer em KM. Calcule o preço da passagem, cobrando R$0,50 por <br />
        KM para viagens de até 200KM e R$0,45 para viagens mais longas.
      </p>

      <div
        className="w-[320px] min-h-[300px] md:w-[600px] xl:w-[1000px] pt-3 pb-3 border-2 flex items-center justify-center"
      >
        <form>
          {!preco ? (
            <>
              <Label className=" text-base ">
                Qual é a distância da sua viagem em KM?
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="text"
                onChange={(event) => setDistancia(Number(event.target.value))}
              />
              <Button type="submit" variant={"default"} size={"lg"} onClick={calculateDistanceValue}>
                Calcular Valor
              </Button>
            </>
          ) : (
            <div className="flex flex-col">
              <p className="md:text-2xl p-4">
                O preço da sua passagem é de R${preco.toFixed(2).toString().replace(".", ",")} 
              </p>
              <Button className="m-auto" variant={"outline"} size={"icon"} onClick={refreshPage}>
                <RefreshCcw />
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}