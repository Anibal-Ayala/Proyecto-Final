
import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {

    return (
       
        <nav  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: "#e3f2fd" }}>
            
            <h1 style={{color:"blue", margin: "2rem"}}>Ecommerce</h1>
            <section  >
       
                <button className="btn btn-outline-primary" style={{margin: 5}}>Celulares</button>
                <button className="btn btn-outline-primary" style={{margin: 5}}>Tablets</button>
                <button className="btn btn-outline-primary" style={{margin: 5}}>Notebooks</button>

            
            </section>
 <CartWidget/>
        </nav>
    )

}

export default NavBar