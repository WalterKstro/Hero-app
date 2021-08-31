import { Switch, Route } from "react-router-dom"
import MarvelPage from "../componentes/marvel/MarvelPage";
import Navbar from "../componentes/ui/Navbar";
import DcPage from "../componentes/dc/DcPage";
import DetaillsScreen from "../componentes/detail/DetaillsScreen";
import Error404Page from "../componentes/error404/Error404Page";
import HomePage from "../componentes/home/HomePage";
import SearchHero from "../componentes/search/SearchHero";
const AuthenticatedRouters = () => {
    return (
        <>
            <Navbar/>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/dc" component={DcPage}/>
                        <Route exact path="/marvel" component={MarvelPage}/>
                        <Route exact path="/hero/:id_hero" component={DetaillsScreen}/>
                        <Route exact path="/search" component={SearchHero}/>
                        <Route component={Error404Page}/>
                    </Switch>
                </div>
        </>
    )
}

export default AuthenticatedRouters
