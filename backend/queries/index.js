const QUERY_SEARCH_BY_CHEMICAL_NAME_DOCS = 'SELECT chemical_type, COUNT(DISTINCT patent_number) as docs FROM chemical_type_1 WHERE chemical_type LIKE "%"?"%" GROUP BY chemical_type';
const QUERY_SEARCH_BY_CHEMICAL_NAME_DOCS_2 = 'SELECT chemical_type, COUNT(DISTINCT patent_number) as docs FROM chemical_type_2 WHERE chemical_type LIKE "%"?"%" GROUP BY chemical_type';
const QUERY_GET_ALL_DOCS_BY_CHEMICAL_TYPE_1 = 'select * FROM chemical_type_1 WHERE chemical_type = ?';
const QUERY_GET_ALL_DOCS_BY_CHEMICAL_TYPE_2 = 'select * FROM chemical_type_2 WHERE chemical_type = ?';
const QUERY_GET_ALL_CHEMICAL_DATA = "SELECT * FROM chemical_type_1 UNION SELECT * FROM chemical_type_2";

module.exports = {
    QUERY_SEARCH_BY_CHEMICAL_NAME_DOCS,
    QUERY_SEARCH_BY_CHEMICAL_NAME_DOCS_2,
    QUERY_GET_ALL_DOCS_BY_CHEMICAL_TYPE_1,
    QUERY_GET_ALL_DOCS_BY_CHEMICAL_TYPE_2,
    QUERY_GET_ALL_CHEMICAL_DATA
}