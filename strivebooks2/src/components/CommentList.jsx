import { Component } from 'react'
import {ListGroup} from 'react-bootstrap'


class CommentList extends Component {
    state = {
        comments: [],
        
    }

    componentDidMount = async () => {
        
        this.fetchComments()
    }

    fetchComments = async () => {
        
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.bookid , {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU5ZjRjZmY1ZjAwMTU5MGJkYjAiLCJpYXQiOjE2NDE4MjMwOTYsImV4cCI6MTY0MzAzMjY5Nn0.BV31LfYAMSTwRVXPREO6uDKBAFVApeBsU8fj968Qw3w",
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
    
    
    render() {
        
        
        return (
            <>
                <ListGroup>
                    {
                        this.state.comments.map(c => (
                            <ListGroup.Item key={c._id}>
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