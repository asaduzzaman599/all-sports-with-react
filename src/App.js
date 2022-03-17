import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Sports from './component/Sports/Sports';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <hr />
      <Sports></Sports>
      <hr />
      <Footer></Footer>
    </div>
  );
}

export default App;
