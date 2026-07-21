import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye } from "react-icons/fa";

const Register = () => {

    const navigate = useNavigate();
    const { createUser, sendVerification, updateUser } = useContext(AuthContext);

    const [success, setSuccess] = useState(false);
    // const [errors, setErrors] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    // const [userPassword, setUserPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

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
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;

        console.log(name, photo, email, password, terms);

        if (!terms) {
            setErrorMessage('Please accept our terms and conditions.');
            return;
        }

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

                // send verification email address
                // sendEmailVerification(auth.currentUser)
                // sendEmailVerification(result.user.email)
                // sendEmailVerification(user.email)

                sendVerification()
                    .then(() => {
                        alert("Email verification sent! Please check your email.");
                    });
                setSuccess(true);
                e.target.reset();
                navigate("/");

                // update user information
                const userInfo = {
                    displayName: name,
                    photoURL: photo
                }
                updateUser(userInfo)
                    .then(() => {
                        console.log('Profile updated!')
                    })
                    .catch(error => {
                        console.log(error.message);
                        setErrorMessage(error.message);
                    })
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
                                <input type="text" name="name" className="input" placeholder="Name" required />
                                <label className="label">Photo URL</label>
                                <input type="text" name="photo" className="input" placeholder="Photo URL" required />
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" required />
                                <div className="relative">
                                    <label className="label">Password</label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        className="input"
                                        placeholder="Password" required />
                                    <div
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="btn btn-xs absolute right-2 bottom-2">
                                        <FaEye></FaEye>
                                    </div>
                                </div>
                                <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
                                    {/* <legend className="fieldset-legend">Accept Our Terms and Conditions.</legend> */}
                                    <label className="label">
                                        <input
                                            name="terms"
                                            type="checkbox"
                                            className="checkbox" />
                                        Accept Our Terms And Conditions.
                                    </label>
                                </fieldset>
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