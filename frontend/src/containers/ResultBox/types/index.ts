export type resultBoxProps = {
    title: string;
    data: ChemicalData[];
    type: string;
}

export type ChemicalData = {
    id: number;
    patent_number: string;
    patent_title: string;
    chemical_type: string;
}