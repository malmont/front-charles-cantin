import styled from "styled-components";
import React ,{useEffect, useState}from 'react';
import {NavLink} from 'react-router-dom';
import { BsList,BsHouse,BsFillCameraFill,BsFillCartFill,BsTelephoneFill } from "react-icons/bs";
import './NavBar.css'
import Logo from "./logo.png"



export default function NavBar() {
  const[toggleMenu,setToggleMenu]=useState(false);
  const[largeur,setLargeur]=useState(window.innerWidth);
  const toggleNav=()=>{
      setToggleMenu(!toggleMenu)
  }
  useEffect(() => {
      const changeWidth = ()=>{
          setLargeur(window.innerWidth);
      }
   window.addEventListener('resize',changeWidth);
   return ()=>{
      window.addEventListener('resize',changeWidth);
   }
  
  }, [])
  return (
    <Wrapper>
       <WrapSpan>
        <img  src={Logo} alt="" />
       </WrapSpan>
   <nav>
   {(toggleMenu || largeur > 500) &&(
   
      <ul className="liste">
        <li>< NavLink to ="/" className={({isActive})=>{return isActive?"activeLink" :""}}>   <BsHouse size={30} color='#E4ECEC'/></NavLink></li> 
        <li><NavLink to ="/Gallery"className={({isActive})=>{return isActive?"activeLink" :""}}>  <BsFillCameraFill size={30} color='#E4ECEC'/></NavLink></li>
        <li><NavLink to ="/Tarifs"className={({isActive})=>{return isActive?"activeLink" :""}}> <BsFillCartFill size={30} color='#E4ECEC'/></NavLink></li>
        <li><NavLink to ="/Contact"className={({isActive})=>{return isActive?"activeLink" :""}}> <BsTelephoneFill size={30} color='#E4ECEC'/></NavLink></li>
      </ul>
    )}
    <WrapButton onClick={toggleNav} >
    <BsList  size={30}/>
    </WrapButton>

    </nav>

    </Wrapper>
  )
}
const Wrapper=styled.header `

  
    width: 100%;
    height: 140px;
    background: #44545C;
    & ul{
    list-style-type: none;
    background: #44545C;
    height: 100%;
    display: flex;
    justify-content:right;
    align-items: center;
    position: relative;
    & li{
    width:40px;
    margin-right: 20px ;
    margin-left:20px;
  
    margin-bottom:10px;
    color: #E4ECEC;
    cursor: pointer;
    &:hover{
  
  }
    }
    
  
    }

    @media screen and (max-width:500px){

      & ul{
        flex-direction: column;
        height: 240px;

  
    & li{
        height: 50px;
        width: 100%;
      
        line-height: 10px;
        text-align: left;
        margin-top:10px;
    }
    }
    }

`;

const WrapButton = styled.li`
    display: none;
    list-style-type: none;
    position: absolute;
    right: 10px;
    top: 7px;
    padding: 1px;
    margin-right:10px;
    color: #000;
    font-size: 18px;
    cursor: pointer;
    color:white;

    @media screen and (max-width:500px){
      display: block;
    }
`;

const WrapSpan = styled.span`
display:inline-block;
padding:20px;
width:90px;
`;

// export default function NavBar() {
//   return (
//    <nav>
//     <Link to ="/"> Accueil</Link>
//     <Link to ="/Gallery"> Gallerie</Link>
//     <Link to ="/Tarifs"> Tarifs</Link>
//     <Link to ="/Contact"> Contact</Link>
//    </nav>


//   )
// }
