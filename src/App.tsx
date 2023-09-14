import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

const UserLoginSchema = z.object({
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

type UserLoginData = z.infer<typeof UserLoginSchema>

export function App() {
  const { register, handleSubmit, setValue } = useForm();
  const [output, setOutput] = useState('')

  const UserLoginForm = useForm<UserLoginData>({
    resolver: zodResolver(UserLoginSchema)
  })
  
  const {
    formState: { isSubmitting, errors }, 
  } = UserLoginForm;

  const onSubmit = async (data: any) => {
    try {
      const requestBody = {
        email: data.email,
        senha: data.password
      };
    
      const response = await fetch('https://localhost:7094/Clientes/LoginCliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });
  
      if (response.ok) {
        const data = await response.json();
  
        setValue('codCliente', data.codCliente);

      } else {
        console.error('Erro ao fazer a solicitação:', response.status);
      }
    } catch (error) {
      console.error('Erro ao buscar endereço:', error);
    }
  };

  return (
    <div className="grid grid-cols-2 h-screen w-full">
      
      <div className='flex flex-col items-center justify-center overflow-y-auto w-full'>
        <div className='max-w-[480px] w-full'>
          <h1 className="font-bold text-3xl text-zinc-950 mb-4">Seja bem vindo!</h1>
          <span className='text-base'>Faça o login e acesse todo o nosso conteúdo.</span>
        </div>

        {/* <div className='mt-16 flex flex-col gap-10'>
          <button className='flex items-center justify-center gap-8 py-5 px-28 border border-[#BCBCBC] rounded-2xl text-[#212121] font-semibold hover:bg-[#7092BF] hover:text-[#F2F2F2] hover:border-[#7092BF] transition-colors'>
            <BsGoogle />

            Entrar usando a conta do Google
          </button>

          <button className='flex items-center justify-center gap-8 py-5 px-28 border border-[#BCBCBC] rounded-2xl text-[#212121] font-semibold hover:bg-[#7092BF] hover:text-[#F2F2F2] hover:border-[#7092BF] transition-colors'>
            <BsFacebook />

            Entrar usando a conta do Facebook
          </button>
        </div> */}

        <FormProvider {...UserLoginForm}>
          <form 
            onSubmit={handleSubmit(onSubmit)}
            className='pt-8 max-w-[480px] w-full'
          >
          <div className='grid gap-8'>
              <div className='flex gap-3 flex-col'>
                <label htmlFor="email" className='text-lg font-medium'>E-mail</label>
                <input type="text" 
                  {...register('email')}
                  placeholder='Seu e-mail'
                  className='p-5 rounded-2xl border-2 border-[#B4B2B0] text-[#212121] font-semibold transition-all placeholder:text-[#776F67]/75 hover:border-[#7092BF] hover:bg-[#F2F2F2]/90 focus:shadow-input focus:outline-none focus:border-[#7092BF]'
                />
                {errors.email && <span className='text-red-500 text-sm font-medium'>{errors.email.message}</span> }
              </div>

              <div className='flex gap-3 flex-col'>
                <div className='flex items-center justify-between'>
                  <label htmlFor="password" className='text-lg font-medium'>Senha</label>

                  <a href="#" className='text-lg font-semibold text-[#546e8f] hover:text-[#273343] transition-colors hidden'>Esqueceu a senha?</a>
                </div>
                <input type="password" 
                  {...register('password')}
                  placeholder='Seu e-mail'
                  className='p-5 rounded-2xl border-2 border-[#B4B2B0] text-[#212121] font-semibold transition-all placeholder:text-[#776F67]/75 hover:border-[#7092BF] hover:bg-[#F2F2F2]/90 focus:shadow-input focus:outline-none focus:border-[#7092BF]'
                />
                {errors.password && <span className='text-red-500 text-sm font-medium'>{errors.password.message}</span> }
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className='h-16 w-full rounded-2xl bg-[#7092BF] font-semibold text-[#F2F2F2] mt-14 hover:bg-[#6583ac] focus:bg-[#6583ac] focus:outline-none transition-colors'
              >Login</button>
          </form>
        </FormProvider>

      <span className='text-[#212121] text-base text-center mt-10'>Não tem conta? <a href="#" className='font-semibold text-[#7092BF] hover:text-[#546e8f] hover:underline underline-offset-2  transition-colors'>Inscreva-se</a></span>
      
      <input {...register('codCliente')} type="text"></input>
      
      <pre>{output}</pre>

      <footer className='flex items-center justify-center'>
        <span className='text-sm absolute bottom-4'>Oh my dog 2023</span>
      </footer>
      </div>

      {/* Right side*/}
      <div>
        {/* Logo */}
        <img src="logo.svg" alt="" className="absolute z-10 right-8 top-8"/>

        {/* Image for right side */}
        <img src="doguito.jpg" alt="" className="h-screen w-full object-cover relative" />
      </div>
    </div>
  )
}