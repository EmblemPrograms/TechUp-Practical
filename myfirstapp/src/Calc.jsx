function Calc() {
    function project() {
        return "This is a simple project to calculate the sum, average, area, circumference and simple interest of some numbers."
    }
    const num1 = 3;
    const num2 = 6;
    const num3 = 9;
    const num4 = 12;
    const num5 = 15;
    const sum = num1 + num2 + num3 + num4 + num5;
    let average = sum / 5;
    const pie = 3.142;
    const radius = 6;
    const area = pie * radius * radius;
    const circumference = 2 * pie * radius;
    const p = 500000
    const r = 0.5
    const t = 3
    const cal = p * r * t
    return (
        <div>
            <h1>{project()}</h1>
            <h1>Sum: {sum}</h1>
            <h1>Average: {average}</h1>
            <h1>Area: {area}</h1>
            <h1>Circumference: {circumference}</h1>
            <h1>total: {p * r * t}</h1>
            <h1>Simple Interest: {cal / 100} </h1>
        </div>
    )
}
export default Calc