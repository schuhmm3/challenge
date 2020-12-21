export type Routes = {
    path: string;
    exact: boolean;
    label?: string;
    component?: any;
    redirect?: boolean;
    redirectTo?: string;
    routes?: Routes[];
};

export type PrivateRouteProps = {
    component: React.FC,
    path: string,
    exact: boolean,
}