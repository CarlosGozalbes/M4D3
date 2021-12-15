import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSing from './components/WarningSing'
import BookList from './components/BookList'
import Filter from './components/Filter';
import MyBadge from './components/MyBadge';
import { Container,Col, Row } from 'react-bootstrap';



function App() {
  return (
    <div className="App">
      <Container>
      <Filter/>
      <MyBadge name='this is badge' color='danger'/>
      <WarningSing alertstring='is prop working?'/>
    <Row>
    <Col md="9">
      <BookList/>
    
    </Col>
    <Col md="3">
      <h1>Here is the selected book</h1>
    </Col>

    </Row>


      </Container>
      
    </div>
  );
}

export default App;
