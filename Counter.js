import { useState } from "react"
import './style.css'
function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div className="container">
            <h3>Counter </h3>
            <h1 className="number">{count}</h1>

            <section className="btns-container">
                <button onClick={()=> setCount(count+1)} className="increment">Increment</button>
                <button onClick={()=> setCount(count-1)}  className="increment">Decrement</button>
                
            </section>

        </div>

    )
}

export default Counter
