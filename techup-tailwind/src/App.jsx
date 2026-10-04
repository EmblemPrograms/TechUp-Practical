import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Navbar from './components/Navbar'
import Maincontent from './components/Maincontent'
import Grid from "./components/grid";
import Login from './components/Login';
// import CourseCard from './components/Coursecard';
import Footer from './components/Footer';
import State from './components/State';
import Events from './pages/EventHandler';

function App() {
    const [darkMode, setDarkMode] = useState(false);
    
    return (
        <>
        <Events />
        </>
        // <div className={darkMode ? 'dark' : ''}>
        //     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        //     <Navbar />
        //     <button onClick={() => setDarkMode(!darkMode)} className="fixed top-4 right-30 bg-gray-800 text-white px-4 py-2 rounded-lg z-50">
        //         {darkMode ? 'Light Mode' : 'Dark Mode'}
        //     </button>
        //     <Routes>
        //         <Route path="/" element={<><Maincontent /><Grid /><State /></>} />
        //         <Route path="/login" element={<Login />} />

        //     </Routes>
        //     <Footer />
        //     </div>
        // </div>
    );
}

export default App;

// const courses = [
//         { id: 1, title: 'HTML & CSS', weeks: 4, level: 'Beginner', students: 100 },
//         { id: 2, title: 'JavaScript', weeks: 3, level: 'Beginner', students: 150 },
//         { id: 3, title: 'React', weeks: 4, level: 'Intermediate', students: 200 },
//         { id: 4, title: 'Tailwind CSS', weeks: 4, level: 'Intermediate', students: 180 },
//         { id: 5, title: 'Next.js', weeks: 6, level: 'Advanced', students: 120 },
//         { id: 6, title: 'Git & GitHub', weeks: 6, level: 'Advanced', students: 160 }
//     ]

// function App() {
//     return (
//         <div className="min-h-screen bg-gray-100 py-10">
//             <div className="max-w-6xl mx-auto px-4">
//                 <h1 className="text-3xl font-bold mb-8">All Courses</h1>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {courses.map((course) => (
//                         <CourseCard
//                             key={course.id}
//                             title={course.title}
//                             weeks={course.weeks}
//                             level={course.level}
//                             students={course.students}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default App;