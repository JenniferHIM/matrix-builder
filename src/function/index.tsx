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

  let matrixRows: ICell[][] = [];
  let start = 0;
  for (let i = 0; i < settings.rows; i++) {
    matrixRows = [...matrixRows, arr.slice(start, Number(settings.columns) * (i + 1))];
    start = Number(settings.columns) * (i + 1);
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
    }
    columnAvg = [...columnAvg, Math.round(acc / Number(rows))];
  }
  return columnAvg;
};

export const findNearestCells = (cells: number | string, sortedMatrix: Array<ICell>, item: ICell): Array<ICell> => {
  const copySortedMatrix = [...[], ...sortedMatrix];
  const nearestCells = [];

  for (let i = 0; i < cells; i++) {
    if (i >= sortedMatrix.length - 1) {
      break;
    }
    const copySortedMatrixId = copySortedMatrix.map((item) => item.ID);

    if (item) {
      let nearest;
      const itemIndex = copySortedMatrixId.indexOf(item.ID);
      if (itemIndex === 0) {
        nearest = copySortedMatrix[i + 1];
      } else if (itemIndex === copySortedMatrix.length - 1) {
        nearest = copySortedMatrix[copySortedMatrix.length - i - 2];
      } else {
        const prevEl = copySortedMatrix[itemIndex - 1];
        const nextEl = copySortedMatrix[itemIndex + 1];
        // const currentItem = copySortedMatrix[itemIndex];
        // const prevDiff = Math.abs(currentItem.Amount - prevEl.Amount);
        // const nextDiff = Math.abs(nextEl.Amount - currentItem.Amount);
        // nearest = prevDiff < nextDiff ? prevEl : nextEl;
        nearest = item.Amount - prevEl.Amount > nextEl.Amount - item.Amount ? nextEl : prevEl;
      }
      copySortedMatrix.splice(copySortedMatrixId.indexOf(nearest.ID), 1);
      // copySortedMatrix.filter((item) => item.ID);
      nearestCells.push(nearest);
    }
  }
  return nearestCells;
};
