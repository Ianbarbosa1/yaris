// eslint-disable-next-line react/prop-types
export function TipoServico({ imagem, nome, descricao }) {
  return (
    <>
      <section className="servico">
        <img src={imagem} alt={nome} />
        <h1>{nome}</h1>
        <p>{descricao}</p>
      </section>
    </>
  );
}
