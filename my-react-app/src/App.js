import Header from"./header/Header"
import { AboutUs } from "./sections/aboutUs/AboutUs";
import HomePage from "./sections/homepage/HomePage";
import { Pricing } from "./sections/Pricing/Pricing";
import { Skills } from "./sections/skills/Skills";

function App() {
  return (
    <div className="wrapper">
     <Header/>
     <main>
      <HomePage/>
      <Skills/>
      <AboutUs/>
      <Pricing/>
     </main>
    </div>
  );
}

export default App;
