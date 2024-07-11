const Item = ({id, name, img,  category, price}) => {

    return(

<article>
    <h3>{name}</h3>
    <img src={img} style={{width: 100}} />
    <p> Categoria: {category}</p>
    <h4>${price}</h4>
    <button>Ver detalle</button>
</article>
    )
}


export default Item
