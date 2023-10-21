import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Cookies from 'js-cookie';
import params from "../params.json";

const formSchema = z.object({
  email: z.string().nonempty({
    message: 'O campo E-mail e obrigatório'  
  }).email({
    message: 'Formato do E-mail inválido'
  }),

  password: z.string().nonempty({
    message: 'O campo Senha e obrigatório'
  }).min(6, {
    message: 'O campo Senha precisa de no mínimo 6 caracteres'
  }),
})

export function Login() {

  useEffect(() => {
    Cookies.remove('codCliente');
  }, []);

  const[output, setOutput] = useState('')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })
  
  const onSubmit = async (data: any) => {
    try {

      const requestBody = {
        email: data.email,
        senha: data.password
      };

      const response = await fetch(params.APIRoutePrefix + 'Clientes/LoginCliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });
  
      if (response.ok) {
        const data = await response.json();
  
        Cookies.set('codCliente', data.codCliente, { expires: 1 });
        window.location.href = "/";

      } else {
        alert(response.status);
      }
    } catch (error) {
      console.log('Erro ao buscar endereço:', error);
    }
  }

  return (
    <>
  
      <header>
        <Button variant={"ghost"} className="absolute z-10 right-8 top-8 hover:bg-transparent  px-6 py-8">
          <a href="#" className="">
            <img src="logo.svg" alt="" />
          </a>
        </Button>
      </header>


        {/* Grid box */}
      <div className="grid grid-cols-2 h-screen w-full bg-[#F2F2F2]">
      
        {/* left side */}
        <div className='flex flex-col items-center justify-center overflow-y-auto w-full'>
          <main className='max-w-[480px] w-full grid gap-12'>
            {/* Texts */}
            <div className="space-y-5">
              <h1 className="text-3xl font-semibold">Faça login para continuar</h1>
              <p className="font-medium">Sua jornada com seu pet começa aqui.</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">

                {/* email field  */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="seuemail@email.com" {...field} 
                          className="py-6 rounded-lg border-2 border-zinc-400 hover:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* password field  */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Sua senha..." {...field} 
                          className="py-6 rounded-lg border-2 border-zinc-400 hover:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-blue-500 py-6 hover:bg-blue-700">Submit</Button>
              </form>
            </Form>

            <span className="font-medium mx-auto">
              Não tem uma conta?  
              <a href="#" className="font-bold text-blue-500 transition-colors hover:text-blue-700 hover:underline"> Inscreva-se </a>
            </span>

            <pre>{output}</pre>
          </main>

          <footer className='flex items-center justify-center'>
            <span className='text-sm absolute bottom-4'>Oh my dog 2023</span>
          </footer>
        </div>

        {/* Right side */}
        <div>
          <img src="src/assets/animals/login.jpg" alt="" className="h-screen w-full object-cover"/>
        </div>
      </div>
    </>
  )
}