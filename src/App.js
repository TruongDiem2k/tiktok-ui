import { Fragment } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';

function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((publicRoute, index) => {
                    const Page = publicRoute.component;

                    let Layout = DefaultLayout;

                    if (publicRoute.layout) {
                        Layout = publicRoute.layout;
                    } else if (publicRoute.layout === null) {
                        Layout = Fragment;
                    }

                    return (
                        <Route
                            key={index}
                            path={publicRoute.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
