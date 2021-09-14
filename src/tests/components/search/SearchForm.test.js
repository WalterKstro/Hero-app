import { mount } from "enzyme"
import { MemoryRouter, Route } from "react-router"
import SearchForm from "../../../componentes/search/SearchForm"

describe('Testing in <SearchForm/>', () => {

    test('should display correctly', () => {

        const rendered = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={SearchForm} />
            </MemoryRouter>
        )

        expect(rendered).toMatchSnapshot()

    })


    test('should display a result of queryString', () => {
        const rendered = mount(
            <MemoryRouter initialEntries={['/search?q=Superman']}>
                <Route path="/search" component={SearchForm} />
            </MemoryRouter>

        )

        expect(rendered.find('HeroCard').exists()).toBe(true)
        expect(rendered).toMatchSnapshot()
    })

    test('should display an alert if not found a heroe with the queryString', () => {
        const rendered = mount(
            <MemoryRouter initialEntries={['/search?q=superman12']}>
                <Route path="/search" component={SearchForm} />
            </MemoryRouter>
        )
        expect(rendered.find('.alert').exists()).toBe(true)
        expect(rendered).toMatchSnapshot()

    })
    
    
    
})
