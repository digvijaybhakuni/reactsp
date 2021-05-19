import React, { useContext, useReducer, useState } from "react";
import { LoginContext } from "./Context";
import "./Login.css";

const loginReducer = (state, action) => {
    switch (action.type) {
        case 'login':
            if (state.username === 'dg90@gmail.com' && state.password === 'password') {
                return { ...state, isLogin: true };
                // setIsLogin(true);
                // setUsername("DG90");
            } else {
                // setIsLogin(false);
                // setUsername(null);
                return { ...state, isLogin: false };
            }
        case 'field':
            return { ...state, [action.field]: action.payload }
        default:
            return { ...state };
    }
};

export const Login = (props) => {

    const { setIsLogin, setUsername } = useContext(LoginContext);

    const [state, dispatch] = useReducer(loginReducer, {isLogin: false, username: '', password: '', remenberMe: 'off'});

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [remenberMe, setRemenberMe] = useState();

    const doLogin = (ev) => {
        console.log('ev', ev);
    };

    return <div className="container">
        <div className="login_form_container">
            <form>
                <div className="form-group row">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" onChange={(ev) => setEmail(ev.target.value)} className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" onChange={(ev) => setPassword(ev.target.value)} className="form-control" id="inputPassword3" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input className="form-check-input" onChange={(ev) => setRemenberMe(ev.target.value)} type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" for="gridCheck1">Remember Me</label>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="button" onClick={doLogin} className="btn btn-primary">Sign in</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>;
};