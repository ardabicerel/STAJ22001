import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [number, setNumber] = useState("")
  const [faktoriyell, setFaktoriyell] = useState("")

  const faktoriyelHesapla = (sayi) => {
    let sonuc = 1;
    for(let i = 1; i <= sayi; i++) {
      sonuc*= i;
    }
    return setFaktoriyell(sonuc);
  }

  useEffect(() => {
    if (number !== "") {
      faktoriyelHesapla(number);}
    else{
      setFaktoriyell("");
    }
    }, [number]);


  return (
    <>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 p-4'>

        <div className='lg:col-span-1 col-span-1'>
          <label className='block mb-2 text-left'>Girilen Sayı :</label>
          <input name="sayi" type="number" className='bg-[#999] text-black' onChange={(event) => setNumber(event.target.value)}></input>
        </div>

        
        <div className='lg:col-span-1 col-span-1'>
          <label className='block mb-2 text-left'>Faktoriyel Sonucu :</label>
          <input value={faktoriyell} className='bg-[#999] text-black' readonly></input>
        </div>

      </div>
    </>
  )
}

export default App
