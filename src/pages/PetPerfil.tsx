import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { useState, useEffect } from "react";
import { BsArrowUp, BsBoxArrowRight, BsFacebook, BsFillHouseFill, BsFillPersonFill, BsGiftFill, BsInstagram, BsTiktok } from "react-icons/bs";
import { FaPaw } from "react-icons/fa";

export function PetPerfil(){
  const userName = 'Bianca Carvalho';
  const userFirstName = userName.split(' ')[0];
  const userAbbreviation = userName
  .split(' ')
  .slice(0, 2)
  .map(nome => nome.charAt(0))
  .join('');
  
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <>
      <header
      data-scrolled={scrolled}
      className={`w-full h-20 fixed z-50 transition-colors duration-150 bg-[#7092BF] data-[scrolled="true"]:border-b-2 border-white`}
    >
      <NavigationMenu className="h-full w-full max-w-[1240px] flex items-center justify-between mx-auto">
        <NavigationMenuLink href="#">
          <img src="./logo.svg" alt="Logo do pet-shop Oh My Dog" />
        </NavigationMenuLink>

        <NavigationMenuList className="flex gap-5">

          <NavigationMenuItem>
            <NavigationMenuLink href="#">
              <Button variant={"ghost"} className="text-white">
                Serviços
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="#">
              <Button variant={"ghost"} className="text-white">
                Agendamento
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="#">
              <Button variant={"ghost"} className="text-white">
                Doações
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="#">
              <Button variant={"ghost"} className="text-white">
                Sobre nós
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="#">
              <Button variant={"ghost"} className="text-white">
                Contato
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>

        </NavigationMenuList>

        <NavigationMenuItem className="list-none relative">
          <NavigationMenuTrigger className="bg-transparent px-2 w-fit text-white">
            <Avatar className="mr-3 h-8 w-8">
              <AvatarImage src='src/assets/Bianca.jpg'/>
              <AvatarFallback>{userAbbreviation}</AvatarFallback>
            </Avatar>
            Olá, {userFirstName}
          </NavigationMenuTrigger>
          
          <NavigationMenuContent className="p-4 ">
            <ul className="flex flex-col gap-3 w-48">

              <NavigationMenuLink href="#">
                <Button variant={"ghost"} className="w-full flex items-center justify-start gap-4 hover:bg-[#7092BF]/25">
                  <BsFillHouseFill className="w-4 h-4" />
                  Home
                </Button>
              </NavigationMenuLink>
              
              <NavigationMenuLink href="#">
                <Button variant={"ghost"} className="w-full flex items-center justify-start gap-4 hover:bg-[#7092BF]/25">
                  <BsFillPersonFill className="w-4 h-4" />
                  Meu perfil
                </Button>
              </NavigationMenuLink>

              <NavigationMenuLink href="#">
                <Button variant={"ghost"} className="w-full flex items-center justify-start gap-4 hover:bg-[#7092BF]/25">
                  <FaPaw className="w-4 h-4" />
                  Meus pets
                </Button>
              </NavigationMenuLink>

              <NavigationMenuLink href="#">
                <Button variant={"ghost"} className="w-full flex items-center justify-start gap-4 hover:bg-[#7092BF]/25">
                  <BsGiftFill className="w-4 h-4" />
                  Minhas doações
                </Button>
              </NavigationMenuLink>

              <NavigationMenuLink href="#">
                <Button variant={"ghost"} className="w-full flex items-center justify-start gap-4 text-red-600 hover:bg-red-600/10 hover:text-red-600 focus:bg-red-600/10">
                  <BsBoxArrowRight className="w-4 h-4" />
                  Sair
                </Button>
              </NavigationMenuLink>
              
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenu>
      </header>

      <main className="pt-20 bg-[#F2F2F2]" id="home">
        Conteúdo da main
      </main>

      <footer className="bg-[#7092BF] text-white py-20 text-xl">
        <div className="w-full max-w-[1240px] mx-auto flex items-center justify-between">
          {/* Copyright */}
          <div className="flex flex-col gap-2">
            <span>@2023 Oh my dog</span>
            <span>Todos os direitos reservados</span>
          </div>

          {/* social medias */}
          <div className="flex">
            <div className="flex gap-4 mr-10">
                <Button variant={"ghost"} className="py-6 hover:bg-[#435873] hover:text-white">
                  <BsInstagram className="w-4 h-4"/>
                </Button>

                <Button variant={"ghost"} className="py-6 hover:bg-[#435873] hover:text-white">
                  <BsTiktok className="w-4 h-4"/>
                </Button>

                <Button variant={"ghost"} className="py-6 hover:bg-[#435873] hover:text-white">
                  <BsFacebook className="w-4 h-4"/>
                </Button>
            </div>

            {/* Back to top */}
            <a href="#home">
              <Button variant={"ghost"} className="py-6 hover:bg-[#435873] hover:text-white">
                <BsArrowUp className="w-4 h-4"/>
              </Button>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}