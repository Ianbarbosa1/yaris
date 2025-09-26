import logo from "../imagens/logo-yaris.jpg";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export function Header() {
  let hora = new Date().getHours();
  let numero = "https://wa.me/5521982871429?text=";
  let comprimento = "Gostaria+de+saber+mais+como+funciona+para+eu+ser+atendida+na+clínica+yaris";
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
      <nav className="menu" id="header">
        <img src={logo} alt="yaris" className="logo" />

        <a href={mensagem} className="fale">Fale Conosco</a>
      </nav>

      <section className="titulos-header">
        <h1>Pilates Especializado em Itaboraí</h1>
        <p>Clínica especializada em Fisioterapia, Pilates, RPG, Acupuntura, Ventosaterapia, entre outros. Transformando o seu bem estar.</p>
        <a href={mensagem}>Agende Uma Aula</a>
      </section>

      <nav className="estrutura-redes">
        <div className="redes">
          <a href="https://www.instagram.com/yarisfisio/">
            <FaInstagram title="Instagram" />
          </a>
    
          <a href="https://www.facebook.com/yarisfisio">
            <FaFacebook title="Facebook" />
          </a>
    
          <a href="https://wa.me/5521982871429">
            <FaWhatsapp title="WhatsApp" />
          </a>
        </div>
      </nav>
    </>
  );
}
