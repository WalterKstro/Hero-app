import { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import AuthContext from "../../auth/AuthContext";

const Navbar = () => {
    const {user, dispatch} = useContext(AuthContext)
    const history = useHistory()
    
    const handleLogout = () =>{
        dispatch({
            type: 'logout'
        })
        history.replace('/login')
    }
    return (
        <nav className="sticky-top navbar navbar-expand-lg navbar-dark bg-dark py-0">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand"><img src={`${process.env.PUBLIC_URL}/assets/Brand.svg`} alt="Brand"/></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/dc" className="nav-link">DC Universe</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/marvel" className="nav-link">Marvel Universe</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" to="/search" className="nav-link">Search</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <button className="nav-link text-white fw-bold btn">
                                {user.email}
                            </button>
                        </li>
                        <li className="nav-item">
                            <button 
                                className="btn btn-primary"
                                onClick={handleLogout}
                                >
                                    Sign Out
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
