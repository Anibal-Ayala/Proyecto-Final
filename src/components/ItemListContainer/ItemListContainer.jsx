
import {useState, useEffect } from "react"
import { getProducts } from "../../asynckMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) => {

const [products, setProducts] = useState([])
useEffect(()=>{
    getProducts()
    .then( products =>{
setProducts(products)
    })
    .catch (error => {
        console.error (error)
    })
})


    return (
<div>
    <h1>{greeting}</h1>
    <ItemList products={products}/>
</div>
    )
}

export default ItemListContainer