import { Link } from "react-router-dom"


const Item = ({ id, name, img, category, price }) => {

  return (

    <article style={{ margin: "2rem", display: "flex", flexDirection: "column", justifyItems: "center" }}>
      <div class="card" style={{ width: "15rem", display: "flex", alignItems: "center", height: "26rem", backgroundColor: "#e3f2fd", flexDirection: "column" }}>

        <div class="card-body" style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
          <img src={img} class="card-img-top" style={{ width: "100%", height: 200 }} alt="..." />
          <h5 class="card-title">{name}</h5>
          <p class="card-text">Categoria: {category}</p>
          <h4>Precio: ${price}</h4>
<button className="btn btn-primary active btn-sm" role="button" data-bs-toggle="button" aria-pressed="true" style={{ margin: 10, width: 100 }} ><Link to={`/detail/${id}`} className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-0-hover" >Ver Detalle</Link></button>



        </div>


      </div>


      
    </article>


  )
}


export default Item