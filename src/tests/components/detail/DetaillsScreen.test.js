import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router"
import DetaillsScreen from "../../../componentes/detail/DetaillsScreen"
import Error404Page from "../../../componentes/error404/Error404Page"

describe('Testing in componente <DetaillsScreen/>', () => {
    
    const history = {
        goBack : jest.fn(),
        push : jest.fn(),
        length : 1 
    }


    test('should display the component <Redirect/> and redirect to home, if not found an heroe', () => {
        const rendered = mount(
            <MemoryRouter initialEntries={['/heroe']}>
                <DetaillsScreen history={history}/>
            </MemoryRouter>
        )
        expect(rendered).toMatchSnapshot()
        expect(rendered.find('Redirect').exists()).toBe(true)
    })
    
    test('should display the component <Error404Page/> if the URL is invalid', () => {
        const urlInvalid = 'asdf456we'
        const rendered = mount(
            <MemoryRouter initialEntries={[`${urlInvalid}`]}>
                <Route component={ Error404Page }/>
            </MemoryRouter>
        )
        
        expect(rendered).toMatchSnapshot()
        expect(rendered.find('h1').exists()).toBe(true)
        expect(rendered.find('h1').text()).toBe('Error 404 Page not Found')
    })


    test('should found an heroe if exist param and it is found a heroe in the consult', () => {
        const id_heroe = 'dc-batman'

        const rendered = mount(
            <MemoryRouter initialEntries={[`/hero/${id_heroe}`]}>
                <Route path="/hero/:id_hero" component={DetaillsScreen}/>
            </MemoryRouter>
        )
        expect(rendered.find('.btn-outline-primary').exists()).toBe(true)
    })
    
    
})
