export interface IForm {
  rows: number | string | null;
  columns: number | string | null;
  cells: number | string | null;
  addInputData?: (event: any) => void;
  setColumns: (event: any) => void;
  setRows: (event: any) => void;
  setCells: (event: any) => void;
}
