import React from 'react';
import './App.css';
import './normalize.css';
import {ThemeProvider} from "styled-jss";
import theme from "./theme";
import HomePage from "./pages/HomePage";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/:productId" element={<ProductPage/>}/>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                </Routes>
            </Router>
        </ThemeProvider>

    );
}

export default App;
