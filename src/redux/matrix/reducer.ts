import types from './types';
import {randomGenerator, matrixSort} from '../../function/index';
import {MatrixActions} from './interface';

const initialState = {
  settings: {
    columns: '',
    rows: '',
    cells: '',
  },
  matrixRows: [],
  sortedMatrix: [],
  nearest: [],
};

export const matrix = (state = initialState, {type, payload}: MatrixActions) => {
  switch (type) {
    case types.SET_SETTINGS:
      return {
        ...state.settings,
        settings: payload.settings,
        matrixRows: payload.matrix,
        sortedMatrix: payload.sortedMatrix,
      };

    case types.CREATE_MATRIX:
      return {...state, matrixRows: [...payload]};

    case types.INCREMENT_CELL:
      const newMatrixRows = state.matrixRows.map((row) => {
        return row.map(item => {
          if (item.ID === payload.ID) {
            item.Amount += 1;
            return item;
          }
          return item;
        });
      });
      return {
        ...state,
        matrixRows: newMatrixRows,
        sortedMatrix: [...matrixSort([...state.sortedMatrix])],
      };

    case types.DELETE_ROW:
      return {
        ...state,
        sortedMatrix: [
          ...matrixSort([
            ...state.sortedMatrix.filter((el) => state.matrixRows[payload].every((element) => element.ID !== el.ID)),
          ]),
        ],
        matrixRows: state.matrixRows.filter((el, index) => index !== payload),
        settings: {...state.settings, rows: state.settings.rows - 1},
      };

    case types.ADD_ROW:
      const arrRow = new Array(state.settings.columns * 1).fill(0).map(() => {
        return randomGenerator();
      });
      return {
        ...state,
        settings: {...state.settings, rows: state.settings.rows + 1},
        matrixRows: [...state.matrixRows, arrRow],
        sortedMatrix: [...matrixSort([...state.sortedMatrix, ...arrRow])],
      };

    case types.SET_NEAREST_CELLS:
      return {
        ...state,
        nearest: [...payload.nearest],
      };

    case types.RESET_NEAREST_CELLS:
      return {...state, nearest: initialState.nearest};

    default:
      return state;
  }
};

export default matrix;
