import types from './types';
import {createMatrix} from '../../function/index';

export const setSettings = (settings) => {
  const matrix = createMatrix(settings);
  const sortedMatrix = matrixSort(matrix);
  return {
    type: types.SET_SETTINGS,
    payload: {settings, matrix},
  };
};

export const incrementCell = (item: number) => ({
  type: types.INCREMENT_CELL,
  payload: item,
});
export const deleteRow = (index: number) => ({
  type: types.DELETE_ROW,
  payload: index,
});
export const addRow = (row: number[]) => ({
  type: types.ADD_ROW,
  payload: row,
});

export default {
  addRow,
  deleteRow,
  setSettings,
  incrementCell,
  createMatrix,
};
