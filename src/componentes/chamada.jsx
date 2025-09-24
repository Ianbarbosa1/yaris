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
          <nav className="listagem">
            <ul> <span>Na Yaris, oferecemos tratamento de</span> 
              <li>Fisioterapia Especializada</li>
              <li>RPG</li>
              <li>Pilates</li>
              <li>Auriculoterapia</li>
              <li>Acupuntura</li>
              <li>Dry Needing</li>
            </ul>
            <ul> <span>:</span>
              <li>Ventosa Terapia</li>
              <li>Drenagem Linfática</li>
              <li>Massagem Modeladora</li>
              <li>Liberação Miofascial</li>
              <li>Massagem Relaxante</li>
              <li>Reflexologia Podal</li>
            </ul>
          </nav>
          <p>Nossos profissionais dedicados estão prontos para ajudá-lo a alcançar seus objetivos de saúde e bem-estar. Experimente a diferença de um atendimento personalizado e eficaz. Faça uma aula experimental.</p>
          <a href={mensagem}>Contato</a>
        </div>

        <img src={imagem} alt="fisioterapia" />
      </section>
    </>
  );
}
