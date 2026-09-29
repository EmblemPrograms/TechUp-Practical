// import './card.css'
function StudentCard({ name, course, city }) {

    return (
        <div className="bg-sky-100 p-8 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-teal-800">{name}</h2>
            <p className="text-emerald-500">{course}</p>
            <p className="text-fuchsia-500">{city}</p>
        </div>
    );
}



function Students() {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <h1 className="text-3xl font-bold mb-6">TechUp Students</h1>
            <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
                <StudentCard name="David" course="Frontend Development" city="Lagos" />
                <StudentCard name="Hikmat" course="Frontend Development" city="Ibadan" />
                <StudentCard name="Abdulsalam" course="Frontend Development" city="Abeokuta" />
                <StudentCard name="Akinyele" course="Frontend Development" city="London" />
                <StudentCard name="Samuel" course="Frontend Development" city="Lagos" />
                <StudentCard name="Rashidat" course="Frontend Development" city="Lagos" />
                </div>
            
        </div>
    )
}

export default Students
