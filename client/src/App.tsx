import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { ItemList } from './pages/ItemList'
import { ItemDetails } from './pages/ItemDetails'
import { FormPage } from './pages/FormPage'
import { Home } from './pages/Home'
import { AppProvider } from './contextAPI/provider/AppProvider'

function App() {

  return (
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/items' element={<ItemList/>}/>
            <Route path='/items/:id' element={<ItemDetails/>}/>
            <Route path='/items/new' element={<FormPage/>}/>
            <Route path='/items/:id/edit' element={<FormPage/>}/>
          </Routes>
        </BrowserRouter>
      </AppProvider>
  )
}

export default App
