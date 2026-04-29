import "./login.scss";
const Login = () => {
    return (
        <div className="login-container">
            <form className="login-form">
                <h2>Login</h2>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit" className="login-btn">Sign In</button>
                <div className="form-footer">
                    <a href="#">Forgot Password?</a>
                    <span>Don't have an account?<a href="#">Sign Up</a></span>
                </div>
            </form>
        </div>
    );
};

export default Login;
