import { useState } from "react";


function EventHandler() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('')

    function add() {
        setResult(Number(num1) + Number(num2));
    }
    function subtract() {
        setResult(Number(num1) - Number(num2));
    }
    function multiply() {
        setResult(Number(num1) * Number(num2));
    }
    function divide() {
        setResult(Number(num1) / Number(num2));
    }

    return (
        <div>
            <h1 className="text-3xl font-bold">My Function Component</h1>
            <h2 className="text-2xl font-bold mb-2">Simple Calculator</h2>
            <p className="text-lg font-semibold mb-2">An Event to calculate two numbers</p>

            <input className=" w-70 text-lg rounded-xl text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2 p-1" type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Enter the first number" />

            <input className=" w-70 mb-2 p-1 text-lg rounded-xl text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400" type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Enter the second number" />

            <div className="flex gap-2 justify-center mb-2">
                <button onClick={add} className=" bg-red-950 text-white p-2 rounded-lg">
                    Add
                </button>
                <button onClick={subtract} className=" bg-red-950 text-white p-2 rounded-lg">
                    Subtract
                </button>
                <button onClick={divide} className=" bg-red-950 text-white p-2 rounded-lg">
                    Divide
                </button>
                <button onClick={multiply} className=" bg-red-950 text-white p-2 rounded-lg">
                    Multiply
                </button>
            </div>

            <h3>Result: {result}</h3>
        </div>
    );
}

function Arguments() {
    function showStudent(name, course) {
        alert(`${name} is studying ${course}`)
    }
    return (
        <>
            <h1 className="text-3xl font-bold">My Function Component</h1>
            <h2 className="text-2xl font-bold mb-2">Show Students</h2>
            <p className="text-lg font-semibold mb-2">An Event to show students</p>
            <button className=" bg-red-950 text-white p-2 rounded-lg" onClick={() => showStudent("David", "React")}>
                Show Student
            </button>
        </>
    );
}

function Notification () {
    const [hasNotification, setNotification] = useState(false)
    return (
        <>
        <h1 className="text-3xl font-bold">Student Dashboard</h1>
            <h2 className="text-2xl font-bold mb-2">Notification</h2>
            <p className="text-lg font-semibold mb-2">An Event to show students notification</p>

            <button className=" bg-red-950 text-white p-2 rounded-lg" onClick={() => setNotification(!hasNotification)}>Toggle Notification</button>

            {hasNotification && (
                <div>
                    <h2>New Notification</h2>
                    <p>You have a new assignment</p>
                </div>
            )}
        </>
    );
}

function Events() {
    return (
        <div className="flex gap-2 justify-center">
            <div className="flex gap-2 justify-center m-5 p-4 border border-accent rounded-3xl w-110 text-center">
                <EventHandler />

            </div>
            <div className="justify-center m-5 p-4 border border-accent rounded-3xl w-110 text-center">
                <Arguments />

            </div>
            <div className="justify-center m-5 p-4 border border-accent rounded-3xl w-110 text-center">
                <Notification />

            </div>
        </div>
    );
}


export default Events;