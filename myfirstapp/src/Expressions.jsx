function Expressions() {
    const firstName = "Emmanuel"
    const lastName = "Rashidat"
    const birthYear = 2000
    const presentYear = 2026
    let age = presentYear - birthYear
    const isRegistered = true
    return (
        <div>
            <h1>Welcome to TechUp Academy, {firstName + " " + lastName}</h1>
            <p className="age">You are {age} years old.</p>
            <p className="registered">{isRegistered ? "You are registered." : "You are not registered."}</p>
        </div>
    )
    }
    export default Expressions