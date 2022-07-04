import './App.css';
import Home from "./Components/Pages/Home/Home";
import User from "./Components/Pages/User/User";
import {BrowserRouter, Routes ,Route} from 'react-router-dom';
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/user/:login" exact element={<User/>}/>


        </Routes>
      </BrowserRouter>

  );
}

export default App;
