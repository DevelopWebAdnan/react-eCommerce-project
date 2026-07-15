import { Link } from "react-router-dom";

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, email, password);
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
                        <p>Already have an account? Please <Link to="/login">Login</Link>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;