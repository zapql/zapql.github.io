const reducer = (state, action) => {
  switch (action.type) {
    case 'setprop1':
      return {
        ...state,
        prop1: action.prop1,
      };
    default:
      throw new Error();
  }
};

export default reducer;
