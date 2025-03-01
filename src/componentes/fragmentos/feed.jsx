import { MdStar } from "react-icons/md";

// eslint-disable-next-line react/prop-types
export function Feed({ texto, nome }) {
  return (
    <>
      <section className="feed">
        <p>{texto}</p>
        <span>{nome}</span>

        <div className="estrelas">
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStar />
        </div>
      </section>
    </>
  );
}
