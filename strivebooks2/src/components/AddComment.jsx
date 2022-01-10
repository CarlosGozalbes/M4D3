import { Component } from "react";
import { Form, Button } from 'react-bootstrap'

class AddComment extends Component {
    state = {
        comment: {
         
        rate: '',
        comment: '',
        elementId: this.props.bookid
        }
    }

    handleInput = (property, value) => {
        this.setState({
            comment: {
                ...this.state.comment,
                [property]: value
    
            }
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
                method: 'POST',
                body: JSON.stringify(this.state.comment),
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU5ZjRjZmY1ZjAwMTU5MGJkYjAiLCJpYXQiOjE2NDE4MjMwOTYsImV4cCI6MTY0MzAzMjY5Nn0.BV31LfYAMSTwRVXPREO6uDKBAFVApeBsU8fj968Qw3w",
                    'Content-Type': 'application/json',
                }
            })
            if (response.ok) {
                alert('comment posted')
                this.setState({
                    comment: {
                         
                        rate: '',
                        comment: '',
                        elementId: this.props.bookid    
                    }
                })
            } else {
                alert('There was a problem posting your comment')
            }
                
        } catch (error) {
            console.log(error)
        }
    }

    render() { 
        return (
            <Form onSubmit={this.handleSubmit}>
                {/* <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="name..." value={this.state.comment.name} onChange={(e) => {this.handleInput('name', e.target.value)}}/>
                </Form.Group> */}
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Rate the book</Form.Label>
                    <Form.Control as="select" value={this.state.comment.rate} onChange={(e) => {this.handleInput('rate', e.target.value)}}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
                
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="comment..." value={this.state.comment.comment} onChange={(e) => {this.handleInput('comment', e.target.value)}}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                        Submit
                </Button>
            </Form>
  )
}
}
export default AddComment



