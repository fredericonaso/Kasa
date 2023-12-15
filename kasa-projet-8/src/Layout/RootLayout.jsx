import React from "react";
import { Outlet } from "react-router-dom";
//components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const RootLayout = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
export default RootLayout