import React from "react"

class Historia extends React.Component{
    


    render(){
        const {historia} = this.props
        return(
            <h1 className="historia">{historia}</h1>
        )
    }
}

export default Historia;