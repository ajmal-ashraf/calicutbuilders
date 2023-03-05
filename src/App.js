import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import { BrowserRouter, Routes} from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Header/>
          <Hero/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
