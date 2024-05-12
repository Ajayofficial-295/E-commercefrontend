import './App.css';
import Home from './Components/Home';
import NavBarComp from './Components/NavBarComp';
import { Routes, Route } from 'react-router-dom';
import Products from './Components/Products';
import Product from './Components/Product';
import Notfound from './Components/Notfound';
import Register from './Components/Userauth/Ragister';
import Login from './Components/Userauth/Login';


function App() {
  return (
    <div className="App">
      <NavBarComp/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/products/:id' element={<Product />}></Route>
        <Route path='*' element={<Notfound />}></Route>
        <Route path='/register'element= {<Register></Register>}></Route>
        <Route path='/login'element= {<Login></Login>}></Route>

      </Routes>
    </div>

  );
}

export default App;
