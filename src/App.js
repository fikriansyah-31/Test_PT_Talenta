import { Routes, Route } from 'react-router-dom';
import './App.css';
import Input from './componnets/Input'
import Add from './componnets/Add'
import Pdf from './componnets/Pdf'

function App() {
  return (
    <Routes>
    <Route path='/input' element ={<Input/>}/>
    <Route path='/add-input' element ={<Add/>}/>
    <Route path='/pdf' element ={<Pdf/>}/>
    </Routes>
  );
}

export default App;
