import useForm from '../../hooks/useForm'
import queryString  from 'query-string'
import { useLocation } from 'react-router-dom'
import HeroCard from '../heroes/HeroCard'
import getByName from '../../switcher/getByName'
import { useMemo } from 'react'


const SearchForm = ({history}) => {
    
    const {search} = useLocation()
    const {q=''} = queryString.parse(search);
    const {state,handleChangeInput} = useForm()
    
    const handleSearch = e => {
        e.preventDefault()
        if (state.hasOwnProperty('search')) {
            history.push(`?q=${state.search}`)
        }
    }

    const herosFilteredById = useMemo(() => getByName(q), [q])

    return (
        <>
            <div className="row my-5">
                <div className="col-md-4 offset-md-4">
                <form>
                    <div className="mb-3">
                        <label htmlFor="heroe" className="form-label">Name heroe</label>
                        <input 
                            type="text" 
                            name="search"
                            className="form-control" 
                            id="heroe"
                            value={state.search}
                            onChange = { handleChangeInput }
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-outline-primary"
                        onClick={handleSearch}
                    >Search heroe</button>
                </form>
                </div>
            </div>
            <div className="row">
                <div className="col-12 wrapper_grid">
                    {
                        herosFilteredById.length < 1
                        ?
                            <div className="alert alert-primary alert-wrapper" role="alert">
                                😞 Not found heroes with the name  <strong>{q}</strong>
                            </div>
                        :
                            herosFilteredById.map(heroe => 
                                <HeroCard
                                    key={heroe.id}
                                    id={heroe.id}
                                    superhero={heroe.superhero}
                            />
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default SearchForm
