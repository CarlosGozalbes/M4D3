import React from "react";
import{Component} from "react"

import {Badge} from 'react-bootstrap'



class MyBadge extends Component{
    state = {}


    render(){
        return(
          <div>
            <Badge variant={this.props.color}>{this.props.name}</Badge>
            </div>)


        }
    }

    export default MyBadge