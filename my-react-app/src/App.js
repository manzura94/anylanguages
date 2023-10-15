import Header from"./header/Header"
import HomePage from "./sections/homepage/HomePage";

function App() {
  return (
    <div className="wrapper">
     <Header/>
     <main>
      <HomePage/>
     </main>
    </div>
  );
}

export default App;
