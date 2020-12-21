import { allowedUser } from "constants/allowedUser";

export const checkLocalStorage = () => {
    return localStorage.getItem("user") === JSON.stringify(allowedUser);
}

export const setLocalStorage = (user:string) => {
    localStorage.setItem("user", JSON.stringify(user));
};

export const removeLocalStorage = () => {
    localStorage.removeItem("user");
};