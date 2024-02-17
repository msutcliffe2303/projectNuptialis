import './css/App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Button from './components/Buttons';
import OutlinedButton from './components/Buttons';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Button>default</Button>
      <OutlinedButton>Outline</OutlinedButton>
    </div>
  );
}

export default App;
