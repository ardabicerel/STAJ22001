import { useState, useMemo } from 'react'
import './App.css'

const maliyetliHesaplama = (sayi) => {
  console.time('Hesaplama Süresi')
  let toplam = 0
  for(let i = 0; i <= sayi; i++){
    toplam += i
  }
  console.timeEnd('Hesaplama Süresi')
  return toplam
}


function App() {
  
  const [sayi, setSayi] = useState(0)
  const [counter, setCounter] = useState(0)

  const toplaminSonucu = useMemo(() => {
    return maliyetliHesaplama(100000)

  }, [sayi])
  


  return (
    <>
      <div>
        <h3>Hesaplama Sonucu : {toplaminSonucu}</h3>
        <button onClick={() => setCounter(counter + 1)}>Sayacı Arttır : {counter}</button>
        <p>Bu butona her tıkladığınızda, yukarıdaki maliyetli hesaplama artık yeniden çalışmayacak.</p>
      </div>
    </>
  )
}

export default App
