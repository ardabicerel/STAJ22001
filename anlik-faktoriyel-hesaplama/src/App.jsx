import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [number1, setNumber1] = useState("")
  const [number2, setNumber2] = useState("")
  const [faktoriyell, setFaktoriyell] = useState("")
  const [fibonaccii, setFibonaccii] = useState("")

  const faktoriyelHesapla = (sayi) => {
    let sonuc = 1;

    if(sayi < 0) {
      setFaktoriyell("Pozitif sayı giriniz");
      return;
    }


    for(let i = 1; i <= sayi; i++) {
      sonuc*= i;
    }
    return setFaktoriyell(sonuc);
  }

  useEffect(() => {
    if (number1 !== "") {
      faktoriyelHesapla(Number(number1));}
    else{
      setFaktoriyell("");
    }
    }, [number1]);
  

  const fibonacciHesapla = (index) => {    
    if((index !== "") && (index === 0 || index === 1)) {
      setFibonaccii(1);
      return;
    };

    if(index < 0) {
      setFibonaccii("Pozitif index giriniz");
      return;
    }

    let a = 1, b = 1, c;
    for(let i = 2; i <= index; i++){
      c = a + b;
      a = b;
      b = c;
    }
    setFibonaccii(b);
    
    }

    useEffect(() => {
    if(number2 !== ""){
      fibonacciHesapla(Number(number2));
    }
    else{
      setFibonaccii("");
    }
    }, [number2]);
    



  return (
    <>      
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 p-4'>

        <div className='lg:col-span-1 col-span-1'>
          <label className='block mb-2 text-left'>Girilen Sayı :</label>
          <input name="number1" type="number" className='bg-[#999] text-black pl-1' onChange={(event) => setNumber1(event.target.value)}></input>
        </div>

        
        <div className='lg:col-span-1 col-span-1'>
          <label className='block mb-2 text-left'>Faktoriyel Sonucu :</label>
          <input value={faktoriyell} className='bg-[#999] text-black pl-1' readonly></input>
        </div>

        <div className='lg:col-span-1 col-span-1'>
          <label className='block mb-2 text-left'>Girilen Sayı :</label>
          <input name="number2" type="number" className='bg-[#999] text-black pl-1' onChange={(event) => setNumber2(event.target.value)}></input>
        </div>

        
        <div className='lg:col-span-1 col-span-1'>
          <label className='block mb-2 text-left'>Fibonacci Sonucu :</label>
          <input value={fibonaccii} className='bg-[#999] text-black pl-1' readonly></input>
        </div>

      </div>
    </>
  )
}

export default App
