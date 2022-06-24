import React, { Component } from 'react';
class Like extends Component {

    render() { 
        let likes = "fa fa-heart";
        if(!this.props.liked) likes+="-o"
        return (<i onClick={this.props.onClick} style={{cursor:"pointer"}} className={likes} aria-hidden="true"></i>);
    }
}
 
export default Like;