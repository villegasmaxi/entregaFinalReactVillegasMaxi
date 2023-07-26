import 'bootstrap/dist/css/bootstrap.css'
import NavBar from "./components/NavBar";
import ListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from  'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
       <Routes>
        <Route path='/' element={ <ListContainer title="Bienvenido a cálculo a la romana" subTitle="Donde los amigos comparten los gastos de su cena "/>} />
        <Route path='/category/:categoryId' element={<ListContainer title="Bienvenido a la categoría: "/>}/>
        <Route path='/Item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
     
    </BrowserRouter>
    </>)
}

export default App;
