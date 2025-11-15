import "./header.css"
import png from "./tuff1.png"

function Header({ active, setActive }) {
  const handleClick = (name) => {
    setActive(active === name ? null : name);
  };

  return (

<>
    
    <div id="linia">
        
    <div id="line">
        <img id="tuff" src={png} alt="Tuff PNG" />
      <button onClick={() => handleClick("glowna")} className={active === "glowna" ? "active" : ""}>
        Strona główna
      </button>
      <button onClick={() => handleClick("oferta")} className={active === "oferta" ? "active" : ""}>
        Oferta
      </button>
      <button onClick={() => handleClick("galeria")} className={active === "galeria" ? "active" : ""}>
        Galeria
      </button>
      <button onClick={() => handleClick("kontakt")} className={active === "kontakt" ? "active" : ""}>
        Kontakt
      </button>
    </div>
    </div>
    </>
  );
}

export default Header;
