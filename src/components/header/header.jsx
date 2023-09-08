import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import Link from "next/link";


const Header = () => {
  return (
    <Menubar className="max-w-7xl  flex items-center justify-center p-16">
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/">
            Inicio
          </Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>

  )
}
export default Header;