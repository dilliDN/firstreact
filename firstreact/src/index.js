import React from 'react';
import ReactDOM from 'react-dom';

import FirstFriend from './FirstComponent'

import Name from './component/Name'
import Comment from './commentComponent/Comment'
import LifeCycle from './LifeCycle/LifeCycleComponent'
import FormComponent from './LifeCycle/formComponent'
import ControlledForm from './LifeCycle/controlledForm'
import RemoteData from './LifeCycle/RemoteData'
var position=document.getElementById("rootcomponent");
var position1=document.getElementById("container");
var position2=document.getElementById("container1");
var position3=document.getElementById("container2");
ReactDOM.render(<div> 
    <FirstFriend location="chennai">Pratful</FirstFriend>
    <Name colors="red">p</Name>
    <Name colors="green">R</Name>
    <Name colors="blue">A</Name>
    <Name colors="skyblue">F</Name>
    <Name colors="darkgreen">u</Name>
    <Name colors="black">L</Name>
    </div>,position);
ReactDOM.render(<div><Comment name="praful">he is genius</Comment>
<Comment name="dilli">lets plan the world tour</Comment>
<Comment name="subash">he is handsome</Comment></div>,position1);

ReactDOM.render(<LifeCycle></LifeCycle>,position2);

ReactDOM.render(<div>
    <FormComponent></FormComponent>
    <ControlledForm></ControlledForm>
    <RemoteData></RemoteData>
    </div>,position3);
