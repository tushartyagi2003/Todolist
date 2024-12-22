
import { useState } from 'react'

const Counter = () => {
   const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
        
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }


  return (
    <>
         <p>Count: {count}</p>
        <button onClick={handleIncrement}>INCREASE</button>
        <button onClick={handleDecrement}>DECREASE</button>
    </>
    
  )
}

export default Counter