import { BsWhatsapp,BsFacebook,BsInstagram,BsTwitter } from "react-icons/bs";
import styled from "styled-components";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Wrapper>
        <div className="container">
            <div className="row">
                <div className="col my-5">
                    <h2 >Lien Rapide</h2>
                    <a href="#">Politique de confidentialité</a>
                </div>
                <div className="col my-5">
                    <h2 >Compagnie</h2>
                    <a href="#">A propos de notre entreprise</a>
                </div>
                <div className="col my-5">
                    <h2 >Contactez nous</h2>
                   <Link to ="/Contact">Contact</Link>
                </div>
                <div className="col pt-5 my-5">
                    <div className="col mx-3 mb-3 d-inline-block"><BsWhatsapp size={30} color='#E4ECEC'/></div>
                    <div className="col mx-3 mb-3 d-inline-block"><BsFacebook size={30} color='#E4ECEC'/></div>
                    <div className="col mx-3 mb-3 d-inline-block"><BsInstagram size={30} color='#E4ECEC'/></div>
                    <div className="col mx-3 mb-3 d-inline-block"><BsTwitter size={30} color='#E4ECEC'/></div>
                
                </div>
            </div>
        </div>


    </Wrapper>
  )
}
const Wrapper=styled.div `
height:auto;
margin:30px;
background:#44545C;
color:white;
& a{
    color:white;
    font-size:20px;
}


`;