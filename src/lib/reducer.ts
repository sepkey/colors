import { rgb } from 'color-convert';

// type HexColor = `#${string}`;
//alternative
//usefull for data getting back from API
// const isHexColor = (s: string): s is HexColor => s.startsWith('#');
// type RGBString = `rgb(${number},${number},${number})`;
// type ColorFormats = 'rgb' | 'hex' | 'hsv' | 'hsl';
// type ActionTypes = `update-${ColorFormats}-color`;

type State = {
  hexColor: string;
};

type UpdateHexColorAction = {
  type: 'update-hex-color';
  payload: {
    hexColor: string;
  };
};

type UpdateRgbColorAction = {
  type: 'update-rgb-color';
  payload: {
    rgb: [number, number, number];
  };
};

export const initialState: State = {
  hexColor: '#a2e2c6',
};

export type AdjustColorActions = UpdateHexColorAction | UpdateRgbColorAction;
export const colorReducer = function (state: State, action: AdjustColorActions) {
  if (action.type === 'update-hex-color') {
    const { hexColor } = action.payload;
    return { ...state, hexColor };
  }
  if (action.type === 'update-rgb-color') {
    const hexColor = '#' + rgb.hex(action.payload.rgb); //stupid solution
    // const hexColor = rgb.hex(action.payload.rgb);

    return { ...state, hexColor };
  }
  return state;
};
