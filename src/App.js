import './css/App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Button from './components/Buttons';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Button>default</Button>
    </div>
  );
}

export default App;
