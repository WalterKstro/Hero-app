import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom"
import PrivateRouter from "../../routers/PrivateRouter"


describe('Testing in <PrivateRouter/>', () => {

    const props = {
        location: {
            pathname: "/" 
        }
    }
    Storage.prototype.setItem = jest.fn()

    let rendered = undefined
    beforeEach(() => {
        rendered = mount(
            <MemoryRouter>
                <PrivateRouter
                    isAuthenticated = {true}
                    component = {() =><span>Hi</span>}
                    {...props}
                />
            </MemoryRouter>
            )
    })

    test("should show the componente if it's authenticated", () => {
            expect(rendered.exists('span')).toBe(true)
    })

    test('should call the localStorage with params', () => {
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', props.location.pathname)
    })

    
    test("should block the componente if it's not authenticated", () => {
        const rendered = mount(
            <MemoryRouter>
                <PrivateRouter
                    isAuthenticated = {false}
                    component = {() =><span>Hi</span>}
                    {...props}
                />
            </MemoryRouter>
            )
        
        expect(rendered.contains(<span>Hi</span>)).toBe(false)
    })
    

})
