import types from './types';
import {randomGenerator, matrixSort} from '../../function/index';
import {MatrixActions, MatrixStore} from './interface';

const initialState: MatrixStore = {
  settings: {
    columns: 0,
    rows: 0,
    cells: 0,
  },
  matrixRows: [],
  sortedMatrix: [],
  nearest: [],
};

export const matrix = (state = initialState, action: MatrixActions) => {
  switch (action.type) {
    case types.SET_SETTINGS:
      return {
        ...state.settings,
        settings: action.payload.settings,
        matrixRows: action.payload.matrix,
        sortedMatrix: action.payload.sortedMatrix,
      };

    case types.CREATE_MATRIX:
      return {...state, matrixRows: [action.payload]};

    case types.INCREMENT_CELL:
      const newMatrixRows = state.matrixRows.map((row) => {
        return row.map((item) => {
          if (item.ID === action.payload.ID) {
            return {...item, Amount: item.Amount + 1};
          }
          return item;
        });
      });
      return {
        ...state,
        matrixRows: newMatrixRows,
        sortedMatrix: [...matrixSort(newMatrixRows)],
      };

    case types.DELETE_ROW:
      const newMatrix = [...state.matrixRows].splice(action.payload, 1);
      return {
        ...state,
        sortedMatrix: [...matrixSort(newMatrix)],
        matrixRows: newMatrix,
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
        sortedMatrix: [...matrixSort([...state.sortedMatrix, arrRow])],
      };

    case types.SET_NEAREST_CELLS:
      return {
        ...state,
        nearest: [...action.payload.nearest],
      };

    case types.RESET_NEAREST_CELLS:
      return {...state, nearest: initialState.nearest};

    default:
      return state;
  }
};

export default matrix;
