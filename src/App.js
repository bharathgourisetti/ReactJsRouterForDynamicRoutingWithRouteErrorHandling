import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Routelayout from './layout/Routelayout';
import Home from './Pages/Home';
import Products from './Pages/Products';
import About from './Pages/About';
import Contactlayout from './layout/Contactlayout';
import Contactinfo from './components/Contactinfo';
import Contactform from './components/Contactform';
import Jobslayout from './layout/Jobslayout';
import Jobs, { jobsLoader } from './Pages/Jobs';
import Jobdetails, { jobDetailsLoader } from './Pages/Jobdetails';
import Joberrorpage from './Pages/Joberrorpage';

const App = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Routelayout />}>
                <Route index element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route path="about" element={<About />} />
                {/* <Route path="contact" element={<Contact />}></Route> */}
                <Route path="contact" element={<Contactlayout />}>
                    {/* <Route index element={<Contactinfo />}></Route> */}
                    <Route path="contactinfo" element={<Contactinfo />} />
                    <Route path="contactform" element={<Contactform />} />
                </Route>
                <Route path="jobs" element={<Jobslayout />}>
                    <Route index element={<Jobs />} loader={jobsLoader} />
                    <Route path=":id" element={<Jobdetails />} loader={jobDetailsLoader} errorElement={<Joberrorpage />} />
                </Route>
                <Route />
            </Route>
        )
    );

    return (
        <RouterProvider router={router} />
    )
}

export default App