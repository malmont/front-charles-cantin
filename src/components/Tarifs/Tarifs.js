import React,{useState,useEffect} from 'react';
import styled from "styled-components";
import studio from "./studio.jpeg";
import couple from "./couple.jpeg";
import family from "./family.jpeg";
import birch from "./birch.jpeg";
import children from "./children.jpeg";
import mariage from "./mariage.jpeg";
import {Waypoint} from 'react-waypoint';

import HomeAPI from "../../services/HomeAPI"

export default function Tarifs() {





  const [isLoading,setIsLoading] = useState(true);
  const [posts,setPosts] = useState(null);

  const URLImage="https://backend-strapi.online";

  useEffect(()=>{
    fetchAllData();
  },[]);

  const fetchAllData = async () =>{
    const data = await  HomeAPI.TarifAPI();
    setPosts(data);
    console.log(data)
    setIsLoading(false);
    
  }

  
  


  return (
    <Wrapper>
      <div className="container">
        {/* /////////////////////////////////////////////Row1 */}
        <Waypoint
      bottomOffset="30%"
      onEnter={()=>{
     
       
      }}
      />
      {/* {posts.data.map((item)=>{
  return <div className="row mt-5">

  <div className="col mt-5  text-center ">
      <h3>
      {isLoading? 'Loading...':item.attributes.Intitule}
      </h3>
      <button type="button" class="btn  my-4">   {isLoading? 'Loading...':item.attributes.name_button}</button>
  </div>

  <div className="col mx-auto">
      <img  src={isLoading? 'Loading...':URLImage+item["attributes"].photo_offre.data[0].attributes.url}  alt=''/>
  </div>

</div>

      })} */}

        <div  className="cta-section ">
        <div className="row mt-5">

          <div className="col mt-5  text-center ">
              <h3>
              {isLoading? 'Loading...':posts.data[0].attributes.Intitule}
              </h3>
              <button type="button" class="btn  my-4">   {isLoading? 'Loading...':posts.data[0].attributes.name_button}</button>
          </div>

          <div className="col mx-auto">
              <img  src={isLoading? 'Loading...':URLImage+posts.data[0]["attributes"].photo_offre.data[0].attributes.url}  alt=''/>
          </div>

        </div>
        </div>
           {/* /////////////////////////////////////////////Row2 */}
           <div  className="cta-section">
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
        </div>
   {/* /////////////////////////////////////////////Row3 */}


   <div  className="cta-section">
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
        </div>
   {/* /////////////////////////////////////////////Row4 */}
   <div className="cta-section">
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
        </div>
   {/* /////////////////////////////////////////////Row5 */}


   
   <div className="cta-section">
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
        </div>
   {/* /////////////////////////////////////////////Row6 */}
   <div className="cta-section">
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
        </div>
   {/* /////////////////////////////////////////////Row7 */}
  

   {/* <Waypoint
     
      onEnter={()=>{
       
        setToggleTxt4(true);
        setToggleTxt5(true);
      }}
      /> */}
   
   <div className="cta-section">
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
      </div>
   

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

@media (max-width : 640px){
 
  & img{
  width:300px;
  
}
}

`;