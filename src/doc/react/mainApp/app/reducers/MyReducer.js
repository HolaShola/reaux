const initialState = {
  first: null,
  second: {},
};

export default function MyReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DATA_RECEIVE':
      return {
        ...state,
        second: action.payload,
      };
    default: return state;
  }
}
