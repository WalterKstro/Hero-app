const authReducer = (state={}, action) => {
    
    switch (action.type) {
        case 'loggin':{
            return {
                ...action.payload,
                logged: true
            }
        }
        case 'logout':{
            return {
                logged: false
            }
        }
    
        default:
            return state
    }
}

export default authReducer
