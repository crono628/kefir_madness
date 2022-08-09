function reducer(state, { type, payload }) {
  switch (type) {
    case 'update': {
      return { ...state, [payload.key]: payload.value };
    }
    case 'set_multiple': {
      return { ...state, ...payload };
    }
    case 'clear': {
      return { ...initialState };
    }
    default:
      throw new Error(`Unknown action type: ${type}`);
  }
}

const initialState = {
  grains: 15,
  milk: 240,
  tablespoons: 1,
  cups: 1,
};

export { reducer, initialState };
