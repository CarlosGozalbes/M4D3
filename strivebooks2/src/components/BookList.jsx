import { Component}  from 'react'
import { Container, Row } from 'react-bootstrap'
import scifi from '../data/scifi.json'
import SingleBook from './SingleBook'


class BookList extends Component {

    render() {
        return (
            <Container className="justify-content-center py-5 bg-light">
                <Row>
                    {
                                                    
                        scifi.map(book => (
                         <SingleBook book={book}/>
                        ))
                        }
                    
                </Row>
                
            </Container>
        )
    }
}

export default BookList


