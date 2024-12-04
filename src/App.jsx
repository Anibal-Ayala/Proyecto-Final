

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
          <Route path='/' element ={<ItemListContainer greeting={'Listado de productos:'} />} />
          <Route path='/category/:categoryId' element ={<ItemListContainer greeting={'Listado de productos filtrados: '} />} />
          <Route path='/detail/:productId' element= {    <ItemDetailContainer />} />
          <Route path='*' element={<h1 style={{textAlign: 'center'}}>ERROR 404</h1> }/>
        
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
