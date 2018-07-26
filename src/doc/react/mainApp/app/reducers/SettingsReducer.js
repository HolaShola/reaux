const initialState = {
  isFetching: false,
  errors: null,
};

export default function FilmsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST_START':
      return {
        ...state,
        isFetching: action.payload,
      };
    case 'FETCH_DATA_REQUEST_FINISH':
      return {
        ...state,
        isFetching: action.payload,
      };
    case 'FETCH_DATA_FAILURE':
      return {
        ...state,
        errors: action.payload,
      };
    default: return state;
  }
}
