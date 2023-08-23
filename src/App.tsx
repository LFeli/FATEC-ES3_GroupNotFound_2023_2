import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { BsFacebook, BsGoogle } from 'react-icons/bs'

export function App() {
  const { register, handleSubmit, setValue } = useForm();
  const[output, setOutput] = useState('')
  const [address, setAddress] = useState({});
  
  const fetchAddress = async (cep) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      setAddress(data);
      
      // Preencha automaticamente os campos do formulário com os dados retornados da API
      setValue('logradouro', data.logradouro);
      setValue('bairro', data.bairro);
      setValue('cidade', data.localidade);
      setValue('estado', data.uf);
    } catch (error) {
      console.error('Erro ao buscar endereço:', error);
    }
  };

  const onSubmit = (data) => {
    // console.log('Dados do formulário:', data);
    setOutput(JSON.stringify(data, null, 2))

  };

  return (
    <div className="grid grid-cols-2 h-screen w-full font-raleway">
      {/* Left  side*/}
      <div className='flex flex-col items-center justify-center overflow-y-auto'>
        <h1 className="font-bold text-3xl text-zinc-950 mb-4">Seja bem vindo!</h1>
        <span className="text-xl">Faça o login e acesse todo o nosso conteúdo.</span>

        <div className='mt-16 flex flex-col gap-10'>
          <button className='flex items-center justify-center gap-8 py-5 px-28 border border-[#BCBCBC] rounded-2xl text-[#212121] font-semibold hover:bg-[#7092BF] hover:text-[#F2F2F2] hover:border-[#7092BF] transition-colors'>
            <BsGoogle />

            Entrar usando a conta do Google
          </button>

          <button className='flex items-center justify-center gap-8 py-5 px-28 border border-[#BCBCBC] rounded-2xl text-[#212121] font-semibold hover:bg-[#7092BF] hover:text-[#F2F2F2] hover:border-[#7092BF] transition-colors'>
            <BsFacebook />

            Entrar usando a conta do Facebook
          </button>
        </div>


        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>CEP:</label>
          <input
            {...register('cep')}
            type="text"
            onChange={(e) => {
              const cep = e.target.value.replace(/\D/g, '');
              if (cep.length === 8) {
                fetchAddress(cep);
              }
            }}
          />
        </div>
        <div>
          <label>Logradouro:</label>
          <input {...register('logradouro')} type="text" />
        </div>
        <div>
          <label>Bairro:</label>
          <input {...register('bairro')} type="text" />
        </div>
        <div>
          <label>Cidade:</label>
          <input {...register('cidade')} type="text" />
        </div>
        <div>
          <label>Estado:</label>
          <input {...register('estado')} type="text" />
        </div>
        <button type="submit">Enviar</button>
      </form>

      <pre>{output}</pre>
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