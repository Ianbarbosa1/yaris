import imagem from "../imagens/chamada.jpg";

export function Chamada() {
  let hora = new Date().getHours();
  let numero = "https://wa.me/5521982871429?text=";
  let comprimento = "Gostaria+de+fazer+uma+aula+experimental";
  let time = "";
  function Hora() {
    if (hora >= 0 && hora <= 13) {
      time = "Bom+dia,";
    } else if (hora >= 14 && hora <= 18) {
      time = "Boa+tarde,";
    } else if (hora >= 18 && hora <= 23) {
      time = "Boa+noite,";
    }
    return time;
  }

  time = Hora();
  let mensagem = `${numero}+${time}+${comprimento}`;

  return (
    <>
      <section className="chamada">
        <div className="chamada-texto">
          <h1 className="chamada-titulo">Transforme Sua Vida Hoje</h1>
          <div className="detalhe"></div>
          <p> Na Yaris, oferecemos tratamento de Fisioterapia Especializada, RPG, Pilates, Auriculoterapia, Acupuntura, Dry Needling, Ventosa terapia, Drenagem Linfática, Massagem Modeladora, Liberação Miofascial, Massagem Relaxante, Reflexologia Podal, entre outros. Nossos profissionais dedicados estão prontos para ajudá-lo a alcançar seus objetivos de saúde e bem-estar. Experimente a diferença de um atendimento personalizado e eficaz. Faça uma aula experimental.</p>
          <a href={mensagem}>Contato</a>
        </div>

        <img src={imagem} alt="fisioterapia" />
      </section>
    </>
  );
}
