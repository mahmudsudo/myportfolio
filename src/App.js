
import Header from "./components/Header";
import Showcase  from "./components/Showcase";
import About from "./components/About"

function App() {
  let date = new Date();
  console.log(date.getHours());
  return (
    <section className="App">
     <Header/>
     <Showcase className="showcase"/>
     <About />
    </section>
  );
  
}

export default App;
