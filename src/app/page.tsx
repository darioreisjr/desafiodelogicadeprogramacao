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
import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1 className="text-center mt-5 text-3xl" >Desafio de Lógica de Programação</h1>
      <div className="flex flex-col md:flex-row items-center justify-around flex-wrap gap-3 mb-6 mt-6">
        <Card className="w-[400px] md:w-[300px]">
          <CardHeader>
            <CardTitle>Desafio 01</CardTitle>
            <CardDescription>Resumo do desafio de lógica</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <Button>
              <Link
                href="https://github.com/darioreisjr/desafiodelogicadeprogramacao/tree/main/src/app/(routes)/desafio-1"
                target="_blank"
              >
                GitHub
              </Link>
            </Button>
            <Button
              variant="ghost"
            >
              <Link
                href="/desafio-1"
              >
                Deploy
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

    </>
  )
}
