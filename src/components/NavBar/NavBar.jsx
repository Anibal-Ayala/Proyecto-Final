
import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1>Ecommerce</h1>
            <section>

                <button>Celulares</button>
                <button>Tablets</button>
                <button>Notebooks</button>

               
            </section>
 <CartWidget/>
        </nav>
    )

}

export default NavBar