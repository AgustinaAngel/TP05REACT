import './App.css';
import NavBar from './components/NavBar';
import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [paises, setPaises] = useState([]);
  const [contador, setContador] = useState(0);
  const [pais, setPais] = useState({});
  const [nombre, setNombre] = useState('');


  const listarPaises = () => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then((result) => {
        const paises = result.data.data;
        console.log(paises);
        setPaises(paises);

        var item = paises[Math.floor(Math.random() * paises.length)];
        setPais(item);
      })

  }

  useEffect(() => {
    listarPaises()
  }, [contador + 10]);

  function FormPais(evento) {
    evento.preventDefault();
    console.log(evento);
    console.log(evento.target.pais.value);
    if (pais.name == evento.target.pais.value) {
      setContador(contador + 10);


    }
    else {
      setContador(contador - 1);
    }
    evento.target.pais.value = '';
    return;

  }




  return (
    <>
    <NavBar/>
    <br/>
 <center>
      <label className="pb-1">Ingresa tu nombre</label>
    <br/>
      <input onKeyUp={(e) => setNombre(e.target.value)} type="text" placeholder="Nombre" ></input>
      <div className="pb-5" > </div>
      <h1>Hola {nombre}, tus puntos son: {contador}!!!</h1>

   
      {/*<p>{pais.name}</p>*/}
      <img src={pais.flag} alt="" />
      <br/>
      <form onSubmit={(e) => FormPais(e)}>
        <label>Ingrese nombre del país</label>
        <br/>
        <input type="text" name="pais" className="u-full-width" placeholder="Pais" autoComplete="off" />
        <button type="submit" className="u-full-width button-primary">Enviar</button>
      </form>
      </center>
    </>

  );
}

export default App;
