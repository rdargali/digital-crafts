
// global state 
const initialState = {
    counter: 99, 
    isAuthenticated: false, 
    tasks: [] 
}

const reducer = (state = initialState, action) => {
    
    if(action.type === 'INCREMENT_COUNTER') {
        return {
            ...state, 
            counter: state.counter + 1 
        }
    } else if(action.type === 'DECREMENT_COUNTER') {
        return {
            ...state,
            counter: state.counter - 1
        } 
    
    }
    return state 
}

export default reducer 