import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/home';
import { Dashboard } from '../pages/dashboard';

export const RoutesWrapper = () => {

    return (
        <Routes>
            <Route path='/home' Component={HomePage}/>
            <Route path='/dashboard' Component={Dashboard}/>
        </Routes>
    )
}

