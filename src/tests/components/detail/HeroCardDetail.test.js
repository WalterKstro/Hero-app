import { shallow } from "enzyme"
import HeroCardDetail from "../../../componentes/detail/HeroCardDetail"

describe('Testing <HeroCardDetail/>', () => {

    let props = undefined
    let rendered = undefined
    
    beforeEach(() => {
        props = {
            alter_ego: "Bruce Wayne",
            characters: "Bruce Wayne",
            first_appearance: "Detective Comics #27",
            id: "dc-batman",
            publisher: "DC Comics",
            superhero: "Batman",
            back : jest.fn(),
            length : 1,
            push : jest.fn()
        }

        rendered = shallow(
            <HeroCardDetail {...props} />
        )
    })

    test('should show correctly', () => {
        expect(rendered).toMatchSnapshot()
    })


    test('should return to home page with the method push()', () => {

        rendered.find('.btn-outline-primary').simulate('click')
        expect(props.push).toHaveBeenCalledWith('/')
        expect(props.back).not.toHaveBeenCalled()

    })

    test('should return to back with the method back()', () => {

        props = {...props, length : 10}
        const rendered = shallow(
            <HeroCardDetail {...props} />
        )

        rendered.find('.btn-outline-primary').simulate('click')

        expect(props.back).toBeCalledTimes(1)
        expect(props.back).toBeCalledWith()
        expect(props.push).not.toHaveBeenCalled()
        
    })
    
    
})
