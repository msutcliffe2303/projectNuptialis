import './css/App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './components/Buttons';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Button>Testing</Button>
    </div>
  );
}

export default App;
