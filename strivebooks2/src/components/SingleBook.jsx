import React from 'react'
import { Card, Col } from 'react-bootstrap'
import CommentArea from './CommentArea'

class SingleBook extends React.Component {
    state = {
        selected: false
    }
    
    render() {
        return (
        <>
        <Col xs={12} md={6} lg={3}>
                <Card   className="bg-dark text-white my-3 d-flex " style={{ width: '10rem', border: this.state.selected ? '3px solid red' :'none'  }} onClick={()=>this.setState({selected:!this.state.selected})}>
                <Card.Img className="img-fluid cover" src={this.props.book.img} alt="book image" style= { {height: `18rem`, overflow: `hidden`, fit: `contain`}} /* style={{object-Fit: 'cover',}} */ />
                <Card.ImgOverlay className='justify-content-end'>
                    <Card.Title>{this.props.book.title}</Card.Title>
                    
                </Card.ImgOverlay>
            </Card>
            {
            this.state.selected && (
                <CommentArea bookid={this.props.book.asin}/>
            )
            }
        </Col>
        
        </>
)



    }
}

export default SingleBook

