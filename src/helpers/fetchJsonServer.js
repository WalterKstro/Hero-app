const fetchJsonServer = async endpoint => {
    try {
        const response = await fetch(endpoint)
        const data = await response.json()
        return data

    } catch (error) {
        return error
    }
}


export default fetchJsonServer