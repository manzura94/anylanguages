import Header from"./header/Header"
import HomePage from "./sections/homepage/HomePage";
import { Skills } from "./sections/skills/Skills";

function App() {
  return (
    <div className="wrapper">
     <Header/>
     <main>
      <HomePage/>
      <Skills/>
     </main>
    </div>
  );
}

export default App;
