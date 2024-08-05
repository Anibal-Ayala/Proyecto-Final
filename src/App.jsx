

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element ={<ItemListContainer greeting={'Listado de productos'} />} />
            <Route path='/detail/:productId' element= {    <ItemDetailContainer />} />
        
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
