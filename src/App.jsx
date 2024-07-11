

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemCount from './components/ItemCount/ItemCount'

function App() {


  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Listado de productos'} />
      <ItemCount/>
    </>
  )
}

export default App
