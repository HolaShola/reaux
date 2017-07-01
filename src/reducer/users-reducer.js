export default function usersReducer(state = [], action) {
    switch(action.type) {
        case 'RECEIVE_DATA':
            return action.payload;
        default:
            return state;        
    }
}