
import styled from "styled-components";
import React, {useState,useEffect} from 'react';
// import Photo from "./photo.png"
import HomeAPI from "../../services/HomeAPI"
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {

  const [isLoading,setIsLoading] = useState(true);
  const [posts,setPosts] = useState(null);

 const URLImage="https://backend-strapi.online";

  useEffect(()=>{
    fetchAllData();
  },[]);

  const fetchAllData = async () =>{
    const data = await  HomeAPI.HomeAPI();
    setPosts(data);
    setIsLoading(false);
    
  }

  return (
    <Wrapper>
    
     <h1 className="text-center">{isLoading? 'Loading...':
     
     <Typewriter
     words={[posts.data[0]["attributes"].Titre,""]}
     loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
     >
        
     </Typewriter>
     }
     
     </h1>
     <div className="container">
      <div className="row">
        <WrapDIvPhoto >
          <img className="img-fluid" src={isLoading? 'Loading...':URLImage+posts.data[0]["attributes"].photo_accueil.data[0].attributes.url} alt="" />
          </WrapDIvPhoto>
      </div>

      <div className="row">

        <WrapDivName>
          <div />
          <h1 className="text-center">{isLoading? 'Loading...':
          
          posts.data[0]["attributes"].nom_photographe}
          
          </h1>
        
          <div/>
        </WrapDivName>
      </div>
     </div>

    </Wrapper>
  )
}
const Wrapper=styled.div `

padding-top:20px;

`;
const WrapDIvPhoto = styled.div`

padding:20px;
width:650px;
margin : 0 auto;
@media (max-width : 640px){
 
    width:350px;
}
`;

const WrapDivName = styled.div `
height:250px;

& h1{
  font-size:80px;
}
& div{
  border-bottom:solid 20px #70ACAC;
}

@media (max-width : 640px){
  & h1{
  font-size:40px;
}
}

`;