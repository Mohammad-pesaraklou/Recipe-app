import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes , Route } from 'react-router-dom';
//components
import Home from './components/Home';
import Cuisine from './components/Cuisine';
import Searched from './components/Searched';
import Recipe from './components/Recipe';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/cuisine/:id' element={<Cuisine />}/>
      <Route path='/searched/:search' element={<Searched />}/>
      <Route path='/recipe/:name' element={<Recipe />}/>
    </Routes>
  );
}




export default App;
