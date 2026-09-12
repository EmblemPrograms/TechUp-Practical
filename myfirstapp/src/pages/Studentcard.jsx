function StudentCard(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.course}</p>
            <p>{props.age}</p>
            <p>{props.level}</p>
            <p>{props.active}</p>
        </div>
    )
}

function App() {
    return (
        <>
        <h1>Students</h1>
        <StudentCard 
        name="Rashidat"
        course="FrontEnd Development"
        age= {20}
        level= "First Cohort"
        active= {true}
        />
        <StudentCard 
        name="Moses"
        course="FrontEnd Development"
         age= {21}
        level= "First Cohort"
        active= {false}
        />
        <StudentCard 
        name="Hikmat"
        course="FrontEnd Development"
         age= {22}
        level= "First Cohort"
        active= {true}
        />
        <StudentCard 
        name="Ibrahim"
        course="FrontEnd Development"
         age= {23}
        level= "First Cohort"
        active= {false}
        />
        </>
    )
}
export default App