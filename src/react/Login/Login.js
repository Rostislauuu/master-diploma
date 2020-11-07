import React from "react";

import {useForm} from "react-hook-form";

import "../../assets/style/Login/login.scss"

const Login = () => {
    const {
        handleSubmit,
        register,
        watch,
        setValue
    } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const handleLogin = () => {
    };

    return (
        <div className="wrapper">
            <div className="login_page">
                <form className="login_form" onSubmit={handleSubmit(handleLogin)}>
                    <input type="email" name="email"
                           placeholder="Email" ref={register(
                        {
                            name: "email"
                        },
                        {
                            required: "This field is required"
                        }
                    )}
                           value={watch("email")}
                           onChange={e => setValue("email", e.target.value)}
                    />
                    <input type="password" name="password"
                           placeholder="Password" ref={register({
                            name: "password"
                        },
                        {
                            required: "This field is required"
                        }
                    )}
                           value={watch("password")}
                           onChange={e => setValue("password", e.target.value)}
                    />
                    <button type="submit">
                        Login
                    </button>
                    <p className="message">Not registered? <a href="#">Create an account</a></p>
                </form>
            </div>
        </div>
    )
};

export default Login;