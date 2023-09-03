"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RefreshCcw } from "lucide-react"

export default function Desafio8() {
  const [largura, setLargura] = useState(0);
  const [altura, setAltura] = useState(0);
  const [area, setArea] = useState(0);
  const [quantidadeDeTinta, setQuantidadeDeTinta] = useState(0);



  const CalculateAreaPainted = (event) => {
    event.preventDefault();
    setArea(largura * altura);
    setQuantidadeDeTinta(area / 2)
  }

  const refreshPage = () => {
    window.location.reload()
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl mt-7 mb-7">Desafio 10</h1>
      <p className="text-base text-justify m-4">
        Faça um algoritmo que leia a largura e altura de uma parede, calcule e mostre a área a ser pintada e a quantidade de tinta necessária para o serviço, sabendo que cada litro de tinta pinta uma áreade 2 metros quadrados.<br />
      </p>

      <div
        className="w-[320px] min-h-[300px] md:w-[600px] xl:w-[1000px] pt-3 pb-3 border-2 flex items-center justify-center"
      >
        <form>
          {!area || !quantidadeDeTinta ? (
            <>
              <Label className=" text-base ">
                Digite a largura da parede (em metros):
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="number"
                min={0}
                onChange={(event) => setLargura(parseFloat(event.target.value))}
              />
              <Label className=" text-base ">
                Digite a altura da parede (em metros):
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="number"
                min={0}
                onChange={(event) => setAltura(parseFloat(event.target.value))}
              />
              <Button type="submit" variant={"default"} size={"lg"} onClick={CalculateAreaPainted}>
                Calcular area a ser pintada
              </Button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
            <p className="md:text-2xl text-justify p-4">
              A área da parede é de {area} metros quadrados. <br />
              A quantidade de tinta necessária é de {quantidadeDeTinta} litros.
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