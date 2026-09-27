// import './card.css'
function StudentCard({name, course, city}) {
    return (
        <>
        <div className='container'>
            
            <h2>{name}</h2>
            <p>{course}</p>
            <p>{city}</p>

        </div>
        </>
    )
}

function App() {
    const students = [
         {
            id: 1,
            name:"David",
            course:"React",
            age: 20,
            city:"Lagos"
        },
        {
            id: 2,
            name:"Hikmat",
            course:"React",
            age: 20,
            city:"Lagos"
        },
        {
            id: 3,
            name:"Michael",
            course:"React",
            age: 20,
            city:"Lagos"
        },
        {
            id: 4,
            name:"Glory",
            course:"React",
            age:20,
            city:"Lagos"
        },
    ]
    return (
        <div>
            {students.map((student) => (
            <StudentCard 
            key = {student.id}
            name={student.name}
            course={student.course}
            city={student.city}

            />
        ))}
        </div>
    )
}

export default App