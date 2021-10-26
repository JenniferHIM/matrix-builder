import {sumRowNumbers} from 'function/index';
import {FC, useState, useEffect} from 'react';
import {ICell} from 'function/index';
import styles from '../TableBody/TableBody.module.scss';

type IPercentageProps = {
  row: Array<ICell>;
  item: ICell;
};

const Percentage: FC<IPercentageProps> = ({item, row}) => {
  const [sum, setSum] = useState(sumRowNumbers(row));

  useEffect(() => {
    setSum(sumRowNumbers(row));
  }, [row]);

  const percent = ((item.Amount * 100) / sum).toFixed();

  return (
    <div className={styles.percent}>
      <div className={styles.percentText}>{percent}%</div>
      <div className={styles.columnPercent} style={{height: percent + '%'}}></div>
    </div>
  );
};
export default Percentage;
