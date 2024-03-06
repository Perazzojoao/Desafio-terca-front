type EnderecoProps = {
  children: React.ReactNode;
}

const Endereco = ({ children }: EnderecoProps) => {
  return (
    <section className='bg-zinc-900 max-w-fit p-4 rounded-lg'>
      <h2 className="font-semibold text-2xl">Endereço</h2>
      <div>
        <pre>{children}</pre>
      </div>
    </section>
  );
}

export default Endereco;