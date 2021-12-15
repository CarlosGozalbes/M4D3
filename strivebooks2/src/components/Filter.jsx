import { Component } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import scifi from '../data/scifi.json'



class Filter extends Component {
    /* state = {

    } */
    render() {
        return(
        <div className='d-flex justify-content-center'>
        <InputGroup className="mb-3 w-75 justify-content-center">
        <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">Busqueda de libros</InputGroup.Text>
        
        </InputGroup.Prepend>
            <FormControl
                type="text"
                placeholder="search..."                
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"/>
        <InputGroup.Append>
            <Button variant="outline-secondary">Search</Button>
        </InputGroup.Append>
        </InputGroup>
        </div>
        
        )
    }
}

export default Filter