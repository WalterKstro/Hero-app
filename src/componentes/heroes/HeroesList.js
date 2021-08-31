import HeroCard from "./HeroCard"
import getByType from "../../switcher/getByType";
import { useMemo } from "react";

const HeroesList = ({publisher,bgc})  => {
    
    const heroes = useMemo(() => getByType(publisher), [publisher]) 
    return (
        <div className="wrapper_grid">
            {
                heroes.map( heroe => 
                    <HeroCard
                    key={heroe.id}
                    bgc={bgc}
                    {...heroe}/>
                )
            }
        </div>
    )
}

export default HeroesList
