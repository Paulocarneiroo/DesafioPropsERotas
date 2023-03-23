import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import '../../routes/index.css';

const Home = () => {
    return (
        <>
            <Header/>
            <Outlet />
        </>
    )
}

export default Home