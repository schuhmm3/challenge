export type BasicTableProps = {
    data:any[] | null;
    tableColumnTitles: string[];
    tableColumnHeaderTitles: string[];
    onClickTableHeader: (key:string) => void;
    onClickTableRow: (patent:string) => void;
    order?:boolean;
    hasActions: boolean;
}