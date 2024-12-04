import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {

    return (
       
        <nav  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: "#e3f2fd" }}>
            
           <div><Link to={'/'} className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-0-hover"><h1 style={{margin: 32, color: 'blue'}}>Ecommerce</h1></Link></div>
            <section  >
       
            <button className="btn btn-primary active btn-sm" role="button" data-bs-toggle="button" aria-pressed="true" style={{ margin: 10, width: 100 }} ><Link to={`/category/celular`} className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-0-hover" >Celular</Link></button>
            <button className="btn btn-primary active btn-sm" role="button" data-bs-toggle="button" aria-pressed="true" style={{ margin: 10, width: 100 }} ><Link to={`/category/tablet`} className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-0-hover" >Tablet</Link></button>
            <button className="btn btn-primary active btn-sm" role="button" data-bs-toggle="button" aria-pressed="true" style={{ margin: 10, width: 100 }} ><Link to={`/category/notebook`} className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-0-hover" >Notebook</Link></button>
            </section>
 <CartWidget/>
        </nav>
    )

}

export default NavBar