import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../scss/dashboard.scss';
import userContext from "../contexts/userContext";

const DashboardLayout = (props) => {

    const { dispatchUser } = useContext(userContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('loggedIn')
        dispatchUser({type:'LOGOUT'})
        navigate('/login')
    }
    
    return (
        <div className="vh-100">
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-100 position-fixed" style={{ width: '280px' }}>
                <span className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-4">Menu</span>
                </span>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to={'/dashboard'} className="nav-link">
                            Accueil
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/inputpage'} className="nav-link">
                            Input page
                        </Link>
                    </li>
                    <li>
                        <Link to={'/login'} className="nav-link">
                            Connexion
                        </Link>
                    </li>
                    <li>
                        <span onClick={handleLogout} className="nav-link">
                            Déonnexion
                        </span>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <span className="d-flex align-items-center text-white text-decoration-none">
                        <img src="https://github.com/mdo.png" alt="" width={32} height={32} className="rounded-circle me-2" />
                        <strong>Mounir</strong>
                    </span>
                </div>
            </div>
            <div className="dashboard-content">
                <h1>{props.title}</h1>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout