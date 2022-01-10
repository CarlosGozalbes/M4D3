import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSing from './components/WarningSing'
import BookList from './components/BookList'
import Filter from './components/Filter';
import MyBadge from './components/MyBadge';
import { Container} from 'react-bootstrap';




function App() {
  return (
    <div className="App">
      <Container>
      <Filter/>
      <MyBadge name='this is badge' color='danger'/>
      <WarningSing alertstring='is prop working?'/>
    
      <BookList/>
    
    


      </Container>
      
    </div>
  );
}

export default App;
