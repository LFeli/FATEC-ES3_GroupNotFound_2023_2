import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsArrowLeft, BsArrowUp, BsBoxArrowRight, BsFacebook, BsFillHouseFill, BsFillPersonFill, BsGiftFill, BsInstagram, BsTiktok } from "react-icons/bs";
import { FaPaw } from "react-icons/fa";
import { z } from "zod";

const formSchema = z.object({
  name: z.string(),
  typeAnimal: z.string(),
  weight: z.string(),
  humor: z.string(),
  color: z.string(),
  sex: z.string(),
  specialCare: z.string(),
  gelded: z.boolean().optional(),
})


export function PetPerfil(){
  const petName = "Caramelo"
  const petSpecie = "Cachorro"
  const petWeight = "12"
  const petHumor = "Calmo"
  const petColor = "Marrom"
  const petSex = "Macho"
  const petSpecialCare = ""
  const petGelded = true

  const userName = 'Bianca Carvalho';
  const userFirstName = userName.split(' ')[0];
  const userAbbreviation = userName
  .split(' ')
  .slice(0, 2)
  .map(nome => nome.charAt(0))
  .join('');

  const[output, setOutput] = useState('')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: petName,
      typeAnimal: petSpecie,
      weight: petWeight,
      humor: petHumor,
      color: petColor,
      sex: petSex,
      specialCare: petSpecialCare,
      gelded: petGelded,
    }
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    setOutput(JSON.stringify(values, null, 2))
  }

  return(
    <>
      <header
      className={`w-full h-20 fixed z-50 transition-colors duration-150 bg-[#7092BF]`}
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

      <main className="py-20 bg-[#F2F2F2]" id="home">
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
          <h1 className="text-6xl font-medium leading-tight">Perfil do {petName}</h1>
          <p className="text-xl leading-relaxed">Todas as informações sobre o {petName}.</p>
          </div>

          {/* Form section */}
          <section className="max-w-xl mx-auto pt-20">
            <h2 className="text-3xl font-medium leading-tight">Dados do pet</h2>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 pt-6">

                {/* Pet name field  */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome do pet</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={petName} {...field} 
                          className="py-6 rounded-lg border-2 border-zinc-400 hover:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* type of animal field  */}
                <FormField
                  control={form.control}
                  name="typeAnimal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Espécie do pet</FormLabel>

                      <Select onValueChange={field.onChange} defaultValue={field.value}>

                        <FormControl>
                          <SelectTrigger className="py-6 rounded-lg border-2 border-zinc-400 hover:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500">
                            <SelectValue placeholder={petSpecie} />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectItem value="Cachorro">Cachorro</SelectItem>
                          <SelectItem value="Gato">Gato</SelectItem>
                          <SelectItem value="Peixe">Peixe</SelectItem>
                          <SelectItem value="Pássaro">Pássaro</SelectItem>
                          <SelectItem value="Roedor">Roedor</SelectItem>
                          <SelectItem value="Coelho">Coelho</SelectItem>
                          <SelectItem value="Furão">Furão</SelectItem>
                        </SelectContent>

                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Weight of animal field */}
                <FormField
                  control={form.control}
                  name="weight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Peso (Em KG)</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={petWeight} {...field} 
                          className="py-6 rounded-lg border-2 border-zinc-400 hover:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Humor of pet field */}
                <FormField
                  control={form.control}
                  name="humor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Temperamento</FormLabel>

                      <Select onValueChange={field.onChange} defaultValue={field.value}>

                        <FormControl>
                          <SelectTrigger className="py-6 rounded-lg border-2 border-zinc-400 hover:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500">
                            <SelectValue placeholder={petHumor} />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectItem value="Calmo">Calmo</SelectItem>
                          <SelectItem value="Ativo">Ativo</SelectItem>
                          <SelectItem value="Amigável">Amigável</SelectItem>
                          <SelectItem value="Tímido">Tímido</SelectItem>
                          <SelectItem value="Agressivo">Agressivo</SelectItem>
                          <SelectItem value="Brincalhão">Brincalhão</SelectItem>
                          <SelectItem value="Independente">Independente</SelectItem>
                          <SelectItem value="Carinhoso">Carinhoso</SelectItem>
                          <SelectItem value="Sociável">Sociável</SelectItem>
                          <SelectItem value="Ansioso">Ansioso</SelectItem>
                          <SelectItem value="Tranquilo">Tranquilo</SelectItem>
                          <SelectItem value="Curioso">Curioso</SelectItem>
                        </SelectContent>

                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Wrapper two fields */}
                <div className="grid grid-cols-2 gap-7"> 

                  {/* Pet color field */}
                  <FormField
                    control={form.control}
                    name="color"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cor</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder={petColor} {...field} 
                            className="py-6 rounded-lg border-2 border-zinc-400 hover:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Pet sexs field */}
                  <FormField
                    control={form.control}
                    name="sex"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sexo</FormLabel>

                        <Select onValueChange={field.onChange} defaultValue={field.value}>

                          <FormControl>
                            <SelectTrigger className="py-6 rounded-lg border-2 border-zinc-400 hover:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500">
                              <SelectValue placeholder={petSex} />
                            </SelectTrigger>
                          </FormControl>

                          <SelectContent>
                            <SelectItem value="Macho">Macho</SelectItem>
                            <SelectItem value="Femea">Femeá</SelectItem>
                            <SelectItem value="Indefinido">Indefinido</SelectItem>
                          </SelectContent>

                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                </div>

                {/* Special care from pet fields */}
                <FormField
                  control={form.control}
                  name="specialCare"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Algum cuidado extra que precisamos ter? (Opcional) </FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Digite aqui os cuidados especiais que devemos ter com seu pet"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Gelded pet fields */}
                <FormField
                  control={form.control}
                  name="gelded"
                  render={({ field }) => (
                    <FormItem className="flex flex-row-reverse items-center justify-end gap-3 h-5 space-y-0">
                      <FormLabel className="">Seu pet e castrado? Se sim deixe essa opção marcada.</FormLabel>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-blue-500 py-6 hover:bg-blue-700">Salvar</Button>
              </form>
            </Form>

            <pre>{output}</pre>
          </section>

          <Separator className="my-20 bg-[#B4B2B0]"/>

          <section className="max-w-xl mx-auto space-y-8 text-red-900">
            <h2 className="text-3xl font-medium leading-tight">Área de risco</h2>
            <p className="font-medium">
              Uma vez que sua conta seja excluída, todos os seus dados e informações associadas a ela serão permanentemente removidos.
            </p>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant={"destructive"} className="w-full py-6 bg-red-500 hover:bg-red-700">Excluir o pet</Button>
              </AlertDialogTrigger>
                    
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Você tem certeza absoluta que deseja excluir esse pet?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Essa ação e irreversível e não poderá ser desfeita.
                  </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                  <AlertDialogCancel className="hover:bg-blue-400/25">Cancelar</AlertDialogCancel>
                  <AlertDialogAction className="bg-red-500 hover:bg-red-700">Excluir</AlertDialogAction>
                </AlertDialogFooter>

              </AlertDialogContent>
            </AlertDialog>
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