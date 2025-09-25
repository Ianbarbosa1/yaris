import { Feed } from "./fragmentos/feed";
import Marquee from "react-fast-marquee"

export function Feedbacks() {
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
      <section className="feedbacks">
        <h1>Resultados Comprovados Pelos Nossos Pacientes</h1>

        <Marquee pauseOnHover speed={20} className="feedback-interno">
          <Feed
            texto="Excelente profissional e equipe atenciosa demais. Venha conhecer e não se arrependerá 😍👏👏"
            nome="Vera Lucia"
          />
          <Feed
            texto="Atendimento nota 10, profissionais super maravilhosos. Eu amei conhecer esse lugar, não saio mais ❤️"
            nome="Tainá Nogueira"
          />

          <Feed
            texto="Excelentes profissionais e atendimento excepcional."
            nome="Marcos Alcântara"
          />

          <Feed
            texto="Espaço muito bom, o atendimento ótimo. Recepcionista, estagiárias e fisioterapeutas sensacionais! Recomendo muito!!"
            nome="Jennifer Pinheiro"
          />

          <Feed
            texto="Excelentes profissionais com muita experiência, paciência e profissionalismo."
            nome="Mário Cormack"
          />
        </Marquee>

        <a href={mensagem}>Agendar Aula Experimental</a>
      </section>
    </>
  );
}
