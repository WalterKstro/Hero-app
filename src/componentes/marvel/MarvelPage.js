import HeroesList from "../heroes/HeroesList"

const MarvelPage = () => {
    return (
        <>
            <div className="my-5 d-flex justify-content-between align-items-center">
                <img src={`${process.env.PUBLIC_URL}/assets/marvel.jpg`} alt="Home" />
                <h3 className="ms-auto">Marvel Universe</h3>
            </div>
            <HeroesList 
                publisher="Marvel Comics"
                bgc="rgba(236, 29, 36,.9)"
            />
        </>
    )
}

export default MarvelPage
