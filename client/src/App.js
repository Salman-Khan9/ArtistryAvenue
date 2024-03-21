import './App.css';
import {BrowserRouter as Router , Route,Routes} from "react-router-dom"
import Home from './Pages/Home/Home';
import Paintings from './Pages/Paintings/Paintings';
import Artist from './Pages/Artists/Artist';
import Viewinroom from './Pages/Viewinroom/Viewinroom';
function App() {
  return (
    <Router>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/Paintings' element={<Paintings/>}/>
        <Route path='/Artist' element={<Artist/>}/>
        <Route path='/viewinroom/:imageUrl' element={<Viewinroom/>}/>
      </Routes>
    </Router>
  );
}

export default App;
