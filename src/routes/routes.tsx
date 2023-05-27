import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/home';


export const RoutesWrapper = () => {

    return (
        <Routes>
            <Route path='/home' Component={HomePage}/>
            <Route path='/dashboard' Component={() => <h1>Dashboard</h1>}/>
        </Routes>
    )
}

