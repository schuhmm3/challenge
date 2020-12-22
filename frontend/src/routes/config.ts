import { Home } from "pages/Home";
import { About } from "pages/About";
import { Document } from "pages/Document";
import { Routes } from "./types";
import { ROUTES } from "constants/routes";

const routes: Routes[] = [
    {
        path: ROUTES.HOME,
        component: Home,
        exact: true,
        routes: [],
    },
    {
        path: ROUTES.ABOUT,
        component: About,
        exact: true,
        routes: [],
    },
    {
        path: ROUTES.DOCUMENT,
        component: Document,
        exact: true,
        routes: [],
    },
];

export { routes };
