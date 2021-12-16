import { Component } from "react";

import CommentList from "./CommentList";
import AddComment from "./AddComment";



class CommentArea extends Component {
    

render() { 
    return (
        <>
            <AddComment bookid={this.props.bookid}/>
            <CommentList bookid={this.props.bookid}/>
        </>
    )
}
}

export default CommentArea