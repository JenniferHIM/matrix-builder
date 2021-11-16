import {connect, ConnectedProps} from 'react-redux';
import {FC} from 'react';
import cn from 'classnames';
import actions from 'redux/matrix/actions';
import {ICell} from 'function';
import {RootState} from 'redux/store';
import styles from '../TableBody/TableBody.module.scss';

type ITableItemProps = ConnectedProps<typeof connector> & {item: ICell; cells: number | string};

const TableItem: FC<ITableItemProps> = ({
  item,
  cells,
  sortedMatrix,
  incrementCell,
  setNearestCells,
  resetNearestCells,
  nearest,
}) => {
  const onClickItem = () => {
    if (item.Amount < 999) {
      incrementCell(item);
      handleMouseEnter();
    }
  };

  const handleMouseEnter = () => {
    setNearestCells(cells, sortedMatrix, item);
  };

  const handleMouseLeave = () => {
    resetNearestCells();
  };

  return (
    <div
      className={cn(styles.amount, {[styles.nearestItem]: nearest && nearest.includes(item)})}
      onClick={onClickItem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item.Amount}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  nearest: state.matrix.nearest,
  sortedMatrix: state.matrix.sortedMatrix,
});

const mapDispatchToProps = {
  incrementCell: actions.incrementCell,
  setNearestCells: actions.setNearestCells,
  resetNearestCells: actions.resetNearestCells,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(TableItem);
