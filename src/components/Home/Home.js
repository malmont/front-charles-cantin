
import styled from "styled-components";
import React from 'react';
import Photo from "./photo.png"

export default function Home() {
  return (
    <Wrapper>
     <h1 className="text-center">Accueil</h1>
     <div className="container">
      <div className="row">
        <WrapDIvPhoto >
          <img className="img-fluid" src={Photo} alt="" />
          </WrapDIvPhoto>
      </div>

      <div className="row">

        <WrapDivName>
          <div />
          <h1 className="text-center">CHARLES CANTIN</h1>
        
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
`;

const WrapDivName = styled.div `
height:250px;

& h1{
  font-size:100px;
}
& div{
  border-bottom:solid 20px #70ACAC;
}

`;