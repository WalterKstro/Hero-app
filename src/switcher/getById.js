import heroes from "../helpers/data"

const getById = (id) => {
    return heroes.find(heroe => heroe.id === id)
}

export default getById
