import Kids from "./shopcart/Kids";
import Menscart from "./shopcart/Menscart";
import Navbar from "./shopcart/Navbar";
import Womens from "./shopcart/Womens";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
   
      <Router>
 
  <Routes>
  <Route path='/' element={<Menscart/>} />
  <Route path='womens' element={<Womens/>} />
  <Route path='kids' element={<Kids/>} />
  </Routes>
       </Router>

    
    
    </div>
  );
}

export default App;
