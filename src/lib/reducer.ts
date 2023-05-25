import { rgb, hsl, hsv, cmyk } from 'color-convert';

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

type UpdateHslColorAction = {
  type: 'update-hsl-color';
  payload: {
    hsl: [number, number, number];
  };
};

type UpdateHsvColorAction = {
  type: 'update-hsv-color';
  payload: {
    hsv: [number, number, number];
  };
};

type UpdateCmykColorAction = {
  type: 'update-cmyk-color';
  payload: {
    cmyk: [number, number, number, number];
  };
};

export const initialState: State = {
  hexColor: '#a2e2c6',
};

export type AdjustColorActions =
  | UpdateHexColorAction
  | UpdateRgbColorAction
  | UpdateHslColorAction
  | UpdateHsvColorAction
  | UpdateCmykColorAction;

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
  if (action.type === 'update-hsl-color') {
    const hexColor = '#' + hsl.hex(action.payload.hsl);

    return { ...state, hexColor };
  }
  if (action.type === 'update-hsv-color') {
    const hexColor = '#' + hsv.hex(action.payload.hsv);
    return { ...state, hexColor };
  }
  if (action.type === 'update-cmyk-color') {
    const hexColor = '#' + cmyk.hex(action.payload.cmyk);
    return { ...state, hexColor };
  }
  return state;
};
