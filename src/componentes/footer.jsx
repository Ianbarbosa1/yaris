import logo from "../imagens/logo-yaris.jpg";

import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export function Footer() {
  return (
    <>
      <section className="empresa">
        <div className="estrutura">
          <a href="#header">
            <img src={logo} alt="yaris-logo" />
          </a>
          
          <p>Itaboraí, RJ - Brasil 2025</p>
        </div>

        <hr />

        <div className="estrutura">
          <p>Redes Socias</p>
          <div className="redes">
            <a href="https://www.instagram.com/yarisfisio/">
              <FaInstagram title="instagram" />
            </a>

            <a href="https://www.facebook.com/yarisfisio">
              <FaFacebook title="facebook" />
            </a>

            <a href="https://wa.me/5521982871429">
              <FaWhatsapp title="whatsApp" />
            </a>
          </div>
        </div>
    
        <nav>
          <h1>© Alguns dos Direitos Reservados</h1>
          <h2>Edifício Monet, na Rua Dr. Pereira dos Santos, nº 107, salas 305 e 311, Itaboraí, Rio de Janeiro.</h2>
        </nav>
        
        <a href="https://ianbarbosa1.github.io/Portfolio/" title="Acessar Portfólio">Ian barbosa</a>
      </section>
    </>
  );
}
