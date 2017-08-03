import data from '../data.json';

function dataLoadingMiddleware({ getState, dispatch }) {
    return function (next) {
        return function (action) {
            if (action.type === 'LOAD_DATA') {
                loadData().then(data => {
                    dispatch({ type: 'RECEIVE_DATA', payload: data })
                });
            }

            return next(action);
        }
    }
}

function loadData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(data), 3000)
    });
}

export default dataLoadingMiddleware;