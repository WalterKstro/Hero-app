import authReducer from "../../auth/authReducer"

describe('Testing auth reducer', () => {
    test('should return one default state', () => {

        const state = authReducer({logged: true},{})
        expect(state).toEqual({logged: true})

    })


    test('should authenticated with one action and change the default state', () => {
        const action = {
            type: 'loggin',
            payload: {
                email: 'Walter',
                pass: '123'
            }
        }

        const state = authReducer({}, action)
        expect({...action.payload, logged: true}).toEqual(state)

    })
    
    test('should logout, delete user and set logged on false', () => {
        const state = authReducer({email: 'Walter',pass: '123'}, {type: 'logout'})
        expect({ logged: false }).toEqual(state)
    })
    
      
})
