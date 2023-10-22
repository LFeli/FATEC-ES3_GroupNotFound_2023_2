import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { NavigationMenu, NavigationMenuLink, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { BsFillHouseFill, BsFillPersonFill, BsGiftFill, BsBoxArrowRight, BsInstagram, BsArrowUp, BsFacebook, BsTiktok, BsArrowLeft } from "react-icons/bs";
import { FaPaw } from "react-icons/fa";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const pessoalDataFormSchema = z.object({
  name: z.string(),
  cpf: z.string(),
  birthday: z.string(),
  address: z.string(),
  city:  z.string(),
  state: z.string(),
  district: z.string(),
  number: z.string(),
  publicPlace: z.string(),
  cep: z.string(),
})


export function UserPerfil() {
  const userName = 'Bianca Carvalho';
  const userCPF = "111.222.333-01";
  const userBirthday = "15/04/1999";
  const userAddress = "Av. Eng. Carlos Reinaldo Mendes";
  const userCity = "Sorocaba";
  const userState = "SP";
  const userDistrict = "Além Ponte";
  const userNumber = "2015";
  const userPublicPlace = "Em cima do clube de campo";
  const userCEP = "18013-280";

  // Name formats
  const userFirstName = userName.split(' ')[0];
  const userAbbreviation = userName
  .split(' ')
  .slice(0, 2)
  .map(nome => nome.charAt(0))
  .join('');


  //form settings
  const formPesoalData = useForm<z.infer<typeof pessoalDataFormSchema>>({
    resolver: zodResolver(pessoalDataFormSchema),
    defaultValues: {
      name: userName,
      cpf: userCPF,
      birthday: userBirthday,
      address: userAddress,
      city: userCity,
      state: userState,
      district: userDistrict,
      number: userNumber,
      publicPlace: userPublicPlace,
      cep: userCEP,
    }
  })

  const[output, setOutput] = useState('')


  function onSubmit(values: z.infer<typeof pessoalDataFormSchema>) {
    setOutput(JSON.stringify(values, null, 2))
  }

  return (
    <>
      <header  className={`w-full h-20 fixed z-50 transition-colors duration-150 bg-blue-300`}>
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
                  <Button variant={"ghost"} className="w-full flex items-center justify-start gap-4 hover:bg-blue-300/25">
                    <BsFillHouseFill className="w-4 h-4" />
                    Home
                  </Button>
                </NavigationMenuLink>
                
                <NavigationMenuLink href="#">
                  <Button variant={"ghost"} className="w-full flex items-center justify-start gap-4 hover:bg-blue-300/25">
                    <BsFillPersonFill className="w-4 h-4" />
                    Meu perfil
                  </Button>
                </NavigationMenuLink>

                <NavigationMenuLink href="#">
                  <Button variant={"ghost"} className="w-full flex items-center justify-start gap-4 hover:bg-blue-300/25">
                    <FaPaw className="w-4 h-4" />
                    Meus pets
                  </Button>
                </NavigationMenuLink>

                <NavigationMenuLink href="#">
                  <Button variant={"ghost"} className="w-full flex items-center justify-start gap-4 hover:bg-blue-300/25">
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

      <main className="py-20 bg-[#F2F2F2]" id="initial">
        <div className="w-full max-w-[1240px] mx-auto">

          {/* Back button */}
          <div className="py-10">
            <a href="#">
              <Button variant={"ghost"} className="flex items-center gap-5 py-5 hover:bg-blue-400/25">
                <BsArrowLeft />
                Voltar
              </Button>
            </a>
          </div>

          {/* Texts */}
          <div className="space-y-4">
            <h1 className="text-6xl font-medium leading-tight">Olá, Bianca seja bem-vindo(a) ao seu perfil.</h1>
            <p className="text-xl leading-relaxed">Você tem o controle total das informações da sua conta. </p>
          </div>

          {/* Pessoal datas form */}
          <section className="max-w-xl mx-auto pt-20">
            <h2 className="text-3xl font-medium leading-tight">Dados Pessoais</h2>

            <Form {...formPesoalData}>
              <form onSubmit={formPesoalData.handleSubmit(onSubmit)} className="space-y-10 pt-6">

                {/* User name field  */}
                <FormField
                  control={formPesoalData.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={userName} {...field} 
                          className="py-6 rounded-lg border-2 border-zinc-400 hover:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* User CPF field  */}
                <FormField
                  control={formPesoalData.control}
                  name="cpf"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CPF</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={userCPF} {...field} 
                          className="py-6 rounded-lg border-2 border-zinc-400 hover:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* User birthday field  */}
                <FormField
                  control={formPesoalData.control}
                  name="birthday"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Data de nascimento</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={userBirthday} {...field} 
                          className="py-6 rounded-lg border-2 border-zinc-400 hover:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* User birthday field  */}
                <FormField
                  control={formPesoalData.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Endereço</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={userAddress} {...field} 
                          className="py-6 rounded-lg border-2 border-zinc-400 hover:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Two columns fields */}
                <div className="space-y-10 flex flex-col">

                  <div className="flex gap-6">
                    {/* User city field  */}
                    <FormField
                      control={formPesoalData.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Cidade</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={userCity} {...field} 
                              className="py-6 rounded-lg border-2 border-zinc-400 hover:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* User state field  */}
                    <FormField
                      control={formPesoalData.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem className="max-w-[200px] w-full">
                          <FormLabel>Estado</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={userState} {...field} 
                              className="py-6 rounded-lg border-2 border-zinc-400 hover:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex gap-6">
                    {/* User district field  */}
                    <FormField
                      control={formPesoalData.control}
                      name="district"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Bairro</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={userDistrict} {...field} 
                              className="py-6 rounded-lg border-2 border-zinc-400 hover:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* User number field  */}
                    <FormField
                      control={formPesoalData.control}
                      name="number"
                      render={({ field }) => (
                        <FormItem className="max-w-[200px] w-full">
                          <FormLabel>Numero</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={userNumber} {...field} 
                              className="py-6 rounded-lg border-2 border-zinc-400 hover:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex gap-6">
                    {/* User public place (logadouro) field  */}
                    <FormField
                      control={formPesoalData.control}
                      name="publicPlace"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Logadouro</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={userPublicPlace} {...field} 
                              className="py-6 rounded-lg border-2 border-zinc-400 hover:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* User public place (logadouro) field  */}
                    <FormField
                      control={formPesoalData.control}
                      name="cep"
                      render={({ field }) => (
                        <FormItem className="max-w-[200px] w-full">
                          <FormLabel>Logadouro</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={userCEP} {...field} 
                              className="py-6 rounded-lg border-2 border-zinc-400 hover:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                </div>

                <Button type="submit" className="w-full bg-blue-500 py-6 hover:bg-blue-700">Salvar</Button>
              </form>

              <pre>{output}</pre>
            </Form>
          </section>

        </div>
      </main>

      <footer className="bg-blue-400 text-white py-10 text-xl">
        <div className="w-full max-w-[1240px] mx-auto flex items-center justify-between">
          {/* Copyright */}
          <div className="flex flex-col gap-2">
            <span>@2023 Oh my dog</span>
            <span>Todos os direitos reservados</span>
          </div>

          {/* social medias */}
          <div className="flex">
            <div className="flex gap-4 mr-10">
                <Button variant={"ghost"} className="py-6 hover:bg-blue-700 hover:text-white">
                  <BsInstagram className="w-4 h-4"/>
                </Button>

                <Button variant={"ghost"} className="py-6 hover:bg-blue-700 hover:text-white">
                  <BsTiktok className="w-4 h-4"/>
                </Button>

                <Button variant={"ghost"} className="py-6 hover:bg-blue-700 hover:text-white">
                  <BsFacebook className="w-4 h-4"/>
                </Button>
            </div>

            {/* Back to top */}
            <a href="#initial">
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