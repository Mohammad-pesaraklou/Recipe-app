import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes , Route } from 'react-router-dom';

//components
import Home from './components/Home';
import Cuisine from './components/Cuisine';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
  );
}

export default App;
