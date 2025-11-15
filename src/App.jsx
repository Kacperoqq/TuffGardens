import { useState } from "react";
import Header from "./assets/header/header.jsx";
import Body from "./assets/body/body.jsx";
import Footer from "./assets/footer/footer.jsx";
import "./app.css";
function App() {
  const [active, setActive] = useState(null); 

  return (
    <div>
      <Header active={active} setActive={setActive} />
      <Body active={active} />
      <Footer/>
    </div>
  );
}

export default App;