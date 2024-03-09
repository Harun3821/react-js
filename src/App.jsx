import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'

function App() {
  const [count, setCount] = useState(0)
  const actor = ['shabi khan', 'Rubel', 'salmansha', 'aminKhan',]
 return (
    <>
    <h1>Vite + React</h1>
   <Actor name={"bappraj"}></Actor>
   {
    actor.map(actor=><Actor name={actor}></Actor>)
   }

    {/* <Todo task="Learen React"
     isDone={true}>
    </Todo>
    <Todo task="I have a 5000 money"
     isDone={false}>
   </Todo>
    <Todo task="Learen React" 
    isDone={true}>
    </Todo>
    <Todo task="My name is harun are roshid"
     isDone={false}>
   </Todo> */}
    
    {/* <Divce name="Laptop" price="56000"></Divce>
    <Divce name="mobile" price="15000"></Divce>
    <Divce name="watch" price="2500"></Divce>
    <Divce></Divce>
    <Person></Person>
    <Student grad="7" scor="67"></Student>
    <Student grad="8" scor="32"></Student>
    <Student grad="12" scor="21"></Student>
    <Student grad="45" scor="99"></Student>
    <Student></Student>
    <Webdising></Webdising> */}
    
    </>
  )
}


function Divce(props){
  // console.log(props)
  return <h2>This divece: {props.name} {props.price}</h2>
}






function Person(){
  const age = 21;
  const catagorey = {name: 'Roshid', money: '200'}
  return<h4>My name is {catagorey.name} khan age {age}</h4>
}

function Student({grad= 0, scor= 1}){
  console.log(grad, scor);
  return(
  <div className='student'>
     <h2>Thish is my a student</h2>
     <p>class: {grad}</p>
     <h5>score: {scor}</h5>
  </div>
  )
}

function Webdising(){
  const disingStyle = {
  border:'2px solid green',
  padding:'10px',
  margin: '10px',
  borderRadius:'10px',
  }
  return(
    <div style={disingStyle}>
      <h3>My Reacte WebDevloper</h3>
      <h4>dising dising web</h4>
      <p>coding:</p>
    </div>
  )
}



export default App
