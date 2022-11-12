import React, { useState } from 'react';
import styled from 'styled-components';
const Tab = styled.button`
  
  padding: 10px 40px;
  cursor: pointer;
  color: white;
  border: 0;
  background: #161616;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid white;
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: block;
 `;

const VIDEOS = <div  className="buttonCenter" style={{margin:'auto'}}><iframe width="640" height="320" src="https://www.youtube.com/embed/2DAFV2DI1PU" title="Legend Truglow FS1 | Surgical Microscope | AAOM | Appasamy Associates" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
const BROCHURE = <div className="buttonCenter" style={{margin:'auto'}}>DOWNLOAD</div>
const GALLERY  = <div className="buttonCenter" style={{margin:'auto'}}>IMAGES</div>
const types = [{id:'VIDEOS',content: VIDEOS},{id:'BROCHURE',content: BROCHURE},{id:'GALLERY',content: GALLERY}];
export default function ProductEnquirySection() {
    const [active, setActive] = useState(types[0].content);
return(
    <>
        <div style={{ justifyContent: 'center'}}>
            <div style={{display: 'block'}}>
                <div className="buttonCenter" ><button className="button1" >Product Enquiry</button></div>
                <div className="buttonCenter" ><button className="button1" >Product Demo Request</button></div>
                
            <ButtonGroup className="buttonCenter" style={{display:'flex', justifyContent: 'center'}}>
        {types.map(type => (
          <Tab
          className="tabText"
            style={{ margin: '2%'}}
            key={type.id}
            active={active === type.content}
            onClick={() => setActive(type.content)}
          >
            {type.id}
          </Tab>
        ))}
      </ButtonGroup>
      <p />
      <p style={{margin:'2%'}}> {active} </p>

            </div>
            </div>
    </>
)

}

  
  