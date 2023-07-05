/* eslint-disable */

import './App.css';
import { useState } from 'react'; 

function App() {

  let post = 'Vancouver Sushi Restaurants';
  let [title, setTitle] = useState(['Sweatshirt', 'Pants', 'Shirt']);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  const changeModal = () => {
    setModal(!modal);
  }

  return (
    <div className="App">
      <div className="blog-nav">
        <h4> BLOG </h4>
      </div>

      {
        title.map((a, i) => {
          return (
            <div className="list" key={i}>
              <h4> <span onClick={changeModal}>{ a }</span> <span onClick={() => {
                let copy = [...like];
                copy[i] = copy[i] + 1;
                setLike(copy);
              }}>👍</span> { like[i] } </h4>
              <p> June 30th, 2023 </p>
            </div>
          )
        })
      }

      {
        modal == true ? <Modal/> : null
      }

    </div>
  );
}

const Modal = () => {
  return (
    <div className='modal'>
      <h4> Title </h4>
      <p> Date </p>
      <p> Contents </p>
    </div>
  )
}

export default App;
