import React from "react";
/**Libraries */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
/**Utils */
import { customIcons } from "constants/icons";
/**Styles */
import "./icon.scss";

const Icon = ({ name, size, color, custom }) => {
    const CustomIcon = name && customIcons[name];
    return name && custom ? (
        CustomIcon && <CustomIcon className="custom-icon" />
    ) : (
        <FontAwesomeIcon
            className="icon"
            icon={name}
            size={size}
            color={color}
        ></FontAwesomeIcon>
    );
};

Icon.propTypes = {
    name: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.arrayOf(PropTypes.string).isRequired,
    ]),
    size: PropTypes.string,
    color: PropTypes.string,
    custom: PropTypes.bool,
};

export default Icon;
