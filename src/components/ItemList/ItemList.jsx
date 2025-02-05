
import Item from "../Item/Item"
const ItemList = ({ products }) => {


    return (
        <div style={{display:"flex", flexWrap:"wrap", flexDirection:"row"}}>


        
            
            {  products.map (prod => {

                return <Item key = {prod.id} {...prod}/>
            })     
        
        }

          
        </div>
   
    )
}

export default ItemList