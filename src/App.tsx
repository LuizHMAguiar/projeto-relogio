import './App.css'
import { useEffect, useState } from 'react'
import { horarioAtual } from './utils/tempo'
import { dataAtual } from './utils/tempo';

function App() {
  const [tempoAtual, setTempoAtual] = useState(horarioAtual());
  const [data, setData] = useState(dataAtual());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTempoAtual(horarioAtual());
      setData(dataAtual());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);


  return (
    <>
      {/* Exibe o horário atual formatado */}
      <h1>Horário Atual: {tempoAtual}</h1>
      <h1>Data Atual: {data}</h1>
      
    </>
  )
}

export default App
