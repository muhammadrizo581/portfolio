import Hero from "./components/Hero/Hero";
import Header from "./components/header/Header";
import Services from "./components/Services/Services";
import Testimonia from "./components/Testimonia/Testimonia";
import Trusted from "./components/Trusted/Trusted";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Trusted />
      <Services />
      <Testimonia />
      <Footer/>
    </div>
  );
}

export default App;
