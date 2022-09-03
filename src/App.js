import './App.css';
import { Provider } from "react-redux";

// import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes , Route } from 'react-router-dom';
//components
import Home from './components/Home';
import Cuisine from './components/Cuisine';
import Searched from './components/search-section/Searched';
import Recipe from './components/Recipe';
import Navbar from './components/Navbar';
import { createTheme , ThemeProvider} from '@mui/material/styles'
import ScrollToTop from './shared/ScrollToTop';
import Footer from './components/Footer'
//redux store
import store from './Redux/store';
import ShopFood from './components/ShopFood';

const theme = createTheme({
  palette: {
    primary: {
      main: '#cccccc'
    },
    secondary:{
      main: '#EEBC1D',
      light:'#EEBC1D'
    },
    textSecondary:{
      main:"#14161a"
    }
    
   
  }
})


function App() {
  return (
    <div style={{background: '#14161a', minHeight: '100vh'}}>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ScrollToTop />
            <Navbar />
    <Routes>
      <Route path='/cart' element={<ShopFood />}/>
      <Route path='/' element={<Home />}/>
      <Route path='/cuisine/:id' element={<Cuisine />}/>
      <Route path='/searched/:search' element={<Searched />}/>
      <Route path='/recipe/:name' element={<Recipe />}/>
    </Routes>
    </ThemeProvider>
    </Provider>
    </div>
  );
}




export default App;
