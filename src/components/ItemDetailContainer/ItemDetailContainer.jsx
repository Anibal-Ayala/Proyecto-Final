
import { useState, useEffect } from "react"
import { getProductbyId } from "../../asynckMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () =>{

 const [loading, setLoading] = useState (true)

const [product, setProduct] = useState(null)

const { productId } = useParams()

useEffect (() => {
 if (product)   document.title = product.name

    return () => {
        document.title = 'Ecommerce'
    }
}, [product])


useEffect(()=>{

    setLoading (true)
    getProductbyId(productId)
    .then (product => {
        setProduct (product) 
    } )

    .catch (error => {
        console.error (error)
    })
    .finally(() => {
        setLoading (false)
    })
}, [ productId ])


if (loading) {
    return <h2 style={{color: 'blue', margin : "2rem"}}>Cargando el producto...</h2>
}


    return (
        <div style={{margin: "2rem"}}>
            <h1 style={{color:"blue"}}>Detalle del producto:</h1>
            <ItemDetail{...product} />
        </div>
    )
}


export default ItemDetailContainer