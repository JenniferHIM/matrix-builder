import {connect} from 'react-redux';
import {FC} from 'react';
import TableHeader from './TableHeader/TableHeader';
import TableBody from './TableBody';
import Button from './Button/Button';
import {RootState} from 'redux/store';
import styles from './TableBody/TableBody.module.scss';

type ITableMatrixProps = {
  settings: {
    columns: number | string;
    rows: number | string;
    cells: number | string;
  };
};

const TableMatrix: FC<ITableMatrixProps> = ({settings}) => {
  return (
    <div className={styles.table}>
      {settings.columns && settings.rows && settings.cells && <Button />}
      <table className={styles.tableMatrix}>
        {settings.columns && settings.rows && settings.cells && (
          <>
            <TableHeader {...settings} />
            <TableBody />
          </>
        )}
      </table>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  settings: state.matrix.settings,
});

export default connect(mapStateToProps)(TableMatrix);
