import styles from '../TableHeader/TableHeader.module.scss';

const topCells = (value: string | number) => {
  return (
    <th className={styles.headerItem} key={value}>
      {value}
    </th>
  );
};

const topUnit = (columns: number) => {
  let banner = [topCells('№')];

  for (let i = 0; i < columns; i++) {
    banner = [...banner, topCells(i + 1)];
  }
  banner = [...banner, topCells('Sum')];
  return banner;
};

const TableHeader = ({columns}: {columns: number}) => {
  const banner = topUnit(columns);
  return (
    <thead className={styles.tableHeader}>
      <tr>{banner}</tr>
    </thead>
  );
};

export default TableHeader;
