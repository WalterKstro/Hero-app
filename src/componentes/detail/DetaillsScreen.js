import { Redirect, useParams } from 'react-router-dom'
import HeroCardDetail from './HeroCardDetail'
import getById from '../../switcher/getById';
const DetaillsScreen = ({history}) => {
    
    const {id_hero} = useParams()
    
    const currentHero = getById(id_hero)
    const objectBack = {'back': history.goBack, 'length' : history.length, 'push': history.push}
    
    if(!currentHero) {
        return <Redirect to="/"/>
    }

    return (
        <>
        {
            <HeroCardDetail
                {...currentHero}
                {...objectBack}
            />
        }
        </>
    )
}

export default DetaillsScreen
