import styled from "styled-components";
import React, {useState,useEffect} from 'react';
import {useTrail,animated} from 'react-spring';
import {v4 as uuidv4} from 'uuid';

import fetchGalleryFunction from "../Gallery/FetchGalleryFunction"


export default function Gallery() {
  const [Gallery,setGallery] = useState([]);
  var dataGallery=[];
  const [filterGallery,setFilterGallery] = useState(dataGallery);

  useEffect(()=>{
 
    fetchGallery("Bébé");
    fetchGallery("Famille");
    fetchGallery("Grossesse");
    fetchGallery("Mariage");
    fetchGallery("Couple");
   

  },[]);


  async function fetchGallery(categorie) {

  
    dataGallery = await fetchGalleryFunction.fetchGallery(categorie);
    console.log(dataGallery)
    const newArr = [...Gallery,...dataGallery];
    setGallery(newArr);
    setFilterGallery(dataGallery);
  }

  const trail = useTrail(filterGallery.length,{

    from:{
      opacity:0,
      x:20
    },
    to:{
     opacity:1,
     x:0
    }
 });



 const selectGallery= e=>{
  e.preventDefault();
  // console.log(e.target.value)
  const newArr = [...Gallery];
  // console.log(Gallery)
  const newGallery = newArr.filter(item =>{
    if(e.target.value === "All"){return Gallery;}
    return item.categorie === e.target.value;
})
// console.log(e.target.value)
setFilterGallery(newGallery);

 }

  return (
    <Wrapper>
   <h1>Galerie</h1>
      <WrapperList>
        
<div className="container ">
  <select onChange={selectGallery} class="selectpicker mx-5 mb-5" data-width="100px" aria-label="Default select example">
  <option selected>All</option>
  <option value="Famille">Famille</option>
  <option value="Grossesse">Grossesse</option>
  <option value="Couple">Couple</option>
  <option value="Bébé">Bébé</option>
  <option value="Mariage">Mariage</option>
  </select>
  </div>
  
      {trail.map((cardStyle,index)=>{
     
              return <animated.div key={uuidv4()} style={cardStyle}>
                
                <WrapperCard>

                <animated.div >  
                <WrapDIvPhoto >
                <img  className="img-fluid" src={filterGallery[index].lien} alt="" />  
                  
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
`
