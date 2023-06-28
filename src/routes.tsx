import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import HeaderLayout from './layouts/HeaderLayouts';
import AddProduct from './pages/AddProduct';
import GlobalContextProvider from './contexts/GlobalContextProvider';

function MainRoutes() {
    return (
        <GlobalContextProvider>
            <Routes>
                <Route path='/' element={<HeaderLayout />}>
                    <Route path='/main' element={<Main />} />
                    <Route path='/add-product' element={<AddProduct />} />
                </Route>
            </Routes>
        </GlobalContextProvider>
    )
}

export default MainRoutes;