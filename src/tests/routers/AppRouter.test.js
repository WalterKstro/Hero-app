import { mount } from "enzyme"
import AuthContext from "../../auth/AuthContext"
import AppRouter from "../../routers/AppRouter"

describe('Testing the <AppRouter/>', () => {

    test("should show the page login, if it's authenticated", () => {
        const user = {logged: false}
        const action = jest.fn()

        const rendered = mount(
            <AuthContext.Provider value={{user,action}}>
                <AppRouter/>
            </AuthContext.Provider>
        )

        expect(rendered.find('input').length).toBe(2)
        expect(rendered).toMatchSnapshot()
    })


    test("should show the page home if it's authenticated", () => {
        const user = {
            logged: true,
            email: 'Walter',
            pass: '123'
        }
        const action = jest.fn()

        const rendered = mount(
            <AuthContext.Provider value={{user,action}}>
                <AppRouter/>
            </AuthContext.Provider>
        )
        
        expect(rendered.find('h1').text()).toBe('Frontend Developer')
        expect(rendered).toMatchSnapshot()
    })
    
    
})
