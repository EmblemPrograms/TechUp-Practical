import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }

  return (
    <div>
      <div>
        <h1>TechUp Counter</h1>
        <h2>{count}</h2>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increase}>+</button>
        {count === 0 && <p>Counter is at zero.</p>}
      </div>
    </div>
  );
}
export default UseState;

// import {useState } from "react";
// // state with strings
// function UseState() {
//     const [name, setName] = useState("")
//     const [age, setAge] = useState(18)
//     const [skill, setSkill] = useState("")
//     const [isLoggedIn, setIsLoggedIn] = useState(false)
//     function handleChange(event) {
//         setName(event.target.value);
//     }
//     function handleSkill(event) {
//         setSkill(event.target.value)
//     }
//     return(
//         <div>
//             <h1>Hello {name}</h1>
//             <h1>Age is {age}</h1>
//             <h1>I am learning {skill}</h1>
//             <h1>{isLoggedIn ? "Welcome Back!" : "Please Log in"}</h1>

//             <input type="text"
//             onChange={handleChange}
//             placeholder = "Enter Your Name"/>
//             <br />
//             <br />

//             <input type="text"
//             onChange={handleSkill}
//             placeholder = "Enter Your Skill"/>
//             <br />
//             <br />

//             <button onClick={() => setAge(age + 1)}>Increase Age</button>
//             <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Logout" : "Login"}</button>
//         </div>
//     )
// }
// export default UseState
