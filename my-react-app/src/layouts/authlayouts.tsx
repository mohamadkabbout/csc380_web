
const Login = () => {
  return (
    <div className="login-wrapper">
      <form className="login-form">
        <h2>Login</h2>
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="login-button">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
