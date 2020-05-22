import React from 'react';
import './App.css';
import { connect } from 'react-redux'

function App(props) {
  console.log(props)
  return (
    <div className="App">
     hello
     <h1>my name {props.myname}</h1>
     <button onClick={()=> {props.chnageName("vibhu ")}}>chnage name</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    myname:state.name 
  } //use nmae of data from reducer componenet and here use in App  us orops
}

const mapDispatchToProps = (dispatch) => {
  return {
    chnageName: (name) => { dispatch({type:'CHANGE_NAME', payload:name}) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
//higher order component recives component here connect recives appp
