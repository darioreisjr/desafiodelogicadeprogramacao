export default function Desafio1() {

  const mensagem = "Óla, Mundo!"

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-2xl mt-7 mb-7">Desafio 01</h1>
      <p className="text-base text-justify m-4">Escreva um programa que mostre na tela a mensagem &quot;Óla, Mundo!&ldquo; </p>

      <div className="w-[320px] min-h-[300px] md:w-[600px] xl:w-[1000px] mt-3 border-2 flex items-center justify-center">
          <p className="text-4xl">
            {mensagem}
          </p>
      </div>
    </div>

  )
}