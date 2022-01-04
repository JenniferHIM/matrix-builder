import {useState, useEffect, FC} from 'react';
import {sumRowNumbers} from '../../../function/index';
import {ICell} from 'function/index';
import styles from '../TableBody/TableBody.module.scss';
import cn from 'classnames';

type IRowSumCellProps = {
  row: Array<ICell>;
  handleMouseEnter: (event: React.MouseEvent<HTMLElement>) => void;
  handleMouseLeave: (event: React.MouseEvent<HTMLElement>) => void;
};

const RowSumCell: FC<IRowSumCellProps> = ({row, handleMouseEnter, handleMouseLeave}) => {
  const [sum, setSum] = useState(sumRowNumbers(row));

  useEffect(() => {
    setSum(sumRowNumbers(row));
  }, [row]);

  return (
    <td className={styles.tableItem} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={cn(styles.amount, styles.sum)}>{sum}</div>
    </td>
  );
};

export default RowSumCell;
