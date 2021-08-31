import { useContext } from "react";
import {BrowserRouter as Router,Switch} from "react-router-dom";
import AuthContext from "../auth/AuthContext";
import LoginPage from "../componentes/login/LoginPage";
import AuthenticatedRouters from "./AuthenticatedRouters";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const AppRouter = () => {
    const {user} = useContext(AuthContext)
    
    return (
        <Router>
            <header>
                <Switch>
                    <PublicRouter 
                        exact 
                        path="/login" 
                        component={LoginPage}
                        isAuthenticated={user.logged}
                    />

                    <PrivateRouter 
                        path="/" 
                        component={AuthenticatedRouters}
                        isAuthenticated={user.logged}
                    />
                </Switch>
            </header>
        </Router>
    )
}

export default AppRouter
