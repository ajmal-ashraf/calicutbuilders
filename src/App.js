import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import { BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
          <Header/>
          <Hero/>
      </BrowserRouter>
    </div>
  );
}

export default App;
