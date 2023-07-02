import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; 

function App() {

  let post = 'Vancouver Sushi Restaurants';
  let [sweatshirt, setSweatshirt] = useState('Sweatshirt');
  let [sushi, setSushi] = useState('Sushi');
  let [german, func] = useState('German');

  return (
    <div className="App">
      <div className="blog-nav">
        <h4> BLOG </h4>
      </div>
      <div className="list">
        <h4> { sweatshirt } </h4>
        <p> July 1st, 2023 </p>
      </div>
      <div className="list">
        <h4> { sushi } </h4>
        <p> June 30th, 2023 </p>
      </div>
      <div className="list">
        <h4> { german } </h4>
        <p> June 29th, 2023 </p>
      </div>
    </div>
  );
}

export default App;
