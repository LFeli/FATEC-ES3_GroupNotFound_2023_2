import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { useEffect, useState } from "react";


export function Home() {
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

  
  return (
    <>
      <header
      data-scrolled={scrolled}
      className={`w-full h-20 fixed z-20 transition-colors duration-150 bg-[#7092BF] data-[scrolled="true"]:border-b-2 border-white`}
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

      <main className="pt-20">
        {/* Hero */}
        <section className="relative">
          <div className="flex">
            <div className="flex items-center w-full justify-between max-w-[1240px] mx-auto z-10">
              {/* left side */}
              <div className="flex flex-col gap-8 w-full max-w-[475px] ">
                <h1 className="text-white text-6xl font-medium leading-tight">Todo carinho que o seu pet precisa</h1>
                <p className="text-[#F8F8F8] text-2xl leading-relaxed">Descubra o Oh My Dog, o petshop que oferece agendamentos de serviços como banho, tosa, spa e mais. Agende agora mesmo!</p>

                <Button variant={"outline"} className="w-full max-w-[240px] py-5 text-[#F8F8F8] rounded-full">
                  Veja mais
                </Button>
              </div>

              {/* right side */}
              <img src="./src/assets/home-hero.png" alt="" className="max-w-[600px]"/>
            </div>

            {/* background */}
            <div className="absolute top-0 left-0 h-[140%] w-full bg-[#7092BF]" />
          </div>
        </section>



          {/* Hero */}
          <section className="relative">
            <div className="flex pt-14">
              <div className="">
                {/* left side */}
                <div className="">

                </div>

                {/* right side */}
              </div>

            </div>

            <div className=""></div>
          </section>

      </main>
    </>
  )
}