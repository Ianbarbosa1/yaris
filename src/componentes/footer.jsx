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

        <h1>Alguns dos Direitos Reservados</h1>
        <p>Ian barbosa</p>
      </section>
    </>
  );
}
