import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Add from './Add';
import Movie from './Movie';

function App() {
  return (
    <>
       <Movie cart={Add}/>
    </>
  );
}

export default App;
