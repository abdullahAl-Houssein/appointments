import './App.css';
import React, { useState } from 'react'

import {Container,Row,Col} from "react-bootstrap"
import {  datas } from "./datajson";
import NavBar from './compents/NavBar';
import Content from './compents/Content';
import Action from './compents/Action';
function App() {
let [state,setState] = useState(datas)
const OnDelete = () =>{
  setState([])
}
const ViewData = () =>{
  setState(datas)
}

  return (
   
    <div className='font color-body'>
      <Container className='py-5'>
        <NavBar  data={state}/>
        <Content data={state}/>
        <Action ViewData={ViewData} OnDelete={OnDelete}/> 
      </Container>
    </div>

  )
}

export default App;
