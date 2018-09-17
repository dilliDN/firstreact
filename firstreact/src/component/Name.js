import React from 'react'

class Name extends React.Component{
    render()
    
    {let colorName=
        {
            color:this.props.colors,
            backgroundColor:"burlywood",
            float:"left",
            padding:5,
            margin:"2px",
            border:"2px solid red",
            borderRadius:"10px"

        }
        return(
            <div>
                <div style={colorName}> {this.props.children}
                    </div>

                </div>

        )
    }

}
export default Name;