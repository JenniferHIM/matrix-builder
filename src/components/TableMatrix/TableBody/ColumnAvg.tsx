import {FC, useEffect, useState} from 'react';
import {sumRowAvg, calcAvgNumbers, ICell} from 'function/index';
import styles from '../TableBody/TableBody.module.scss';
import cn from 'classnames';

type ColumnAvgProps = {
  columns: number | string;
  rows: number | string;
  matrixRows: Array<Array<ICell>>;
};

const ColumnAvg: FC<ColumnAvgProps> = ({columns, rows, matrixRows}) => {
  const [avg, setAvg] = useState<Array<number>>();

  useEffect(() => {
    if (matrixRows) {
      const calc = calcAvgNumbers(columns, rows, matrixRows);
      setAvg(calc);
    }
  }, [columns, rows, matrixRows]);

  return (
    <tr>
      <td className={styles.banner}>Avg</td>
      {avg &&
        avg.map((el, index) => (
          <td className={styles.tableItem} key={index}>
            <div className={cn(styles.amount, styles.avg)}>{el}</div>
          </td>
        ))}
      {avg && (
        <td className={styles.tableItem}>
          <div className={cn(styles.amount, styles.avg)}>{sumRowAvg(avg)}</div>
        </td>
      )}
    </tr>
  );
};

export default ColumnAvg;
