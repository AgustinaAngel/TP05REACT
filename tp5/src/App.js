import './App.css';
import React, { useState } from "react";
import axios from "axios"; 
function App() 
{
  const [image, setImage] = useState("");



  const getPais = () => {
    axios
  .get("https://countriesnow.space/api/v0.1/countries/flag/images")
  .then((result) => {
    const paises = result.data.data;
    console.log(paises);

    paises.map((pais) => {
      const { name, flag } = pais;
      setImage('${flag}');
    });
  })
  }

  return (
    <>
     
      <img src={image} alt=""/>
      <button onClick={getPais}>getdata</button>

     </>
   
  );
}

export default App;
