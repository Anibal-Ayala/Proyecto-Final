
import { useState, useEffect } from "react"
import { getProductbyId } from "../../asynckMock"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () =>{
const [product, setProduct] = useState(null)

useEffect(()=>{
    getProductbyId('1')
    .then (product => {
        setProduct (product)
    } )
}, [])


    return (
        <div style={{margin: "2rem"}}>
            <h1>Detalle del producto</h1>
            <ItemDetail{...product} />
        </div>
    )
}


export default ItemDetailContainer