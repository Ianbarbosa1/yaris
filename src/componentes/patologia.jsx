import { TipoPatologia } from "./fragmentos/tipoPatologia";

export function Patologias() {
  return (
    <>
      <section className="patologias">
        <nav>
          <h1>Soluções de Principais Patologias</h1>
          <div className="detalhe"></div>
        </nav>

        <section className="patologias-interno">
          <TipoPatologia
            nome="Fisioterapia"
            one="Lesões Musculoesqueléticas"
            two="Distúrbios Neurológicos"
            three="Doenças Respiratórias"
          />

          <TipoPatologia
            nome="Pilates"
            one="Tendinite"
            two="Artrose"
            three="Bursite"
          />

          <TipoPatologia
            nome="RPG"
            one="Pés planos/cavos"
            two="Escoliose"
            three="Asma/Bronquite"
          />

          <TipoPatologia
            nome="Acupuntura"
            one="Dores fisicas"
            two="Dores Emocionais"
            three="Distúrbios do sono"
          />

          <TipoPatologia
            nome="Ventosa"
            one="Dores"
            two="Inflamação"
            three="Má circulação"
          />
        </section>
      </section>
    </>
  );
}
