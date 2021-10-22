import types from './types';
import {ICell} from '../../function/index';

export type MatrixStore = {
  settings: {
    columns: number;
    rows: number;
    cells: number;
  };
  matrixRows: Array<Array<ICell>>;
  sortedMatrix: Array<ICell>;
  nearest?: Array<ICell>;
};
interface ISetSettings {
  type: typeof types.SET_SETTINGS;
  payload: {
    settings: {
      columns: number;
      rows: number;
      cells: number;
    };
    matrix: Array<Array<ICell>>;
    sortedMatrix: Array<ICell>;
  };
}
interface ICreateMatrix {
  type: types.CREATE_MATRIX;
  payload: Array<ICell>;
}
interface IIncrementCell {
  type: types.INCREMENT_CELL;
  payload: ICell;
}
interface IAddRow {
  type: types.ADD_ROW;
  payload: Array<number>;
}
interface IDeleteRow {
  type: types.DELETE_ROW;
  payload: number;
}
interface ISetNerestCells {
  type: types.SET_NEAREST_CELLS;
  payload: {sortedMatrix: Array<ICell>; nearest: Array<ICell>};
}
interface IResetNerestCell {
  type: types.RESET_NEAREST_CELLS;
  payload: {cell: Array<number>};
}

export type MatrixActions =
  | ISetSettings
  | ICreateMatrix
  | IIncrementCell
  | IAddRow
  | IDeleteRow
  | ISetNerestCells
  | IResetNerestCell;
