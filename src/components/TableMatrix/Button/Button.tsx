import {connect, ConnectedProps} from 'react-redux';
import actions from 'redux/matrix/actions';
import {FC} from 'react';
import styles from '../Button/Button.module.scss';
import cn from 'classnames';
import {RootState} from 'redux/store';

// type IButton = {
//   addRow: Array<number>;
//   matrixRows: Array<Array<ICell>>;
//   arrRow?: Array<ICell>;
// };

const Button: FC<ButtonProps> = ({addRow, matrixRows}) => {
  const handleAddRow = () => {
    addRow(matrixRows);
    console.log(addRow);
  };

  return (
    <div className={styles.btnMatrix}>
      <button className={cn(styles.button, styles.btnAddrow)} type="button" onClick={() => handleAddRow()}>
        Add row
      </button>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  rows: state.matrix.settings.rows,
  matrixRows: state.matrix.matrixRows,
});
const mapDispatchToProps = {
  addRow: actions.addRow,
};

type ButtonProps = ConnectedProps<typeof connector>;
const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(Button);
