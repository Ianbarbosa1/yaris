import { TipoServico } from "./fragmentos/tipoServico";

/*IMAGENS*/
import fisioterapia from "../imagens/fisioterapia.png";
import pilates from "../imagens/pilates.png";
import rpg from "../imagens/rpg.png";
import acumputura from "../imagens/acumputura.png";
import ventosa from "../imagens/ventosa.png";


export function Servicos() {
  return (
    <>  
      <section className="servicos">
        <nav>
          <h1>Principais Serviços</h1>
          <div className="detalhe"></div>
        </nav>
        <div className="servicos-interno">
          <TipoServico
            imagem={fisioterapia}
            nome="Fisioterapia"
            descricao="Envolve avaliação, aplicação de exercícios terapêuticos e técnicas para reabilitação e alívio de dores."
          />

          <TipoServico
            imagem={pilates}
            nome="Pilates"
            descricao="Combina exercícios de força, flexibilidade e respiração, focando no equilíbrio e no controle corporal."
          />

          <TipoServico
            imagem={rpg}
            nome="RPG"
            descricao="(Reeducação Postural Global) utiliza posturas e alongamentos para corrigir desequilíbrios posturais e aliviar dores."
          />

          <TipoServico
            imagem={acumputura}
            nome="Acupuntura"
            descricao="Aplica agulhas em pontos específicos do corpo para aliviar dores, equilibrar energia e promover bem-estar."
          />

          <TipoServico
            imagem={ventosa}
            nome="Ventosa"
            descricao="Utiliza copos de sucção na pele para melhorar a circulação, aliviar dores e relaxar músculos."
          />
        </div>
      </section>
    </>
  );
}
