import { mount } from "enzyme"
import { MemoryRouter, Router } from "react-router"
import AuthContext from "../../../auth/AuthContext"
import Navbar from "../../../componentes/ui/Navbar"

describe('Testing in <Navbar/>', () => {

    const user = {
        email: 'Walter Francisco',
        pass: '123'
    }
    const dispatch = jest.fn()

    const history = {
        replace: jest.fn(),
        length: 0,
        location: { 
            pathname: '',
            search: '',
            state: '',
            hash: ''
        },
        push: jest.fn(),
        go: jest.fn(),
        goBack: jest.fn(),
        goForward: jest.fn(),
        block: jest.fn(),
        listen: jest.fn(),
        createHref: jest.fn()
    }
    
    let rendered
    beforeEach(() => {
        rendered = mount(
            <AuthContext.Provider value={{user, dispatch}}>
                <MemoryRouter>
                    <Router history={history}>
                        <Navbar/>
                    </Router>
                </MemoryRouter>
            </AuthContext.Provider>
        )
    })

    test('should show correctly', () => {
        expect(rendered.find('.text-white').text().trim()).toBe(user.email)
        expect(rendered).toMatchSnapshot()
    })

    test('should call function handleLogout,throw dispatch and use history for redirect to page login', () => {
        const button = rendered.find('.btn-primary')
        button.simulate('click')

        expect(dispatch).toBeCalled()
        expect(dispatch).toBeCalledTimes(1)
        expect(dispatch).toBeCalledWith({type: 'logout'})
        expect(history.replace).toBeCalledWith('/login')
    })
    
    
})
