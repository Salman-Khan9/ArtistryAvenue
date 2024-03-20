import './App.css';
import {BrowserRouter as Router , Route,Routes} from "react-router-dom"
import Home from './Pages/Home/Home';
import Paintings from './Pages/Paintings/Paintings';
import Artist from './Pages/Artists/Artist';
import Drwaings from './Pages/Drawings/Drwaings';
function App() {
  return (
    <Router>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/Paintings' element={<Paintings/>}/>
        <Route path='/Artist' element={<Artist/>}/>
        <Route path='/Drawings' element={<Drwaings/>}/>
      </Routes>
    </Router>
  );
}

export default App;
