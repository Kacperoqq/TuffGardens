import { useState, useEffect } from "react";
import png1 from "./ogrod.jpg";
import png2 from "./ogrod2.jpg"; 
import png3 from "./ogrod3.jpg"; 
import "./glowna.css";

function Glowna() {
  const images = [png1, png2,png3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length); 
    }, 4700); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glowna-container">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="ogród"
          className={`slide ${index === current ? "active" : ""}`}
        />
      ))}
      <h1 className="overlay-text">Prace ogrodowe i przydomowe</h1>
    </div>
  );
}

export default Glowna;
