import types from './types';
import {ICell} from '../../function/index';

interface ISetSettings {
  type: typeof types.SET_SETTINGS;
  payload: {
    settings: {
      columns: number;
      rows: number;
    };
    matrix: Array<Array<ICell>>;
    sortedMatrix: Array<ICell>;
  };
}
interface ICreateMatrix {
  type: typeof types.CREATE_MATRIX;
  payload: {matrixRows: number};
}
interface IIncrementCell {
  type: typeof types.INCREMENT_CELL;
  payload: {item: number};
}
interface IAddRow {
  type: typeof types.ADD_ROW;
  payload: {row: Array<number>; matrixSort: Array<Array<ICell>>};
}
interface IDeleteRow {
  type: typeof types.DELETE_ROW;
  payload: {index: number};
}
interface ISetNerestCells {
  type: typeof types.SET_NEAREST_CELLS;
  payload: {cell: number};
}
interface IResetNerestCell {
  type: typeof types.RESET_NEAREST_CELLS;
  payload: {cell: number};
}

export type MatrixActions =
  | ISetSettings
  | ICreateMatrix
  | IIncrementCell
  | IAddRow
  | IDeleteRow
  | ISetNerestCells
  | IResetNerestCell;
