import {FC, useState} from 'react';
import {connect} from 'react-redux';
import ColumnAvg from './ColumnAvg';
import RemoveButton from './RemoveButton';
import RowSumCell from './RowSumCell';
import Percentage from './Percentage';
import TableItem from './TableItem';
import styles from '../TableBody/TableBody.module.scss';
import {ICell} from 'function/index';
import {RootState} from 'redux/store';

type ITableBodyProps = {
  columns: number | string;
  rows: number | string;
  cells: number | string;
  matrixRows: Array<Array<ICell>>;
};

const TableBody: FC<ITableBodyProps> = ({columns, rows, cells, matrixRows}) => {
  const [showPercent, setShowPercent] = useState(-1);
  return (
    <tbody>
      {!!matrixRows &&
        matrixRows.map((row, i) => (
          <tr key={JSON.stringify(row)}>
            <td className={styles.banner}>{i + 1}</td>
            {row.map((item) => (
              <td className={styles.tableItem} key={item.Amount}>
                {showPercent === i ? (
                  <Percentage item={item} row={row} />
                ) : (
                  <TableItem item={item} cells={Number(cells)} />
                )}
              </td>
            ))}
            <RowSumCell
              row={row}
              handleMouseEnter={() => setShowPercent(i)}
              handleMouseLeave={() => setShowPercent(-1)}
            />
            <RemoveButton index={i} matrixRows={matrixRows} rows={Number(rows)} />
          </tr>
        ))}
      <ColumnAvg matrixRows={matrixRows} columns={Number(columns)} rows={Number(rows)} />
    </tbody>
  );
};

const mapStateToProps = (state: RootState) => ({
  columns: state.matrix.settings.columns,
  rows: state.matrix.settings.rows,
  cells: state.matrix.settings.cells,
  // arr: state.matrix.arr,
  matrixRows: state.matrix.matrixRows,
  sortedMatrix: state.matrix.sortedMatrix,
});

export default connect(mapStateToProps)(TableBody);
