
// global state 
const initialState = {
    counter: 99, 
    isAuthenticated: false, 
    tasks: [], 
    username: ''
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INCREMENT_COUNTER': 
            return {
                ...state, 
                counter: state.counter + 1 
            }
        case 'USER_NAME_SAVED': 
            return {
             ...state, 
             username: action.username 
        } 

        default: {
            return state 
        }
    }

    
    
}

export default reducer 