import React, { useRef,useEffect,useState } from "react";
import ReactDOM from "react-dom";

import '../../src/styles.css';
 import { Controller, Scene } from "react-scrollmagic";
import Sequence from "../../src/Sequence";
import * as Scroll from 'react-scroll';
import ProductEnquirySection from '../../src/ProductEnquirySection';

import Navbar from "./Navbar";
import Footer from './Footer';

const Home = () => {
  const ref = useRef();
 

  return (
    <div className="App">

     
      <Navbar/>
      <Controller>
        <Scene duration="250%" triggerHook="onLeave" pin>
          {progress => (
            <div class='newContainer'>
              <Sequence ref={ref} progress={progress} />
            </div>
          )}
        </Scene>
      </Controller>
      

      <ProductEnquirySection/>
    
    <Footer/>
    </div>
  );
};

export default Home;

