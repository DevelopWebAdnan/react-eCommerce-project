import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const [success, setSuccess] = useState(false);
    // const [errors, setErrors] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    // const [userPassword, setUserPassword] = useState("");

    // password validation with messages
    // const validatePassword = (value) => {
    //     const newErrors = [];

    //     if (value.length < 6) {
    //         newErrors.push("Must be at least 6 characters long.");
    //     }
    //     if (!/a-z/.test(value)) {
    //         newErrors.push("Must contain at least one lowercase character.");
    //     }
    //     if (!/A-Z/.test(value)) {
    //         newErrors.push("Must contain at least one uppercase letter.");
    //     }
    //     if (!/\d/.test(value)) {
    //         newErrors.push("Must contain at least one number.");
    //     }
    //     if (!/[@$!%&^*]/.test(value)) {
    //         newErrors.push("Must contain at least one special character (!@#$%^&*)");
    //     }

    //     setErrors(newErrors);

    // };

    const handleRegister = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, email, password);

        // At least 6 character, 1 uppercase, 1 number
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

        if (!passwordRegex.test(password)) {
            setErrorMessage("Password must be at least 6 characters long and contain at least one uppercase letter and one number."
            );
            return;
        }

        // reset error and status
        setErrorMessage("");
        setSuccess(false);
        // setUserPassword(password);
        // validatePassword(password);

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess(true);
            })
            .catch(error => {
                console.log('ERROR', error.message);
                setErrorMessage(error.message);
                setSuccess(false);
            })
    }

    return (
        <div className="hero bg-blue-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-blue-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" name="name" className="input" placeholder="Name" />
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />

                                <button className="btn btn-primary mt-4">Register</button>
                            </fieldset>
                        </form>
                        {/* {errors.length > 0 ? (
                            <ul style={{ color: "red", fontSize: "14px" }}>
                                {errors.map((err, index) => (
                                    <li key={index}>{err}</li>
                                ))}
                            </ul>
                        ) : userPassword.length > 0 ? (
                            <p style={{ color: 'green' }}>Strong password!</p>
                        ) : null} */}
                        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                        {success && <p className="text-green-600">User sign up is successful.</p>}
                        <p>Already have an account? Please <Link to="/login">Login</Link>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;