import Glowna from "./glowna/glowna.jsx";

function Body({ active }) {
  return (
    <div>
      {active === "glowna" && <Glowna/>}
      {active === "oferta" && <p>Oto nasza oferta.</p>}
      {active === "galeria" && <p>Galeria zdjęć.</p>}
      {active === "kontakt" && <p>Formularz kontaktowy.</p>}
      {!active && <Glowna/>}
    </div>
  );
}

export default Body;
