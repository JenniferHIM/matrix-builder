export interface IForm {
  rows: number | null;
  columns: number | null;
  cells: number | null;
  addInputData?: (event: any) => void;
}
