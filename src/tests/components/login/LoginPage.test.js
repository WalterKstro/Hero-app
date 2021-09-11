import { mount } from "enzyme"
import AuthContext from "../../../auth/AuthContext"
import LoginPage from "../../../componentes/login/LoginPage"


describe('Testing in <LoginPage/>', () => {

    let history = undefined
    let rendered = undefined

    const user = {
        email : 'Walter Francisco',
        pass :'123'
    }
    const dispatch = jest.fn()


    beforeEach(() => {
        history = {
            replace : jest.fn()
        }

        rendered = mount(
            <AuthContext.Provider value={{user, dispatch}}>
                <LoginPage  history = {history}/>
            </AuthContext.Provider>
        )
    })

    test('should display correctly', () => {
        expect(rendered).toMatchSnapshot()
    })

    test('should execute the function replace', () => {
        rendered.find('form').simulate('submit')
        
        expect(history.replace).toHaveBeenCalledWith('/')
        expect(history.replace).toHaveBeenCalledTimes(1)
        
    })

    test('should get the last URL visited of the localStorage', () => {
        

        localStorage.setItem('lastPath','/dc')
        rendered.find('form').simulate('submit')
        expect(history.replace).toHaveBeenCalledWith('/dc')

    })
    
    
    
})
