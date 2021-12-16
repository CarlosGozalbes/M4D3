import { Component } from 'react'
import {ListGroup} from 'react-bootstrap'


class CommentList extends Component {
    state = {
        comments: [],
        
    }

    fetchComments = async () => {
        
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.bookid , {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU5ZjRjZmY1ZjAwMTU5MGJkYjAiLCJpYXQiOjE2Mzk2NjY5NjQsImV4cCI6MTY0MDg3NjU2NH0.JTNNPNkERRsBtvJOKXoxdBAiC0mv7oLZ4xfp9iu0osE",
                }
            })
            
            if (response.ok) {
                let data = await response.json()
                
                
                this.setState({
                    comments: data,
                    
                })
                
            } else {
                console.log('something went wrong')
                
            }
        } catch (error) {
            console.log(error)
            
        }
    }

    // how can we wait for the initial render to complete before doing the fetch?
    componentDidMount = async () => {
        
        this.fetchComments()
    }

    
    render() {
        
        
        return (
            <>
                <ListGroup>
                    {
                        this.state.comments.map(c => (
                            <ListGroup.Item key={c.elementId}>
                                Rate {c.rate} - {c.comment}                                
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </>
        )
    }
}

export default CommentList