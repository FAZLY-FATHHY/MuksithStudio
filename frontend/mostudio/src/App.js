import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/ContactUs'
import Open from './Routes/Openpage'

function App() {
  return (
    <div className="App">

      <Routes>

      <Route path='/' element={<Open/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        
        <Route path='/contact' element={<Contact/>} />
       

      </Routes>

      

    </div>
  );
}

export default App;
