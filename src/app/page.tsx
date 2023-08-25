import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <>
      <h1 className="text-center mt-5 text-3xl" >Desafio de Lógica de Programação</h1>
      <div className="flex flex-col md:flex-row items-center justify-around flex-wrap gap-3 mb-6 mt-6">
        <Card className="w-[300px] md:w-[250px]">
          <CardHeader>
            <CardTitle>Desafio 01</CardTitle>
            <CardDescription>Resumo do desafio de lógica</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
          <Button>GitHub</Button>
            <Button variant="ghost">Deploy</Button>
          </CardFooter>
        </Card>
        <Card className="w-[300px] md:w-[250px]">
          <CardHeader>
            <CardTitle>Desafio 01</CardTitle>
            <CardDescription>Resumo do desafio de lógica</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <Button>GitHub</Button>
            <Button variant="ghost">Deploy</Button>
          </CardFooter>
        </Card>
        <Card className="w-[300px] md:w-[250px]">
          <CardHeader>
            <CardTitle>Desafio 01</CardTitle>
            <CardDescription>Resumo do desafio de lógica</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
          <Button>GitHub</Button>
            <Button variant="ghost">Deploy</Button>
          </CardFooter>
        </Card>
        <Card className="w-[300px] md:w-[250px]">
          <CardHeader>
            <CardTitle>Desafio 01</CardTitle>
            <CardDescription>Resumo do desafio de lógica</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
          <Button>GitHub</Button>
            <Button variant="ghost">Deploy</Button>
          </CardFooter>
        </Card>
        <Card className="w-[300px] md:w-[250px]">
          <CardHeader>
            <CardTitle>Desafio 01</CardTitle>
            <CardDescription>Resumo do desafio de lógica</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
          <Button>GitHub</Button>
            <Button variant="ghost">Deploy</Button>
          </CardFooter>
        </Card>
      </div>

    </>
  )
}
