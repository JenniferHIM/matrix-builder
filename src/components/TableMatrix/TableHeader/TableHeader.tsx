import styles from '../TableHeader/TableHeader.module.scss';

const topCells = (value: string | number) => {
  return (
    <th className={styles.headerItem} key={value}>
      {value}
    </th>
  );
};

const TopUnit = (columns: number) => {
  const banner = [topCells('№')];
  for (let i = 0; i < columns; i++) {
    banner.push(topCells(i + 1));
  }
  banner.push(topCells('Sum'));
  return banner;
};

const TableHeader = ({columns}: {columns: number}) => {
  const banner = TopUnit(columns);
  return (
    <thead className={styles.tableHeader}>
      <tr>{banner}</tr>
    </thead>
  );
};

export default TableHeader;
