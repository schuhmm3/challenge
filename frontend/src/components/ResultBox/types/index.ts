export type resultBoxProps = {
    title: string;
    data: ChemicalData[]
}

type ChemicalData = {
    id: number;
    patent_number: string;
    patent_title: string;
    chemical_type_1: string;
}