import React, { useState, useEffect } from 'react';
import './App.css';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import Swal from 'sweetalert2';

const ContadorLetrasPalabras = () => {
  const [texto, setTexto] = useState('');
  const [contadorLetras, setContadorLetras] = useState(0);
  const [contadorPalabras, setContadorPalabras] = useState(0);

  useEffect(() => {
    const palabras = texto.split(' ');
    setContadorLetras(texto.length);
    setContadorPalabras(palabras.filter(palabra => palabra !== '').length);
    if (texto.length >= 100) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Llegas al limite de 100 letras!',

      })
    }
  }, [texto]);

  const handleChangeTexto = (e) => {
    setTexto(e.target.value);
  };

  return (
    <div className='teto'>
      <center>
      <br></br>
      <TextField inputProps={{ maxLength: 100 }} className='teto' id="filled-basic" label="Escribi..." variant="filled" value={texto} onChange={handleChangeTexto} /><br></br>
      <br></br><Button variant="contained" color="primary">
      
      Contador de Letras: <br></br> {contadorLetras}
      </Button>
      <Button variant="contained" color="primary">
      Contador de Palabras: <br></br> {contadorPalabras}
      </Button>
      </center>
    </div>
  );
};

export default ContadorLetrasPalabras;
