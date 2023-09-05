"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RefreshCcw } from "lucide-react"

export default function Desafio8() {
  const [preco, setPreco] = useState(0);
  const [precoPromociaonal, setPrecoPromocional] = useState(0);



  const calculateDiscount = (event) => {
    event.preventDefault();
    const desconto = preco * 5 / 100;
    setPrecoPromocional(preco - desconto)
  }

  const refreshPage = () => {
    window.location.reload()
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl mt-7 mb-7">Desafio 12</h1>
      <p className="text-base text-justify m-4">
        Crie um programa que leia o preço de um produto, calcule e mostre o seu PREÇO PROMOCIONAL, com 5% de desconto.<br />
      </p>

      <div
        className="w-[320px] min-h-[300px] md:w-[600px] xl:w-[1000px] pt-3 pb-3 border-2 flex items-center justify-center"
      >
        <form>
          {!precoPromociaonal ? (
            <>
              <Label className=" text-base ">
                Digite o preço do produto:
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="number"
                min={0}
                onChange={(event) => setPreco(Number(event.target.value))}
              />
              <Button type="submit" variant={"default"} size={"lg"} onClick={calculateDiscount}>
                Calcular Desconto
              </Button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="md:text-2xl text-center p-4 font-bold">
                PREÇO PROMOCIONAL <br />
                <Button variant={"destructive"} size={"lg"}>
                  R$ {precoPromociaonal.toFixed(2).toString().replace(".", ",")}
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