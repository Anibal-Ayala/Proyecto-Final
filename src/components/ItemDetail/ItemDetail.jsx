
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ id, name, img, category, price, description, stock }) => {

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

  return (


    <article style={{ margin: "2rem", display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center" }}>
      <div class="card" style={{ width: "15rem", display: "flex", alignItems: "center", height: "26rem", backgroundColor: "#e3f2fd", flexDirection: "column" }}>

        <div class="card-body" style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
          <img src={img} class="card-img-top" style={{ width: "85%", height: 200 }} alt="..." />
          <h5 class="card-title">{name}</h5>
          <p class="card-text">Categoria: {category}</p>
          <h4>Precio: ${price}</h4>
          <p>{description}</p>


        </div>


      </div>

      <ItemCount stock={stock} onAdd={handleOnAdd} />


    </article>

  )
}


export default ItemDetail