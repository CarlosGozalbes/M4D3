import { Component}  from 'react'
import {  Row } from 'react-bootstrap'
import scifi from '../data/scifi.json'
import SingleBook from './SingleBook'


class BookList extends Component {
    
    render() {
        return (
           
                <Row className = "m-2">
                    {
                                                    
                        scifi.map(book => (
                         <SingleBook book={book}/>
                        ))
                        }
                    
                </Row>
                
            
        )
    }
}

export default BookList


