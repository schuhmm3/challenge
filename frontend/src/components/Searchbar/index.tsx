import React from "react";
/**Libraries */
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/** Types */
import { SearchbarProps} from "./types";
/** Style */
import "./style/searchbar.scss";

export const Searchbar = (
    { value, placeholder, onChange, iconName } : SearchbarProps) => {
    return(
        <div className="searchbar">
            <input
                type="text"
                name="search"
                className="searchbar__input"
                placeholder={placeholder}
                value={value}
                onChange={e => onChange(e.target.value)}
                data-testid="search-input"
            />
            <span className="search-icon">
                {iconName && (
                    <FontAwesomeIcon
                        icon={faSearch}
                    ></FontAwesomeIcon>
                )}
            </span>
        </div>
    )
}
