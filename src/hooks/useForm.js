import { useState } from "react"

const useForm = (initialState = {}) => {

    const [state, setState] = useState(initialState)

    const handleChangeInput = ({target}) => { 
        setState({
            ...state,
            [target.name] : target.value
        })
    }
    const handleReset = () => {
        setState(initialState)
    }

    return {
        state,
        handleChangeInput,
        handleReset
    }
}

export default useForm