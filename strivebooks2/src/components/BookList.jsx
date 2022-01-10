import { Component}  from 'react'
import {  Row, Col } from 'react-bootstrap'
import scifi from '../data/scifi.json'
import SingleBook from './SingleBook'
import CommentArea from './components/CommentArea'

class BookList extends Component {
    
    state = {
        
        selectedBook: null,
      };

    render() {
        return (
           
                <Row className = "m-2">
                    
                    <Col md="9">
                    {
                                                    
                        scifi.map(book => (
                         <SingleBook key={book.asin} book={book}/>
                        ))
                        }
                    </Col>
                    <Col md="3">
                        <h1>Comment section</h1>
                        <CommentArea/>
                    </Col>
                </Row>

                
                
            
        )
    }
}

export default BookList


