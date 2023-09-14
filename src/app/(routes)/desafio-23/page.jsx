"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RefreshCcw } from "lucide-react"




export default function Desafio23() {
  const [nome, setNome] = useState("");
  const [sexo, setSexo] = useState("");
  const [valorCompras, setValorCompras] = useState(0)
  const [valorDesconto, setValorDesconto] = useState(0);

  const calculateDiscount = (event) => {
    event.preventDefault();

    if (!nome || !sexo || !sexo || !valorCompras) {
      return (
        alert("Preencha o campo corretamente!!!")
      )
    }

    sexo.toUpperCase() === "F" ? setValorDesconto(valorCompras * 0.13) : setValorDesconto(valorCompras * 0.05)

  }

  const refreshPage = () => {
    window.location.reload()
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl mt-7 mb-7">Desafio 23</h1>
      <p className="text-base text-justify m-4">
        Numa Promoção exclusiva para o dia da mulher, uma loja quer dar descontos <br />
        para todos, mas especialmente para mulheres. Faça um programa que leia nome, <br />
        sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo <br />
        que: <br />
        - Homens ganham 5% de desconto <br />
        - Mulheres ganham 13% de desconto <br />
      </p>

      <div
        className="w-[320px] min-h-[300px] md:w-[600px] xl:w-[1000px] pt-3 pb-3 border-2 flex items-center justify-center"
      >
        <form>
          {!valorDesconto ? (
            <>
              <Label className=" text-base ">
                Informe o nome do cliente:
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="text"
                onChange={(event) => setNome(event.target.value)}
              />
              <Label className=" text-base ">
                Informe o sexo do cliente (M/F):
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="text"
                onChange={(event) => setSexo(event.target.value)}
              />
              <Label className=" text-base ">
                Informe o valor das compras:
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="number"
                min={0}
                onChange={(event) => setValorCompras(Number(event.target.value))}
              />
              <Button type="submit" variant={"default"} size={"lg"} onClick={calculateDiscount}>
                Calcular desconto
              </Button>
            </>
          ) : (
            <div className="flex flex-col">
              <p className="md:text-2xl p-4">
                Nome do cliente <br />
                <span className="font-bold">{nome}</span>
              </p>
              <p className="md:text-2xl p-4">
                Sexo do cliente <br />
                <span className="font-bold">{sexo.toUpperCase() === "M" ? "Masculino" : "Feminino"}</span>
              </p>
              <p className="md:text-2xl p-4">
                Valor das compras <br />
                <span className="font-bold">R$ {valorCompras.toFixed(2).toString().replace(".", ",")}</span>
              </p>
              <p className="md:text-2xl p-4">
                Desconto <br />
                <span className="font-bold">R$ {valorDesconto.toFixed(2).toString().replace(".", ",")}</span>
              </p>
              <p className="md:text-2xl p-4">
                Preço com desconto <br />
                <span className="font-bold">R$ {(valorCompras - valorDesconto).toFixed(2).toString().replace(".", ",")}</span>
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