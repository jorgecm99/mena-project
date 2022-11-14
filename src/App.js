import './App.css';
import Footer from './Componentes/Footer/Footer';
import Header from './Componentes/Header/Header';
import Landing from './Componentes/Landing/Landing';
import BiciRegistro from './Componentes/Landing/BiciRegistro';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <BiciRegistro/>
      <Footer />
    </div>
  );
}

export default App;
