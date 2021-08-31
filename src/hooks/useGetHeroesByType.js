import { useEffect, useState } from "react"
import fetchJsonServer from "../helpers/fetchJsonServer"

const useGetHeroesByType = type => {
    const [comics, setComics] = useState([])
    const filterComics = ['DC Comics','Marvel Comics']

    useEffect(() => {
        fetchJsonServer('https://my-json-server.typicode.com/WalterKstro/json-server/heroes')
        .then(response => {
            setComics(response)
        })
    }, [])

    if( !filterComics.includes(type) ) {
        throw new Error(`Type ${type} not found`)
    }
    
    return comics.filter(comic => comic.publisher === type)
}

export default useGetHeroesByType
