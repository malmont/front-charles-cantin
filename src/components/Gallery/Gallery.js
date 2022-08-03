import styled from "styled-components";
import React from 'react';
import {useTrail,animated} from 'react-spring';
import {v4 as uuidv4} from 'uuid';
import DataGallery from './DataGallery';


export default function Gallery() {

  
  const trail = useTrail(DataGallery.length,{
    from:{
     opacity:0,
     x:20
    },
    to:{
     opacity:1,
     x:0
    }
 })

  return (
    <Wrapper>
   <h1>Gallerie</h1>
      <WrapperList>

      {trail.map((cardStyle,index)=>{
              return <animated.div
              key={uuidv4()}
              style={cardStyle}
              >
                <WrapperCard>

                <animated.div >  
                <WrapDIvPhoto >
                  <img  className="img-fluid" src={DataGallery[index].lien} alt="" />      
                  </WrapDIvPhoto>
                </animated.div>

                </WrapperCard>

              </animated.div>

            })}
        </WrapperList>
    </Wrapper>
  )
}
const Wrapper=styled.div `
padding-top:20px;

display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 50px;
`;

const WrapperList=styled.div `


display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 50px;
`;

const WrapperCard = styled.div `
    width: 200px;
    height: 160px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #70ACAC;
    margin: 15px;
    opacity: 1;

`;
const WrapDIvPhoto = styled.div`

padding:20px;
width:230px;
margin : 0 auto;
border-radius:15px;

& img{
  border-radius:15px;
}
`;
