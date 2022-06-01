import './App.css';
import Header from './Components/Heaser/Header';
import Question from './Components/Questions/Question';
import Shop from './Components/Shop/Shop';

function App() {

  return (
    <div className="">
     <div className="container">
     <Header></Header>
     </div>
  <div className="">
  <Shop></Shop>
  </div>
      <div className="">
      <Question></Question>
      </div>
     
    </div>
  );
}

export default App;
