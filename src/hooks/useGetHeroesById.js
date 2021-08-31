import { useEffect, useState } from "react"
import fetchJsonServer from "../helpers/fetchJsonServer"

const useGetHeroesById = id => {
    const [comic, setComic] = useState({})
    
    useEffect(() => {
        fetchJsonServer('https://my-json-server.typicode.com/WalterKstro/json-server/heroes')
        .then( response => {
            setComic(response.find( comic => comic.id === id ))
        })
    }, [id])

    return comic
}

export default useGetHeroesById
