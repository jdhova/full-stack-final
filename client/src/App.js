// import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';



// 2. Jude Okagu -N01407704

function App() {
  return (
    <Router>
      <div className="App">
       
      <header className="App-header">
          </header>
      <Routes>
      <Route path="/" element={ <Register/>} /> 
      <Route path="/login" element={ <Login/>} /> 
      <Route path="/dashboard" element={ <Dashboard/>} /> 
      </Routes> 
        </div>
    </Router>


    
   

   
  );
}

export default App;


// {/* <Router> */}
// <div className="App">
 
// <header className="App-header">
//     </header>
//     <h3>ssksks</h3>
// {/* <Routes> */}

// {/* <Route path="/" element={ <Register/>} />  */}
// {/* <Route path="/" element={ <Register/>} /> 
// <Route path="/login" element={ <Login/>} />  */}
// {/* <Route path="/dashboard" element={ <Dashboard/>} />  */}
// {/* </Routes>  */}
//   </div>
// {/* </Router> */}