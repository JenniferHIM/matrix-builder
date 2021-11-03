import {v4 as uuidv4} from 'uuid';

export interface ICell {
  Amount: number;
  ID: string;
}

export const randomGenerator = (): ICell => ({
  Amount: Math.floor(Math.random() * 1000),
  ID: uuidv4(),
});

export const createMatrix = (settings: {columns: number | string; rows: number | string}): Array<Array<ICell>> => {
  const arr = new Array(Number(settings.columns) * Number(settings.rows)).fill(0).map(randomGenerator);
  console.log(arr);

  let matrixRows: ICell[][] = [];
  let start = 0;
  for (let i = 0; i < settings.rows; i++) {
    matrixRows = [...matrixRows, arr.slice(start, Number(settings.columns) * (i + 1))];
    console.log(matrixRows);
    start = Number(settings.columns) * (i + 1);
    console.log(start);
  }
  return matrixRows;
};
console.log(createMatrix);

export const matrixSort = (matrix: Array<Array<ICell>>): Array<ICell> =>
  matrix
    .flat()
    .map((item) => item)
    .sort((a, b) => a.Amount - b.Amount);
console.log(matrixSort);

export const sumRowNumbers = (row: Array<ICell>): number => {
  return row.reduce((acc, el) => acc + Number(el.Amount), 0);
};
console.log(sumRowNumbers);

export const sumRowAvg = (avg: Array<number>): number => {
  return avg.reduce((acc, el) => acc + Number(el), 0);
};
console.log(sumRowAvg);

export const calcAvgNumbers = (
  columns: number | string,
  rows: number | string,
  matrixRows: Array<Array<ICell>>
): Array<number> => {
  let columnAvg: Array<number> = [];
  for (let i = 0; i < columns; i++) {
    let acc = 0;
    for (let j = 0; j < rows; j++) {
      acc += matrixRows[j][i].Amount;
      console.log(acc);
    }
    columnAvg = [...columnAvg, Math.round(acc / Number(rows))];
    console.log(columnAvg);
  }
  return columnAvg;
};

console.log(calcAvgNumbers);

export const findNearestCells = (cells: number | string, sortedMatrix: Array<ICell>, item: ICell): Array<ICell> => {
  const copySortedMatrix = [...[], ...sortedMatrix];
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

console.log(findNearestCells);
