import React from "react";
import PropTypes from "prop-types";

export const BasicTable = ({
    cols,
    data,
    bordered,
    hoverable,
    striped,
    isDark,
}) => {
    return (
        <div className="table-responsive">
            <table
                className={`table ${
                    bordered ? "table-bordered" : "table-borderless"
                } ${hoverable && "table-hover"} ${striped && "table-striped"} ${
                    isDark && "table-dark"
                }`}
            >
                <thead>
                    <tr>
                        {cols.map((headerItem, index) => (
                            <th key={index}>{headerItem.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            {cols.map((col, key) => (
                                <td key={key}>{col.render(item)}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

BasicTable.propTypes = {
    cols: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    bordered: PropTypes.bool,
    hoverable: PropTypes.bool,
    striped: PropTypes.bool,
    isDark: PropTypes.bool,
};

BasicTable.defaultProps = {
    bordered: true,
    hoverable: false,
    striped: true,
    isDark: false,
};
