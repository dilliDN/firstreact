import React from 'react';
import axios from 'axios'
import DisplayUser from './Displayuser';

class RemoteData extends React.Component {

    constructor(){
        super()
        this.state ={
            users:[]
        }

        this.callRemoteData = this.callRemoteData.bind(this)
    }
    
    componentWillMount(){
        this.callRemoteData()
    }

    callRemoteData(){
        axios.get("https://jsonplaceholder.typicode.com/users")
                .then((response)=>{
                    console.log(response.data)
                    this.setState({users:response.data})
                    console.log(this.state.users)
                })
    }

    displayData(){
        return(this.state.users.map((oneUser)=>{
           return(
               <DisplayUser
                    key={oneUser.id}
                    id={oneUser.id}
                    name={oneUser.name}
                    email={oneUser.email}
               ></DisplayUser>)
        }))


    }

    render() { 
        return ( <div>
                    Call the child component 
                    to dispaly JSON data.
                    <table border="1">
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Name</th>
                            <th>email</th>
                        
                        </tr>
                        </thead>
                        <tbody>
                        {this.displayData()}
                            </tbody>
                        </table>
                   
                    </div> );
    }
}
 
export default RemoteData;