import {FC, useEffect, useState} from 'react';
import {sumRowAvg, calcAvgNumbers, ICell} from 'function/index';
import styles from '../TableBody/TableBody.module.scss';

type ColumnAvgProps = {
  columns: number;
  rows: number;
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
            <div className={styles.amountAvg}>{el}</div>
          </td>
        ))}
      {avg && (
        <td className={styles.tableItem}>
          <div className={styles.amountAvg}>{sumRowAvg(avg)}</div>
        </td>
      )}
    </tr>
  );
};

export default ColumnAvg;
