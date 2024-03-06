import axios from 'axios';
import React, { useState } from 'react';
import Endereco from './components/Endereco';

type ViaCep = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

function App() {
  const [endereco, setEndereco] = useState({} as ViaCep);

  const searchCep = async (cep: string) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setEndereco(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cep = (event.target as HTMLFormElement).cep.value;
    searchCep(cep);
  }

  return (
    <>
      <header className="bg-zinc-900 p-4">
        <h1 className="font-semibold text-5xl">ViaCep</h1>
      </header>
      <main className="flex flex-wrap gap-6 justify-center items-center h-screen">
        <div className="container bg-zinc-900 max-w-fit p-4 rounded-lg">
          <h2 className="font-semibold text-2xl">Buscar CEP</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="cep" className="text-lg">CEP</label>
              <input type="text" id="cep" className="p-2 rounded-md bg-gray-200 text-black font-semibold text-lg border-zinc-500" />
            </div>
            <button type="submit" className="bg-blue-700 hover:bg-blue-800 transition-colors rounded-md p-2 mt-4">Buscar</button>
          </form>
        </div>
        {endereco.cep &&
          <Endereco>
            {JSON.stringify(endereco, null, 2)}
          </Endereco>
        }
      </main>
    </>
  )
}

export default App

