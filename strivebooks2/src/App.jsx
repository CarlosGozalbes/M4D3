import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSing from './components/WarningSing'
import BookList from './components/BookList'
import Filter from './components/Filter';
import MyBadge from './components/MyBadge';


function App() {
  return (
    <div className="App">
      <WarningSing alertstring='is prop working?'/>
      <MyBadge name='this is badge' color='danger'/>
      <Filter/>
      <BookList/>
      
    </div>
  );
}

export default App;
