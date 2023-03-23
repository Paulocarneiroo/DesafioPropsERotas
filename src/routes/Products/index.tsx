import { Outlet } from 'react-router-dom'
import Card from '../../components/Card'
import '../../routes/index.css'
import './styles.css'

const Products = () => {
  return (
    <main className="container product-main">
      <Card />
      <Outlet/>
    </main>
  )
}

export default Products