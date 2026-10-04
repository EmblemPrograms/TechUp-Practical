function CourseCard({ title, weeks, level, students }) {
    
    return (
        <div className="bg-white rounded-xl shadow-md p-6">
            <span className="text-xs font-semibold uppercase text-blue-700 bg-blue-100 px-3 py-1 roundedfull">
                {level}
            </span>
            <h2 className="text-xl font-bold mt-4">{title}</h2>
            <p className="text-gray-500 mt-1">{weeks} weeks</p>
            <p className="text-gray-500 mt-1 italic font-bold">{students} students</p>
        </div>
    );

}

export default CourseCard;