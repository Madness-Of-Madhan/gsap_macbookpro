import React from 'react';
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {gsap} from "gsap";
import {SplitText} from "gsap/SplitText";
import Showcase from "./components/Showcase.jsx";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
        <div>
           <NavBar />
            <Hero/>
            <ProductViewer/>
            <Showcase/>
        </div>
    );
};

export default App;
