export type BasicTableProps = {
    data: any[];
    tableColumnTitles: string[];
    onClickTableHeader: (objectProperty:string) => void;
    onClickTableRow: (patent:string) => void;
    orderParam?: string;
    isOrdered?: boolean;
    hasActions: boolean;
    objectProperties: string[];
}