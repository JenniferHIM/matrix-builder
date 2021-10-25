import {useState, useEffect, FC} from 'react';
import {sumRowNumbers} from '../../../function/index';
import {ICell} from '../../../function/index';
import styles from '../TableBody/TableBody.module.scss';

type RowSumCellProps = {
  row: Array<ICell>;
  handleMouseEnter: (param: any) => void;
  handleMouseLeave: (param: any) => void;
};

const RowSumCell: FC<RowSumCellProps> = ({row, handleMouseEnter, handleMouseLeave}: RowSumCellProps) => {
  const [sum, setSum] = useState(sumRowNumbers(row));

  useEffect(() => {
    setSum(sumRowNumbers(row));
  }, [row]);

  return (
    <td className={styles.tableItem} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={styles.amountSum}>{sum}</div>
    </td>
  );
};

export default RowSumCell;
