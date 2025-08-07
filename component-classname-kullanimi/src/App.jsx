import React from 'react';
import classNames from 'classnames';
import './App.css'
import Bar from './components/Button'

function App() {

  const [veriGirildi, setVeriGirildi] = React.useState('');

  const inputClasses = classNames('p-2',
     {'bg-green-300 text-black': veriGirildi.trim() !== '',
      'bg-red-300': veriGirildi.trim() === ''});    
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Girilen veri: ", veriGirildi)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input placeholder="Bir şeyler yaz bakalım..." className={inputClasses} onChange={(e) => setVeriGirildi(e.target.value)}></input>
      <Bar type="submit">Deneme</Bar>
    </form>
    </>
  )
}

export default App