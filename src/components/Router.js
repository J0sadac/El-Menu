import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import NavBar from './NavBar';

import Platillos from './ContenedorDePlatillos';
import Bebidas from './ContenedorDeBebidas';
import Recibo from './Recibo';
import Ajustes from './Ajustes';

const Router = () => {

    return(
        <BrowserRouter>
            <header>
                <NavBar />
            </header>
            
            <section>
                <Routes>
                    <Route exact path='/'
                            element={<>
                                        <Platillos />
                                        <Bebidas />       
                                    </>} />
                                    
                    <Route exact path='/platillos' element={<Platillos />} />
                    <Route exact path='/bebidas' element={<Bebidas />} />
                    <Route exact path='/recibo' element={<Recibo />} />
                    <Route exact path='/ajustes' element={<Ajustes />} />
                </Routes>
            </section>

        </BrowserRouter>
    );
};

export default Router;