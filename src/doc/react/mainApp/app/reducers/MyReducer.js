const initialState = {
  first: null,
  second: {
    results: [],
  },
};

export default function MyReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DATA_RECEIVE':
      return {
        ...state,
        second: {
          results: state.second.results.concat(action.payload.results),
        },
      };
    default: return state;
  }
}
