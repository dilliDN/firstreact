import React from 'react'

class SecondFriend extends React.Component
{
    render(){
        return(
            <div>
                <div>
                     {this.props.children}
                </div>

                </div>

        )
    }
}
export default SecondFriend;