export type BasicTableProps = {
    data:any[];
    tableColumnTitles: string[];
    tableColumnHeaderTitles: string[];
    onClickTableHeader: () => void;
    onClickTableRow: (patent:string) => void;
    order?:boolean;
    hasActions: boolean;
}