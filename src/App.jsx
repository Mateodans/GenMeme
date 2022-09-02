// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  const [linea1, setLinea1] = useState('')
  const [linea2, setLinea2] = useState('')
  const [img, setImg] = useState('')

  const onChangeLinea1 = function(event){
    setLinea1(event.target.value)
  }

  const onChangeLinea2 = function(event){
    setLinea2(event.target.value)
  }

  const onChangeImg = function(event){
    setImg(event.target.value)
  }

  return (
    <div className="App">
      <select name="" id="" onChange={onChangeImg}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="raptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select>
      <br />
      <input type="text" placeholder='Linea 1' onChange={onChangeLinea1} />
      <br />
      <input type="text" placeholder='Linea 2' onChange={onChangeLinea2} />
      <br />
      <button>Exportar</button>
      <div className='meme'>
        <span>{linea1}</span>
        <span>{linea2}</span>
        <img src={"/img/"+ img + ".jpg"} alt="" />
      </div>
    </div>
  );
}

export default App;
