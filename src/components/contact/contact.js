import React, {useState} from 'react';
import axios from 'axios';
import styled from "styled-components";

export default function Contact() {
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting : false,
    info: {error:false,msg:null}
  });
  const [inputs,setInputs] = useState({
    email:'',
    message:''
  });

  const handleServerResponse = (ok,msg) =>{
 if(ok){
  setStatus({
    submitted:true,
    submitting:false,
    info:{error:false,msg:msg}
  });

  setInputs({
    email:'',
    message: ''
  });
 }else{
  setStatus({
    info:{error:true,msg:msg}
  })
 }
  }


  const handleOnChange = e=>{
    e.persist()
    setInputs(prev=>({
      ...prev,
      [e.target.id]: e.target.value
    }))
  setStatus({
    submitted:false,
    submitting:false,
    info:{error:false,msg:null}
  })
  }

  const handleOnSubmit = e =>{
    e.preventDefault();
    setStatus(prevStatus=>({...prevStatus,submitting:true}))
    axios({
      method:'POST',
      url:'https://formspree.io/f/mrgdggww',
      data:inputs
    }).then(Response=>{
      handleServerResponse(
        true,
        'Merci, votre méssage àété envoyé'
      )
    }).catch(error=>{
      handleServerResponse(false,error.Response.data.error)
    })

  }


  return (
    <Wrapper>
  
      <hr />
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="_name"
          onChange={handleOnChange}
          required
          value={inputs.name}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        <button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted'
            : 'Submitting...'}
        </button>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
      
    </Wrapper>
  )
}
const Wrapper=styled.div`
 margin: 7rem auto;
max-width: 600px;
& h1{
  color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
    font-weight: normal;
    line-height: 4rem;
    margin: 0 auto;
    max-width: 500px;
    text-align: center;
}
& hr{
  margin: 1rem auto;
    width: 500px;

}
& label{
  display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    margin: 3rem auto 1rem auto;
    text-align: start;
    text-transform: uppercase;
}
& textarea,input{
  background-color: #D9D9D9;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    text-align: start;
    height:40px;
    width:640px;
}
& textarea{
  height:200px;
}

& button {
    background: black;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
    font-weight: normal;
    height: 3.8rem;
    outline: none;
    text-decoration: none;
}

`;