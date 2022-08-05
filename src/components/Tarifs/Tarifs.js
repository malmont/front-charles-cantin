import React,{useState} from 'react';
import styled from "styled-components";
import studio from "./studio.jpeg";
import couple from "./couple.jpeg";
import family from "./family.jpeg";
import birch from "./birch.jpeg";
import children from "./children.jpeg";
import mariage from "./mariage.jpeg";
import {Waypoint} from 'react-waypoint';
import {useSpring, animated} from "react-spring";


export default function Tarifs() {

  const [toogleTxt,setToggleTxt] = useState(false);
  const [toogleTxt1,setToggleTxt1] = useState(false);
  const [toogleTxt2,setToggleTxt2] = useState(false);
  const [toogleTxt3,setToggleTxt3] = useState(false);
  const [toogleTxt4,setToggleTxt4] = useState(false);
  const [toogleTxt5,setToggleTxt5] = useState(false);


  const animationleftToRight = useSpring({
    config: {
      mass: 5,
      tension: 50,
      friction: 25,
      clamp: true
    },
    opacity : toogleTxt?1:0,
    transform : toogleTxt? "translateX(0)" : "translateX(-50%)"
  });


  const animationleftToRight1 = useSpring({
    config: {
      mass: 5,
      tension: 50,
      friction: 25,
      clamp: true
    },
    opacity : toogleTxt1?1:0,
    transform : toogleTxt1? "translateX(0)" : "translateX(-50%)"
  });


  const animationRightToLeft = useSpring({
    config: {
      mass: 5,
      tension: 50,
      friction: 25,
      clamp: true
    },
    opacity : toogleTxt2?1:0,
    transform : toogleTxt2? "translateX(0)" : "translateX(50%)"
  });


  const animationRightToLeft1 = useSpring({
    config: {
      mass: 5,
      tension: 50,
      friction: 25,
      clamp: true
    },
    opacity : toogleTxt3?1:0,
    transform : toogleTxt3? "translateX(0)" : "translateX(50%)"
  });
  const animationRightToLeft2 = useSpring({
    config: {
      mass: 5,
      tension: 50,
      friction: 25,
      clamp: true
    },
    opacity : toogleTxt4?1:0,
    transform : toogleTxt4? "translateX(0)" : "translateX(50%)"
  });

  const animationleftToRight2 = useSpring({
    config: {
      mass: 5,
      tension: 50,
      friction: 25,
      clamp: true
    },
    opacity : toogleTxt5?1:0,
    transform : toogleTxt5? "translateX(0)" : "translateX(-50%)"
  });

  return (
    <Wrapper>
      <div className="container">
        {/* /////////////////////////////////////////////Row1 */}
        <Waypoint
      bottomOffset="30%"
      onEnter={()=>{
        setToggleTxt(true);
        setToggleTxt2(true);
       
      }}
      />

        <animated.div style={animationleftToRight} className="cta-section">
        <div className="row mt-5">

          <div className="col mt-5  text-center ">
              <h3>
              Séance pour une personne en extérieur ou en studio
              </h3>
              <button type="button" class="btn  my-4">130 Euros</button>
          </div>

          <div className="col mx-auto">
              <img  src={studio} alt=''/>
          </div>

        </div>
        </animated.div>
           {/* /////////////////////////////////////////////Row2 */}
           <animated.div style={animationRightToLeft} className="cta-section">
        <div className="row mt-5">
        <div className="col">
            <img  src={couple} alt=''/>
        </div>


        <div className="col mt-5 text-center ">
            <h3>
            Séance Pour deux personnes, en extérieur ou en studio
            </h3>
            <button type="button" class="btn  my-4">195 Euros</button>
        </div>
        </div>
        </animated.div>
   {/* /////////////////////////////////////////////Row3 */}


   <animated.div style={animationleftToRight1} className="cta-section">
        <div className="row mt-5">

        <div className="col mt-5 text-center ">
            <h3>
            Séance Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio.
            </h3>
            <button type="button" class="btn  my-4">220 Euros</button>
        </div>

        <div className="col">
            <img  src={family} alt=''/>
        </div>

        </div>
        </animated.div>
   {/* /////////////////////////////////////////////Row4 */}
   <animated.div style={animationRightToLeft1} className="cta-section">
        <div className="row mt-5">
        <div className="col">
          <img  src={birch} alt=''/>
        </div>


        <div className="col mt-5 text-center ">
          <h3>
          Séance pour Photo de grossesse (À votre domicile, en extérieur ou en studio).
          </h3>
          <button type="button" class="btn  my-4">160 Euros</button>
        </div>
        </div>
        </animated.div>
   {/* /////////////////////////////////////////////Row5 */}


   <Waypoint
  
      onEnter={()=>{
        setToggleTxt1(true);
        setToggleTxt3(true);
      }}
      />
   <animated.div style={animationleftToRight1} className="cta-section">
        <div className="row mt-5">

        <div className="col mt-5 text-center ">
            <h3>
            Séance pour enfant jusqu’à 3 ans (photo à domicile)
            </h3>
            <button type="button" class="btn  my-4">100 Euros</button>
        </div>

        <div className="col">
            <img  src={children} alt=''/>
        </div>

        </div>
        </animated.div>
   {/* /////////////////////////////////////////////Row6 */}
   <animated.div style={animationRightToLeft2} className="cta-section">
        <div className="row mt-5">
        <div className="col">
          <img  src={studio} alt=''/>
        </div>

     
        <div className="col mt-5 text-center ">
          <h3>
          Séance pour une personne en extérieur ou en studio
          </h3>
          <button type="button" class="btn  my-4">130 Euros</button>
        </div>
        </div>
        </animated.div>
   {/* /////////////////////////////////////////////Row7 */}
  

   <Waypoint
     
      onEnter={()=>{
       
        setToggleTxt4(true);
        setToggleTxt5(true);
      }}
      />
   
   <animated.div style={animationleftToRight2} className="cta-section">
        <div className="row mt-5">

      <div className="col mt-5 text-center ">
          <h3>
          Séance sur mesure Prestation de mariage ou baptême sur devis
          </h3>
          <button type="button" class="btn  my-4">130 Euros</button>
      </div>

      <div className="col">
          <img  src={mariage} alt=''/>
      </div>

      </div>
      </animated.div>
   

      </div>
      
    </Wrapper>
  )
}
const Wrapper=styled.div `

& img{
  width:600px;
  border-radius:15px;
}
& button{
background:#70ACAC;
}

`;