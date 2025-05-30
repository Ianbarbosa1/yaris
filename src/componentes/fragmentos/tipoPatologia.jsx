import { FaArrowDown } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
export function TipoPatologia({ nome, one, two, three }) {
  return (
    <>
      <div className="patologia">
        <h2>{nome}</h2>
        <FaArrowDown className="seta" />
        <p>{one}</p>
        <p>{two}</p>
        <p>{three}</p>
      </div>
    </>
  );
}
