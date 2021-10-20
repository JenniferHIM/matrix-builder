import {FC} from 'react';
import {v4 as uuidv4} from 'uuid';

export interface ICell {
  Amount: number;
  ID: string;
}

export const randomGenerator = (): ICell => ({
  Amount: Math.floor(Math.random() * 1000),
  ID: uuidv4(),
});

export const createMatrix = (settings: {columns: number; rows: number}): Array<Array<ICell>> => {
  const arr = new Array(settings.columns * settings.rows).fill(0).map(randomGenerator);
  console.log(arr);

  let matrixRows: ICell[][] = [];
  let start = 0;
  for (let i = 0; i < settings.rows; i++) {
    matrixRows = [...matrixRows, arr.slice(start, settings.columns * (i + 1))];
    start = settings.columns * (i + 1);
  }
  return matrixRows;
};

export const matrixSort = (matrix: Array<Array<ICell>>): Array<ICell> =>
  matrix
    .flat()
    .map((item) => item)
    .sort((a, b) => a.Amount - b.Amount);

export const sumRowNumbers = (row: Array<ICell>): number => {
  return row.reduce((acc, el) => acc + Number(el.Amount), 0);
};

export const sumRowAvg = (avg: Array<number>): number => {
  return avg.reduce((acc, el) => acc + Number(el), 0);
};

export const calcAvgNumbers = (columns: number, rows: number, matrixRows: Array<Array<ICell>>): Array<number> => {
  let columnAvg: Array<number> = [];
  for (let i = 0; i < columns; i++) {
    let acc = 0;
    for (let j = 0; j < rows; j++) {
      acc += matrixRows[j][i].Amount;
    }
    columnAvg = [...columnAvg, Math.round(acc / Number(rows))];
  }
  return columnAvg;
};

export const findNearestCells = (cells: number, sortedMatrix: Array<ICell>, item: ICell): Array<ICell> => {
  const copySortedMatrix = [...sortedMatrix];
  const nearestCells = [];

  for (let i = 0; i < cells; i++) {
    const copySortedMatrixId = copySortedMatrix.map((item) => item.ID);

    if (item) {
      let nearest;
      const itemIndex = copySortedMatrixId.indexOf(item.ID);
      if (itemIndex === 0) {
        nearest = copySortedMatrix[1];
      } else if (itemIndex === copySortedMatrix.length - 1) {
        nearest = copySortedMatrix[copySortedMatrix.length - 2];
      } else {
        const prevEl = copySortedMatrix[itemIndex - 1];
        const nextEl = copySortedMatrix[itemIndex + 1];
        nearest = item.Amount - prevEl.Amount > nextEl.Amount - item.Amount ? nextEl : prevEl;
      }
      copySortedMatrix.splice(copySortedMatrixId.indexOf(nearest.ID), 1);
      nearestCells.push(nearest);
    }
  }
  return nearestCells;
};
