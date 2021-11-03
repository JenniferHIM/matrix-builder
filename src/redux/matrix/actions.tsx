import types from './types';
import {createMatrix, matrixSort, findNearestCells} from 'function/index';
import {ICell} from 'function/index';

export const setSettings = (settings: {columns: number | string; rows: number | string; cells: number | string}) => {
  const matrix = createMatrix(settings);
  const sortedMatrix = matrixSort(matrix);
  return {
    type: types.SET_SETTINGS,
    payload: {settings, matrix, sortedMatrix},
  };
};

export const incrementCell = (item: ICell) => ({
  type: types.INCREMENT_CELL,
  payload: item,
});
export const deleteRow = (index: number) => ({
  type: types.DELETE_ROW,
  payload: index,
});

export const addRow = (row: Array<Array<ICell>>) => ({
  type: types.ADD_ROW,
  payload: row,
});

export const setNearestCells = (cells: number | string, sortedMatrix: Array<ICell>, item: ICell) => {
  const nearest = findNearestCells(cells, sortedMatrix, item);
  return {
    type: types.SET_NEAREST_CELLS,
    payload: {sortedMatrix, nearest},
  };
};

export const resetNearestCells = () => ({
  type: types.RESET_NEAREST_CELLS,
});

export default {
  addRow,
  deleteRow,
  setSettings,
  incrementCell,
  createMatrix,
  setNearestCells,
  resetNearestCells,
};
