
import {useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asynckMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {

const [loading, setLoading] = useState (true)


const [products, setProducts] = useState([])

const { categoryId } = useParams()


useEffect (() => {
    if (categoryId)   document.title = 'Ecommerce: ' + categoryId
   
       return () => {
           document.title = 'Ecommerce'
       }
   }, [categoryId])

useEffect(()=>{

    setLoading (true)

    const asyncFunction = categoryId ? getProductsByCategory : getProducts
    
    asyncFunction(categoryId)
    .then( products =>{
setProducts(products)
    })
    .catch (error => {
        console.error (error)
    })
    .finally(() => {
        setLoading (false)
    })
}, [categoryId])

if (loading) {
    return <h2 style={{margin: "2rem"}}>Cargando...</h2>
}


    return (
<div style={{margin:"2rem"}}>
    <h1 style={{color:"blue"}}>{greeting + (categoryId ?? '')}</h1>
    <ItemList products={products}/>
</div>
    )
}

export default ItemListContainer