import React, {useState, useCallback} from 'react'
import './App.css'


const ChildComponent = React.memo(({onClick}) => {
    console.log("ChildComponent yeniden render edildi.");
    return <button onClick={onClick}>Sayacı Arttır</button>
})


function App() {  

  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [])

  return (
    <>
      <div>
        <h1>Sayaç: {count}</h1>
        <ChildComponent onClick={handleIncrement} />
      </div>
    </>
  )
}

export default App
