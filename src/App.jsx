import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';

 
 

function App(props) {

const [display,setDisplay]=React.useState({
  current : "0",
  total : "0",
  isinital:true,
  preOpe:""
}
);
 function Calculator(props){
  return <button className='box2' onClick={()=>props.onClick(props.value)}>{props.value} </button>
}
function handloperator(value){
   const total=performOperation();
   setDisplay({current:total.toString(),total:total.toString(),isinital:true,preOpe:value})
}
function performOperation(){
  let total=parseInt(display.total);
  switch(display.preOpe){
    case "+": total+=parseInt(display.current);
    break;
    case "-": total-=parseInt(display.current);
    break;
    case "/": total/=parseInt(display.current);
    break;
    case "%": total%=parseInt(display.current);
    break;
    case "*": total*=parseInt(display.current);
    break;
    default:
      total=parseInt(display.current);
  }
   return total; 
}
function handlenumber(value){
   let val=value;
   if(!display.isinital){
   val=display.current+value;
   }
   setDisplay({current:val,total:display.total,isinital:false,preOpe:display.preOpe})
}
function show(){
  return display.current;
}
function handleClear(){
  setDisplay({
  current : "0",
  total : "0",
  isinital:true,
  preOpe:""
})
}
function handleEquals() {
  let total = performOperation();
  setDisplay({
    current: total.toString(),
    total: total.toString(),
    isinital: true,
    preOpe: "="
  });
}
  
  return (
    <>
     <div className='box3'>{show()}</div>
   <div className='box1'>
    <Calculator  value="7" onClick={handlenumber} />
    <Calculator value="8"  onClick={handlenumber}/>
    <Calculator  value="9"  onClick={handlenumber}/>
    <Calculator className="operator" value="*"  onClick={handloperator}/>
    <Calculator  value="4"  onClick={handlenumber}/>
    <Calculator value="5"  onClick={handlenumber}/>
    <Calculator  value="6"  onClick={handlenumber}/>
<Calculator className="operator" value="/" onClick={handloperator}/>
    <Calculator  value="1"  onClick={handlenumber}/>
    <Calculator  value="2"  onClick={handlenumber}/>
    <Calculator  value="3"  onClick={handlenumber}/>
  <Calculator className="operator" value="-" onClick={handloperator}/>
    <Calculator  value="%"  onClick={handloperator}/>
    <Calculator  value="0"  onClick={handlenumber}/>
    <Calculator  value="."  onClick={handlenumber}/>
  <Calculator className="operator" value="+" onClick={handloperator}/>
  <Calculator  value="="  onClick={handleEquals}/>
  <Calculator  value="C"  onClick={handleClear}/>
  <Calculator  value="0"  onClick={handlenumber}/>

   
   </div>
   </>
  );
}

export default App;
