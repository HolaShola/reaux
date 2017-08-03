function logger ({ getState }) {
    return function (next) {
        return function (action) {
            console.log('will dispatch', action);
            
            const state = next(action);
    
            console.log('state after dispatch', getState());

            return state;
        }
    }
}

export default logger;