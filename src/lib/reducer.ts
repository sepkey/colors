type State = {
  hexColor: string;
};

type HexColorAction = {
  type: 'update-hex-color';
  payload: {
    hexColor: string;
  };
};

export const initialState: State = {
  hexColor: '#a2e2c6',
};

export const colorReducer = function (state: State, action: HexColorAction) {
  if ((action.type = 'update-hex-color')) {
    const { hexColor } = action.payload;
    return { ...state, hexColor };
  }
  return state;
};
