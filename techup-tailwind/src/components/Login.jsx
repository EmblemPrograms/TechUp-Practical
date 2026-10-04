const colours = {
    gray: "bg-gray-300",
    lgray: "bg-gray-100",
    blue: "bg-blue-600",
    dblue: "bg-blue-700",
    ddblue: "bg-blue-900",
};

function Login() {
    return (
        <div className={`${colours.lgray} dark:bg-gray-900 min-h-screen flex items-center justify-center p-4 transition-colors duration-300`}>
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100">Student Login</h1>
                <input className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400 rounded-lg p-3 mt-6 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Email" />
                <input className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400 rounded-lg p-3 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Password"
                    type="password" />
                <button className={`${colours.blue} w-full   py-3 hover:${colours.dblue} hover:text-amber-300 transition duration-600 active:${colours.ddblue} active:text-white rounded-lg mt-6 mb-4 font-semibold`}>
                    Login</button>
                    <div className="w-10 h-10 border-4 self-center border-blue-600 rounded-full animate-ping mt-4 mb-4">
               
            </div>

                    <button type="submit" disabled className="w-full border border-gray-300 py-3 bg-gray-300 text-gray-600 rounded-lg disabled:opacity-45 disabled:cursor-not-allowed">Create Account</button>
            </div>
            
        </div>
    );
}
export default Login;