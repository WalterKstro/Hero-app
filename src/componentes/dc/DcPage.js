import HeroesList from "../heroes/HeroesList"

const DcPage = () => {    
    return (
        <>
            <div className="my-5 d-flex justify-content-between align-items-center">
                <img src="https://www.dccomics.com/sites/all/themes/dc_comics_bp/logo.png" alt="Home" />
                <h3>DC Universe</h3>
            </div>
            <HeroesList 
                publisher='DC Comics'
                bgc="rgba(0, 169, 217,.9)"
            />
        </>
    )
}

export default DcPage
