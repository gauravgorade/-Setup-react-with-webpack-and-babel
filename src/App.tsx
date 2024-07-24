import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Home = lazy(() => import('./components/Home'));
const Resume = lazy(() => import('./components/Resume'));
const Page404 = lazy(() => import('./components/Page404'));
const Nav = lazy(() => import('./components/Nav'));
const baseUrl = process.env.MARCO_POLO_BASE_URL



function App() {
    return (
        <BrowserRouter basename={baseUrl}>
            <AppContent />
        </BrowserRouter>
    );
}

function AppContent() {
    return (
        <>
            <section className='main'>
                <Nav />
            </section>
            <section className='main'>
                <Suspense fallback={<span>Loading...</span>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/*" element={<Page404 />} />
                    </Routes>
                </Suspense>
            </section>
        </>
    );
}

export default App;
