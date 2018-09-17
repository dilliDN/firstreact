import React from'react'
import ReactDOM from 'react-dom'

class LifeCycle extends React.Component{
    constructor() {
        super()
        this.state = {
           status:0
        }
        this.updateState = this.updateState.bind(this)
    
    }
    componentWillMount(){
    
        console.log("Component willl be displayed in the view")
        alert("component is not displayed if u click ok it will display")
    }
    componentDidMount(){
        console.log("component displayed")
    }
    componentWillUpdate()
    {
        console.log("componen willl update uts state now")
    }
    componentDidUpdate()
    {
        console.log("Component state is updated")
    }
    updateState()
    {
    this.setState({status:this.state.status+1})
    if(this.state.status >= 10)
    {
        ReactDOM.unmountComponentAtNode(document.getElementById("container1"))
    }
    }
    un
    render()
    {
        return(
            <div>
                it will do nothing.
                <button onClick={this.updateState}>ChangeState{this.state.status}</button></div> 
        );
    }
}
export default LifeCycle;