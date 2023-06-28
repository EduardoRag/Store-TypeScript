import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import HeaderLayout from './layouts/HeaderLayouts';
import AddProduct from './pages/AddProduct';

function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HeaderLayout />}>
                <Route path='/main' element={<Main />} />
                <Route path='/add-product' element={<AddProduct />} />
            </Route>
        </Routes>
    )
}

export default MainRoutes;