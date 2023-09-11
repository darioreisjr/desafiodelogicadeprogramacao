import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import Link from "next/link";

import { Github, Home, Swords, User2, GalleryHorizontalEnd,Linkedin } from 'lucide-react';


const Header = () => {
  return (
    <Menubar className="max-w-7xl  flex items-center justify-center p-16">
      <MenubarMenu>
        <MenubarTrigger className="space-x-1">
        <Home size={20} />
          <Link href="/">
            Inicio
          </Link>
        </MenubarTrigger>
        <MenubarTrigger className="space-x-1">
          <Swords size={20}/>
          <Link href="/">
            Desafios
          </Link>
        </MenubarTrigger>
        <MenubarTrigger className="space-x-1">
          <User2 size={20}/>
          <Link href="/">
            Contatos
          </Link>
        </MenubarTrigger>
        <MenubarTrigger className="space-x-1">
          <GalleryHorizontalEnd size={20}/>
          <Link href="https://darioreisjr.vercel.app/" target="_blank">
            Portifolio
          </Link>
        </MenubarTrigger>
        <MenubarTrigger>
          <Link href="https://github.com/darioreisjr" target="_blank">
            <Github />
          </Link>
        </MenubarTrigger>
        <MenubarTrigger>
          <Link href="https://www.linkedin.com/in/darioreisjr" target="_blank">
            <Linkedin  />
          </Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>

  )
}
export default Header;