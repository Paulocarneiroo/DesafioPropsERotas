
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import About from './routes/About'
import Home from './routes/Home'
import Welcome from './routes/Home/Welcome'
import NotFound from './routes/NotFound'
import Products from './routes/Products'
import Books from './routes/Products/Books'
import Computers from './routes/Products/Computers'
import Eletronics from './routes/Products/Eletronics'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Navigate to="home" />} />
            <Route path="home" element={<Welcome />} />
            <Route path="products" element={<Products />}>
              <Route path="computers" element={<Computers />} />
              <Route path="eletronics" element={<Eletronics />} />
              <Route path="books" element={<Books />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
