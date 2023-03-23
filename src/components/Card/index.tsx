import { NavLink } from 'react-router-dom'
import './styles.css'

const Card = () => {
  return (
    <div className='card'>
        <NavLink to="computers" className={({isActive}) => isActive ? "items-card item-actived" : "items-card"}>
          Computadores
        </NavLink>
        <NavLink to="eletronics" className={({isActive}) => isActive ? "items-card item-actived" : "items-card"}>
          Eletrônicos
        </NavLink>
        <NavLink to="books" className={({isActive}) => isActive ? "items-card item-actived" : "items-card"}>
          Livros
        </NavLink>
    </div>
  )
}

export default Card