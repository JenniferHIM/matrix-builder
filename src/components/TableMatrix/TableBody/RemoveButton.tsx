import actions from 'redux/matrix/actions';
import {FC} from 'react';
import {connect} from 'react-redux';
import styles from '../TableBody/TableBody.module.scss';
import {ICell} from 'function/index';

type RemoveButtonProps = {
  index: number;
  deleteRow: (param: any) => void;
  rows: number | string;
  matrixRows?: Array<Array<ICell>>;
};

const RemoveButton: FC<RemoveButtonProps> = ({index, deleteRow}: RemoveButtonProps) => {
  const removeRow = () => {
    deleteRow(index);
  };

  console.log(removeRow);

  return (
    <td className={styles.banner}>
      <button className={styles.removeButton} type="submit" onClick={() => removeRow()}>
        x
      </button>
    </td>
  );
};

const mapDispatchToProps = {
  deleteRow: actions.deleteRow,
};

export default connect(null, mapDispatchToProps)(RemoveButton);
