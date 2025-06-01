function HeaderName({ isLogin }) {
return (
    <div className="login-page-header">
    Welcome to {isLogin ? 'Login' : 'Create Account'} Page
    </div>
);
}

export default HeaderName;
