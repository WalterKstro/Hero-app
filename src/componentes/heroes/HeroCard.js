import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"

const HeroCard = ({
    id,
    superhero,
    bgc='rgba(33, 37, 41, .9)'

}) => {
    const ref = useRef(undefined)
    
    useEffect(() => {
        const {current} = ref 
        current.style.setProperty('--bgc-card-hover', bgc);
    }, [bgc])

    return (
        <div className="card animate__animated animate__zoomIn cover_hero" ref={ref}>
            <img src={`${process.env.PUBLIC_URL}/assets/heroes/${id}.jpg`} className="img-fluid card-img-top" alt="..." />
            <div className="card-body cover__overflow">
                <h5 className="card-title text-white bolder">{superhero}</h5>
                <Link to={`hero/${id}`} className="btn btn-light text-bolder">View More</Link>
            </div>
        </div>
    )
}

export default HeroCard

