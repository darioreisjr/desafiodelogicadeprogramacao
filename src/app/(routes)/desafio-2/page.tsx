"use client"

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RefreshCcw } from "lucide-react";

export default function Desafio2() {
  const [nome, setNome] = useState('');
  const [nomeAtual, setNomeAtual] = useState('');

  const handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
    event.preventDefault();
    setNome(event.target.value);
  };
  const handleClick = () => {
    setNomeAtual(nome)
  };

  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl mt-7 mb-7">Desafio 02</h1>
      <p
        className="text-base text-justify m-4">
        Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boas-vindas para ela: <br /> Ex: <br /> Qual é o seu nome? João da Silva <br />
        Olá João da silva, é um prazer te conhecer!
      </p>

      <div className="w-[320px] min-h-[300px] md:w-[600px] xl:w-[1000px] mt-3 border-2 flex items-center justify-center">
        <div>
          {!nomeAtual ? (
            <form>
              <Label className=" text-base">
                Digite seu Nome
              </Label>
              <Input
                className="w-[300] max-w-[600px] mb-4 mt-4"
                type="text" value={nome} onInput={handleChange}
              />
              <Button type="submit" variant={"secondary"} size={"lg"} onClick={handleClick} >
                Enviar
              </Button>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="md:text-2xl text-justify p-4">Olá <span className="font-bold">{nomeAtual}</span>, é um prazer te conhecer!</p>
              <Button variant={"outline"} size={"icon"} onClick={refreshPage}>
                <RefreshCcw />
              </Button>
            </div>
          )}

        </div>

      </div>
    </div>

  )
}