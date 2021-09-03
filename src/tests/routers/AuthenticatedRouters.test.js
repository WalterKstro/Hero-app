import { mount, shallow } from "enzyme"
import { MemoryRouter } from "react-router"
import AuthContext from "../../auth/AuthContext"
import AuthenticatedRouters from "../../routers/AuthenticatedRouters"

describe('Testing in <AuthenticatedRouters/>', () => {


    test('should show correctly', () => {
        const user = {
            email: 'Walter Francisco',
            pass: '123'
        }
        const action = jest.fn()

        const rendered = mount(
            <MemoryRouter>
                <AuthContext.Provider value={{user, action}}>
                    <AuthenticatedRouters/>
                </AuthContext.Provider>
            </MemoryRouter>
        )
        expect(rendered.find('.text-white').text()).toBe(user.email)
        expect(rendered).toMatchSnapshot()
    })
    
})
