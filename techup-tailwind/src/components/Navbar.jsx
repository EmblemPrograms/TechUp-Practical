import { Link } from 'react-router-dom'


function link(children, className = 'link') {
    return (
        <li className={`border rounded-sm py-1 px-2 hover:text-emerald-600 transition duration-200 ${className}`}>{children}</li>
    );
}

function Navbar() {
    return (
        <nav className="flex flex-col gap-3 bg-gray-100 dark:bg-gray-800 px-8 py-4 shadow sm:px-6 md:flex-row md:items-center md:justify-between md:px-8 transition-colors duration-300">
            <h1 className="text-sm md:text-xl font-bold text-blue-700 dark:text-blue-400">TechUp Academy </h1>
            <ul className="flex gap-6 text-gray-700 dark:text-gray-200 font-medium text-xs md:text-sm ">
                {link('Home')}
                {link('Courses')}
                {link('Tutors')}
                {link('Contact')}
            </ul>
            <Link
            to='/login'
             className="self-start bg-blue-600 text-white px-2 py-1 rounded-sm md:self-auto md:px-5 md:py-2 md:rounded-lg hover:bg-blue-800 transition duration-300 hover:text-shadow-fuchsia-200">
                Login
            </Link>
        </nav>
    );
}

export default Navbar;