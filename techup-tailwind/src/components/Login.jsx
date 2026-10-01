function Login() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-2xl font-bold text-center">Student Login</h1>
                <input className="w-full border border-gray-300 rounded-lg p-3 mt-6" placeholder="Email" />
                <input className="w-full border border-gray-300 rounded-lg p-3 mt-4" placeholder="Password"
                    type="password" />
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 font-semibold">
                    Login</button>
            </div>
        </div>
    );
}
export default Login;