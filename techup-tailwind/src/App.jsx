import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Maincontent from './components/Maincontent'
import Grid from "./components/grid";
import Login from './components/Login';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={
                    <>
                        <Maincontent />
                        <Grid />
                    </>
                } />
                <Route path='/login' element={<Login />} />

            </Routes>

        </>
    );
}
export default App;