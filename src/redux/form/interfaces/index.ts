export interface IForm {
  rows: number | null;
  columns: number | null;
  cells: number | null;
  addInputData?: (event: any) => void;
  setColumns: (event: any) => void;
  setRows: (event: any) => void;
  setCells: (event: any) => void;
}
