import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="flex flex-col gap-3 bg-gray-100 px-8 py-4 shadow sm:px-6 md:flex-row md:items-center md:justify-between md:px-8">
            <h1 className="text-sm md:text-xl font-bold text-blue-700">TechUp Academy </h1>
            <ul className="flex gap-6 text-gray-700 font-medium text-xs md:text-sm">
                <li>Home</li>
                <li>Courses</li>
                <li>Tutors</li>
                <li>Contact</li>
            </ul>
            <Link
            to='/login'
             className="self-start bg-blue-600 text-white px-2 py-1 rounded-sm md:self-auto md:px-5 md:py-2 md:rounded-lg">
                Login
            </Link>
        </nav>
    );
}

export default Navbar;