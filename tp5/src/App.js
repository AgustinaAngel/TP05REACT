import './App.css';
import NavBar from './components/NavBar';
import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [paises, setPaises] = useState([]);
  const [contador, setContador] = useState(0);
  const [pais, setPais] = useState({});
  const [nombre, setNombre] = useState('');
  const [timeLeft, setTimeLeft] = useState(15);
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
    setTimeLeft(15);
  };

    useEffect(() => {
      if (!timeLeft) return;

      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      },1000);

     
      return () => clearInterval(intervalId);
      
    }, [timeLeft]);




  const listarPaises = () => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then((result) => {
        const paises = result.data.data;
        console.log(paises);
        setPaises(paises);

        var item = paises[Math.floor(Math.random() * paises.length)];
        setTimeLeft(15);
        setPais(item);
      })

  }

  useEffect(() => {
    listarPaises()
  }, [contador]);

  function FormPais(evento) {
    evento.preventDefault();
    console.log(evento);
    console.log(evento.target.pais.value);

    if (pais.name === evento.target.pais.value) {
      setContador(contador + 10);


    }
    else {
      setContador(contador - 1);
    }
    evento.target.pais.value = '';
    return;
  }
  
  if(timeLeft===0){
    listarPaises();
  }

  return (
    <>
      <NavBar />

      <br />
      <br />
      <center>
       <h1 className= "under">¡Jugando con banderas!</h1>
       <br />
        {!showForm && (
          
        <form onSubmit={() => handleClick()}>
           <label className="pb-1">Ingresa tu nombre</label>
        <br />
        <input onKeyUp={(e) => setNombre(e.target.value)} type="text" className="medidainput" placeholder="Nombre" ></input>
        <button type="submit" className="u-full-width button-primary botonEnviar">Enviar</button>
        </form>
         )}
        {showForm && (
          <div className="pb-5" > 
        <div className="pb-5" > </div>
        <h1>Hola {nombre}, tus puntos: {contador}!!!</h1>
        <h1>{timeLeft}</h1>
        <img src={pais.flag} className="imagenPais" alt="" />
        <br />
        <form onSubmit={(e) => FormPais(e)}>
          <label>Ingrese nombre del país</label>
          <br />
          <input type="text" name="pais" className="u-full-width medidainput" placeholder="Pais" autoComplete="off" />
          <button type="submit" className="u-full-width button-primary botonEnviar">Enviar</button>
        </form>
        </div>
        )}

      </center>

    </>

  );
}

export default App;
