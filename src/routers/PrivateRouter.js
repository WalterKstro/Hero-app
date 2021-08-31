import { Redirect, Route} from "react-router-dom"
import PropTypes from 'prop-types'

const PrivateRouter = ({
    isAuthenticated, 
    component: Component, 
    ...rest}) => {

    const lastPath = rest.location.pathname
    localStorage.setItem('lastPath', lastPath)
    return (
        <Route 
            {...rest} 
            component={props => (
                (isAuthenticated)
                ? <Component {...props}/>
                :<Redirect to="/login"/>
            )}
        />
    )
}

PrivateRouter.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component:PropTypes.func.isRequired
}

export default PrivateRouter
