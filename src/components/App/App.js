import './App.css';
import cards from './data'
import Board from '../Board/Board';

function App() {
  return (
    <div className='wrapper'>
      <h1>Kanban</h1>
      <Board cards={cards} />
    </div>
  );
}

export default App;
