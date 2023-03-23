
import './styles.css';
import vector from '../../assets/Vector.svg';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <nav>
                <div className="links">
                    <NavLink to="/home" className={({ isActive }) => isActive ? "menu-items item-actived" : "menu-items"}>
                        Início
                    </NavLink>
                    <NavLink to="products" className={({ isActive }) => isActive ? "menu-items item-actived" : "menu-items"}>
                        Produtos
                    </NavLink>
                    <NavLink to="about" className={({ isActive }) => isActive ? "menu-items item-actived" : "menu-items"}>
                        Sobre nós
                    </NavLink>
                </div>
                <Link to="/">
                    <img src={vector} alt="vector" />
                </Link>
            </nav>
        </header>
    )
}

export default Header;