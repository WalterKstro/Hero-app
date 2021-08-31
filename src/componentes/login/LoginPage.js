import { useContext } from "react"
import AuthContext from "../../auth/AuthContext"
import useForm from "../../hooks/useForm"

const LoginPage = ({history}) => {
    const {dispatch} = useContext(AuthContext)
    const {state,handleChangeInput} = useForm({})
    
    
    const handleLogin = (e) =>{
        e.preventDefault()
        if (state.hasOwnProperty('email') && state.hasOwnProperty('pass')) {
            dispatch({
                type: 'loggin',
                payload: state
            })
        }
        /*Get the last page visited*/
        const lastPath = localStorage.getItem('lastPath') || '/' 
        history.replace(lastPath)
    }
    return (
        <div className="container">
            
            <div className="row my-5 justify-content-center">
                <div className="col-4 col-md-2 col-md-offset-5">
                    <img src={`${process.env.PUBLIC_URL}/assets/Brand.svg`} alt="Brand"/>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <form onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="staticUsername" className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                            <input 
                                type="text"
                                name="email" 
                                className="form-control" 
                                id="staticEmail" 
                                placeholder="your username"
                                onChange={handleChangeInput}/>
                            </div>
                            <div class="form-text">
                                Any username
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                            <input 
                                type="password" 
                                name="pass"
                                className="form-control" 
                                id="inputPassword" 
                                placeholder="********"
                                onChange={handleChangeInput}
                                />
                                <div class="form-text">
                                    Any password
                                </div>
                            </div>
                        </div>
                        <div>
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            >Log In</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default LoginPage
