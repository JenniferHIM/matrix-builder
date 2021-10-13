import {FC} from 'react';
import {v4 as uuidv4} from 'uuid';

interface IMatrix {
  rows: number;
  columns: number;
}

export const randomGenerator = () => ({
  Amount: Math.floor(Math.random() * (999 - 100 + 1)) + 100,
  ID: uuidv4(),
});

export const createMatrix: FC<IMatrix> = (props: IMatrix) => {
  const {rows, columns} = props;
  if (columns && rows) {
    const arr = new Array(columns * rows).fill(0).map((el, i) => {
      return randomGenerator();
    });
    console.log(arr);

    let matrixRows= [];
    let start = 0;
    for (let i = 0; i < rows; i++) {
      matrixRows = [...matrixRows, arr.slice(start, columns * (i + 1))];
      start = columns * (i + 1);
    }
    return matrixRows;
  }
};

export const matrixSort = (matrix) =>
  matrix
    .flat()
    .map((item) => item)
    .sort((a, b) => a.Amount - b.Amount);

export const sumRowNumbers = (row) => {
  return row.reduce((acc, el) => acc + Number(el.Amount), 0);
};

export const sumRowAvg = (avg) => {
  return avg.reduce((acc, el) => acc + Number(el), 0);
};
