import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
// import userImage from './src/assets/Bianca.jpg';


export function Home() {
  const userName = 'Bianca Carvalho';
  const userFirstName = userName.split(' ')[0];
  const userAbbreviation = userName
  .split(' ')
  .slice(0, 2)
  .map(nome => nome.charAt(0))
  .join('');

  return (
    <header className="h-20 bg-blue-400 flex justify-center">
      <NavigationMenu className="max-w-[1420px] items-center justify-between">
        <NavigationMenuLink href="#">
          <img src="./logo.svg" alt="Logo do pet-shop Oh My Dog" />
        </NavigationMenuLink>

        <NavigationMenuList className="flex gap-8">

          <NavigationMenuItem>
            <NavigationMenuLink href="#">
              Serviços
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="#">
              Agendamento
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="#">
              Doações
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="#">
              Sobre nós
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="#">
              Contato
            </NavigationMenuLink>
          </NavigationMenuItem>

        </NavigationMenuList>

        <NavigationMenuItem className="list-none relative">
          <NavigationMenuTrigger className="bg-transparent p-0 w-fit">
            <Avatar className="mr-3 h-8 w-8">
              <AvatarImage src='src/assets/Bianca.jpg'/>
              <AvatarFallback>{userAbbreviation}</AvatarFallback>
            </Avatar>
            Olá, {userFirstName}
          </NavigationMenuTrigger>
          
          <NavigationMenuContent className="p-4 ">
            <ul className="flex flex-col gap-3 w-40">
              <NavigationMenuLink href="#">Link</NavigationMenuLink>
              <NavigationMenuLink href="#">Link</NavigationMenuLink>
              <NavigationMenuLink href="#">Link</NavigationMenuLink>
              <NavigationMenuLink href="#">Link</NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenu>
    </header>
  )
}