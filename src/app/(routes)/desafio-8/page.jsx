"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RefreshCcw } from "lucide-react"

export default function Desafio8() {
  const [metros, setMetros] = useState(0);
  const [quilometros, setQuilometros] = useState(0);
  const [hectometros, setHectometros] = useState(0);
  const [decametros, setDecametros] = useState(0);
  const [decimetros, setDecimetros] = useState(0);
  const [centimetros, setCentimetros] = useState(0);
  const [milimetros, setmilimetros] = useState(0);


  const calculateMetric = (event) => {
    event.preventDefault();
    setQuilometros(metros / 1000);
    setHectometros(metros / 100);
    setDecametros(metros / 10);
    setDecimetros(metros * 10);
    setCentimetros(metros * 100);
    setmilimetros(metros * 1000);
  }

  const refreshPage = () => {
    window.location.reload()
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl mt-7 mb-7">Desafio 08</h1>
      <p className="text-base text-justify m-4">
        Desenvolva um programa que leia uma distância em metros e mostre os valores relativos em outras medidas.<br />
        Ex: <br />
        Digite uma distância em metros: 185.72<br />
        A distância de 185.7m corresponde a :<br />
        0.18572km <br />
        1.8572Hm <br />
        18.572Dam <br />
        1857.2dm <br />
        18572.0cm <br />
        185720.0mm

      </p>

      <div
        className="w-[320px] min-h-[300px] md:w-[600px] xl:w-[1000px] pt-3 pb-3 border-2 flex items-center justify-center"
      >
        <form>
          {!quilometros ? (
            <>
              <Label className=" text-base ">
                Digite uma distância em metros
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="number"
                min={0}
                onChange={(event) => setMetros(Number(event.target.value))}
              />
              <Button type="submit" variant={"default"} size={"lg"} onClick={calculateMetric}>
                calcular métricas
              </Button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="md:text-2xl text-justify p-4">
                A distância de <span className="font-bold">{metros.toFixed(1)}m</span> corresponde a:<br />
                {quilometros}<span className="font-bold">Km</span> <br />
                {hectometros}<span className="font-bold">Hm</span>  <br />
                {decametros}<span className="font-bold">Dam</span> <br />
                {decimetros}<span className="font-bold">dm</span> <br />
                {centimetros}<span className="font-bold">cm</span> <br />
                {milimetros}<span className="font-bold">mm</span>
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