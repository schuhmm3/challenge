import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";

export type SearchbarProps = {
    value:string | number;
    placeholder:string;
    onChange: Function;
    iconName?:IconName;
    iconLibrary?: IconPrefix
}
