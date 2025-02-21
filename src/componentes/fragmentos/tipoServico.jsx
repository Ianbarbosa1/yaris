// eslint-disable-next-line react/prop-types
export function TipoServico({ imagem, nome, descricao }) {
  return (
    <>
      <section className="servico">
        <img src={imagem} alt={nome} />
        <h2>{nome}</h2>
        <p>{descricao}</p>
      </section>
    </>
  );
}
