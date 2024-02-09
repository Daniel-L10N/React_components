import { useState } from "react";
import './counter.css'

// import { Button }  from '../Button/button'
function Counter({num=0}) {
    const [number, setNumber] = useState(num);
    const suma = () => setNumber(number + 1);
    const resta = () => setNumber(number - 1);
  return (
    <div className="contador">
        <button className="button" onClick={suma}>Sumar +</button>
        <p className="number">{number}</p>
        <button className="button" onClick={resta}>Restar -</button>
    </div>
  )
}

export default Counter;