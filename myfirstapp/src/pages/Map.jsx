function Map() {
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
        {
            id: 4,
            name:"Glory",
            course:"React",
            age:20,
            city:"Lagos"
        },
    ]
    return(
        <div>
            <table border={1}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>
            {students.map((student) =>(
                
                    <tr>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.course}</td>
                        <td>{student.age}</td>
                        <td>{student.city}</td>
                    </tr>
               
            ))}
             </table>
        </div>
    )
}

export default Map