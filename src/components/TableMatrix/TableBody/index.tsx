import {FC, useState} from 'react';
import {connect} from 'react-redux';
import ColumnAvg from './ColumnAvg';
import RemoveButton from './RemoveButton';
import styles from '../TableBody/TableBody.module.scss';
import {ICell} from '../../../function/index';
import {RootState} from 'redux/store';

type ITableBodyProps = {
  columns: number;
  rows: number;
  matrixRows: Array<Array<ICell>>;
};

const TableBody: FC<ITableBodyProps> = ({columns, rows, matrixRows}: ITableBodyProps) => {
  return (
    <tbody>
      {!!matrixRows &&
        matrixRows.map((row, i) => (
          <tr key={JSON.stringify(row)}>
            <td className={styles.banner}>{i + 1}</td>
            <RemoveButton index={i} matrixRows={matrixRows} rows={rows} />
          </tr>
        ))}
      <ColumnAvg matrixRows={matrixRows} columns={columns} rows={rows} />
    </tbody>
  );
};

const mapStateToProps = (state: RootState) => ({
  columns: state.matrix.settings.columns,
  rows: state.matrix.settings.rows,
  // cells: state.matrix.settings.cells,
  // arr: state.matrix.arr,
  matrixRows: state.matrix.matrixRows,
  // sortedMatrix: state.matrix.sortedMatrix,
});

export default connect(mapStateToProps)(TableBody);
