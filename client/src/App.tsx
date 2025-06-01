import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
// import { ItemList } from './pages/ItemList'
// import { ItemDetails } from './pages/ItemDetails'
// import { FormPage } from './pages/FormPage'
// import { Home } from './pages/Home'
import { AppProvider } from './contextAPI/provider/AppProvider'
import { lazy, Suspense } from "react";
import Loader from './components/Loader';

const Home = lazy(() => import('./pages/Home'));
const ItemList = lazy(() => import('./pages/ItemList'));
const ItemDetails = lazy(() => import('./pages/ItemDetails'));
const FormPage = lazy(() => import('./pages/FormPage'));


function App() {

  return (
      <AppProvider>
        <BrowserRouter>
          <Suspense fallback={<Loader/>}>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/items' element={<ItemList/>}/>
                <Route path='/items/:id' element={<ItemDetails/>}/>
                <Route path='/items/new' element={<FormPage/>}/>
                <Route path='/items/:id/edit' element={<FormPage/>}/>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AppProvider>
  )
}

export default App
