import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import { BrowserRouter} from 'react-router-dom';
import About from './Components/About/About';
import Team from './Components/Team/Team';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Header/>
          <Hero/>
          <About/>
          <Team/>
          <Services/>
          <Contact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
