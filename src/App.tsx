import './App.css'
import { useEffect, useState } from 'react'
import { horarioAtual } from './utils/tempo'

function App() {
  const [tempoAtual, setTempoAtual] = useState(horarioAtual());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTempoAtual(horarioAtual());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      {/* Exibe o horário atual formatado */}
      <h1>Horário Atual: {tempoAtual}</h1>
    </>
  )
}

export default App
