/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { publicRoutes } from '~/routes';
import { DefaultLayout } from './layouts';
import { getCategories } from '~/state/features/categoriesSlice';
import { getNonAlcoholic } from '~/state/features/nonAlcoholicSlice';
import { total } from './state/features/cartSlice';
import './App.css';

function App() {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getNonAlcoholic());
    }, []);

    useEffect(() => {
        dispatch(total());
    }, [cartItems]);

    return (
        <Router>
            <div className="app bg-ap-bg">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
