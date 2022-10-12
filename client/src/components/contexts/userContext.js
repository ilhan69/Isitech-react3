import { createContext } from "react";

const userContext = createContext({
    logged: false,
    email: '',
    password: ''
});

export default userContext