import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Header = () => {
  return (
    <Menubar className="max-w-7xl  flex items-center justify-center p-16">
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/">
            Inicio
          </Link>
        </MenubarTrigger>
        <MenubarTrigger>
          <Link href="/">
            Desafios
          </Link>
        </MenubarTrigger>
        <MenubarTrigger>
          <Link href="/">
            Contatos
          </Link>
        </MenubarTrigger>
        <MenubarTrigger>
          <Link href="https://github.com/darioreisjr" target="_blank">
            GitHub
          </Link>
        </MenubarTrigger>
        <MenubarTrigger>
          <Link href="https://darioreisjr.vercel.app/" target="_blank">
            Portifolio
          </Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>

  )
}
export default Header;