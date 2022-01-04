import {FC} from 'react';
import {IForm} from '../../redux/form/interfaces/index';
import styles from '../Form/Form.module.scss';

const FormSettings: FC<IForm> = (props: IForm) => {
  const {rows, columns, cells, setColumns, setCells, setRows} = props;
  return (
    <>
      <div className={styles.formInput}>
        <label className={styles.inputText} htmlFor="/">
          Enter the number of columns
        </label>
        <input
          type="number"
          className={styles.input}
          name="columns"
          min="0"
          value={Number(columns) || ''}
          onChange={(event: any) => setColumns(event.target.value)}
        />
      </div>

      <div className={styles.formInput}>
        <label className={styles.inputText} htmlFor="/">
          Enter the number of rows
        </label>
        <input
          type="number"
          className={styles.input}
          name="rows"
          min="0"
          value={rows || ''}
          onChange={(event: any) => setRows(event.target.value)}
        />
      </div>

      <div className={styles.formInput}>
        <label className={styles.inputText} htmlFor="/">
          Enter the number of cells
        </label>
        <input
          type="number"
          className={styles.input}
          name="cells"
          min="0"
          value={cells || ''}
          onChange={(event: any) => setCells(event.target.value)}
        />
      </div>

      <div className={styles.btnForm}>
        <button className={styles.button} type="submit">
          Create matrix
        </button>
      </div>
    </>
  );
};

export default FormSettings;
