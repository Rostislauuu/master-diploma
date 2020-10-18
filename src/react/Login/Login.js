import React from "react";

import { useForm } from "react-hook-form";

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

    const handleLogin = () => {};

    return (
        <div className="login">
            <div className="login-container">
                <form onSubmit={handleSubmit(handleLogin)}>
                    <input 
                      type="email"
                      name="email"
                      ref={register(
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
                     <input
                      type="password" 
                      name="password"
                      ref={register(
                        {
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
                </form>
            </div>
        </div>
    )
};

export default Login;