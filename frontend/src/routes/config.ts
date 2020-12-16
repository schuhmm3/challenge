/** Pages */
import { Home } from "pages/Home";
/** Types */
import { Routes } from "./types";

const routes: Routes[] = [
    {
        path: "/",
        component: Home,
        exact: true,
    },
];

export { routes };
