import { useState } from "react"

const ItemCount = ({initial = 1, stock, onAdd}) => {

    const [count, setCount] = useState (initial)

    const increment = () => {
        if (count < stock) {
            setCount (prev => prev +1)
        }
    }

    const decrement = () => {
        if (count > 1) {
            setCount (prev => prev -1)
        }
    }
return(

<div >

    <h4 style={{textAlign:"center"}}>{count}</h4>
    <button className="btn btn-outline-primary" style={{margin: 5}} onClick={decrement}>-</button>
    <button className="btn btn-outline-primary" onClick={() => onAdd (count)}>Agregar al carrito</button>
    <button className="btn btn-outline-primary"  style={{margin: 5}} onClick={increment}>+</button>
</div>


    )
}

export default ItemCount