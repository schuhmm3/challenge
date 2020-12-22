export type BasicTableProps = {
    data:any[];
    tableColumnTitles: string[];
    tableColumnHeaderTitles: string[];
    onClickTableHeader: (key:string) => void;
    onClickTableRow: (patent:string) => void;
    order?:boolean;
    hasActions: boolean;
}