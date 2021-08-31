import heroes from "../helpers/data"

const getByName = (superhero) => {
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(superhero.toLowerCase()))
}

export default getByName
