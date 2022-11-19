import React ,{useRef} from 'react';
import '../../src/styles.css'
import { Controller, Scene } from "react-scrollmagic";
import Sequence from "../../src/Sequence";
import {data} from '../constants/data'


const Product =()=>{
    const ref = useRef();

 const datas = data.contents.map((elem) => {
    return(
        <>
        
       <h3 key={elem.key}>{elem.head}<br/></h3>
       <p style={{fontSize:'17px',fontWeight:'200'}}>{elem.text}</p>
        
        {elem.table&&<table className='TFtable'cellpadding="0" cellspacing="0">{elem.table}</table>}
        {elem.image&&<img src={elem.image} alt=''/>}
        </>
  ) })

    return(
<>
<div className='product'>
{/* style={{marginRight:'10rem',marginTop:'8rem'}} */}
<div  className='mobileView'>
    <Controller>
        <Scene duration="250%" triggerHook="onLeave" pin>
          {progress => (
            <div >
              <Sequence ref={ref} progress={progress} />
            </div>
          )}
        </Scene>
      </Controller>
      </div>
  
    <div className='supra'>
        <h1 className='supraHeading'>Supra Phob Infocus</h1>
       
    <div>{datas}</div>
    </div>
  

</div>
</>

    )
}


export default Product;