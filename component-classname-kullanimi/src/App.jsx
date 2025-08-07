import React from 'react';
import classNames from 'classnames';
import './App.css'



function App() {

  const [veriGirildi, setVeriGirildi] = React.useState('');

  const inputClasses = classNames('p-2', {'bg-green-300 text-black': veriGirildi.trim() !== '', 'bg-red-300': veriGirildi.trim() === ''});    

  const enterBasildi = (e) => {
    if(e.key === "Enter"){
      console.log("Tebrikler! İşte veri :", veriGirildi);
    }
  };
  


  return (
    <>
      <input onKeyDown={enterBasildi} placeholder="Bir şeyler yaz bakalım..." className={inputClasses} onChange={(e) => setVeriGirildi(e.target.value)}></input>
    </>
  )
}

export default App
