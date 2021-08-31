import { useEffect, useState } from "react"
import fetchJsonServer from "../helpers/fetchJsonServer"

const useGetHeroesByName = name => {
    const [heroes, setHeroes] = useState([])

    useEffect(() => {
        fetchJsonServer('https://my-json-server.typicode.com/WalterKstro/json-server/heroes')
        .then(response => {
            setHeroes(response)
        })
    }, [name])
    
    return heroes.filter(heroe => heroe.superhero.toLowerCase().includes(name))
}

export default useGetHeroesByName
