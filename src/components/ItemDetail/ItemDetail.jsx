
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, name, img,  category, price, description, stock}) => {

    const handleOnAdd = (quantity) => {
        const objProduct = {
            id,
            name,
            img,
            quantity,
            price
        }

        console.log('se agrego correctamente: ', objProduct)

    }

    return(

<article style={{margin: "2rem"}}>
    <h3>{name}</h3>
    <img src={img} style={{width: 100}} />
    <p> Categoria: {category}</p>
    <h4>${price}</h4>
    <p>{description}</p>
    <ItemCount stock ={stock} onAdd={handleOnAdd}/>

</article>
    )
}


export default ItemDetail