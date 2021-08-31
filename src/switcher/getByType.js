import heroes from "../helpers/data"

const getByType = (publisher) => {
    const categories = ['DC Comics','Marvel Comics']
    if( categories.includes(publisher) ) {
        return heroes.filter(heroe => heroe.publisher === publisher)
    }else{
        throw new Error(`Type ${publisher} not found`)
    }
}

export default getByType
