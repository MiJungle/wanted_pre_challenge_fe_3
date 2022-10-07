import React from "react";
import Link from "../components/Link";
import About from "../pages/About";


function Home (){
    return (
        <>
        <h2>root</h2>
        <Link to = "/about"><button>about</button></Link>
        </>
    )
}
export default Home;