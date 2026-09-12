function Form() {
    return (
        <>
            
            <form>
                <h1>Registration Form</h1>
            <h2>Fill your details</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                </div>    
                <br />
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <br />
                <button type="submit">Register</button>
            </form>
        </>
    )
}
export default Form