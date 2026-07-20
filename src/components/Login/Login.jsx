import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const { signInUser, sendPasswordReset } = useContext(AuthContext);

    const emailRef = useRef();

    const [success, setSuccess] = useState(false);

    const [loginError, setLoginError] = useState("");

    const handleForgetPassword = e => {
        e.preventDefault();

        // reset status
        setLoginError("");

        const email = emailRef.current.value;
        console.log(email);

        if (!email) {
            setLoginError("Please provide a valid email address");
        }
        else {
            sendPasswordReset(email)
                .then(() => {
                    alert("Password reset email sent! Please check your email, including spam email.");
                })
        }
    }

    const handleLogin = e => {
        e.preventDefault();

        // reset status
        setSuccess(false);
        setLoginError("");

        const email = e.target.email.value;

        const password = e.target.password.value;

        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);

                if (!result.user.emailVerified) {
                    setLoginError("Please verify your email address. Check your spam email if you do not find it in the inbox.");
                }
                else {
                    setSuccess(true);
                }
            })
            .catch(error => {
                console.log('ERROR', error.message);
                setLoginError(error.message);
            });
    }

    return (
        <div className="hero bg-blue-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-blue-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input ref={emailRef} type="email" name="email" className="input" placeholder="Email" required />
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" required />
                                <div><a onClick={handleForgetPassword} className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-primary mt-4">Login</button>
                            </fieldset>
                        </form>
                        {
                            success && <p className="text-green-700">User login is successful.</p>
                        }
                        {
                            loginError && <p className="text-red-600">{loginError}</p>
                        }
                        <p>New to this website? Please <Link to="/register">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;