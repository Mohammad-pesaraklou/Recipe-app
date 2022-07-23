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
      <Route path='/cuisine/:id' element={<Cuisine />}/>
    </Routes>
  );
}

export default App;
