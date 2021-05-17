import { useState } from "react";
import { LoginContext } from "./Context";

export const LoginProvider = (props) => {

    const [username, setUsername] = useState();
    const [isLogin, setIsLogin] = useState(false);
    return <LoginContext.Provider value={{isLogin, setIsLogin, username, setUsername}}>
        {props.children}
    </LoginContext.Provider>;
};