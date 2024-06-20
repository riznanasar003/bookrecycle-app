import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
