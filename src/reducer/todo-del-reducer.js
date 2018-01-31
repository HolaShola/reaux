export default function TodoDelReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                action.payload
            ]
            
        default: return state;     
    }
}