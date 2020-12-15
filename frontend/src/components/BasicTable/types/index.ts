export type BasicTableProps = {
    id: string;
    rows:any[];
    columnNames: any;
    loading: boolean;
    setRows: () => void;
    setRow: () => void;
}