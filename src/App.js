/* eslint-disable */

import './App.css';
import { useState } from 'react'; 

function App() {

  let [title, setTitle] = useState(['Vancouver', 'Toronto', 'Montreal']);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [titleStatus, setTitleStatus] = useState(0);
  let [input, setInput] = useState("");

  const clickPost = () => {
    let title_copy = [...title];
    title_copy.unshift(input);
    let like_copy = [...like];
    like_copy.unshift(0);
    setTitle(title_copy);
    setLike(like_copy);
  }


  return (
    <div className="App">
      <div className="blog-nav">
        <h2> BLOG </h2>
      </div>

      {
        title.map((a, i) => {
          return (
            <div className="list" key={i}>
              <h3> <span onClick={()=>{ setModal(!modal); setTitleStatus(i) }}>{ a }</span> <span onClick={() => {
                let copy = [...like];
                copy[i] = copy[i] + 1;
                setLike(copy);
              }}>👍</span> { like[i] } </h3>
              <p> June 30th, 2023 </p>
              <button className='delete' onClick={()=>{
                let title_copy = [...title];
                title_copy.splice(i, 1);
                let like_copy = [...like];
                like_copy.splice(i, 1);
                setTitle(title_copy);
                setLike(like_copy)
              }}> delete </button>
            </div>
          )
        })
      }

      <input className="posting" onChange={(e)=>{
        setInput(e.target.value)
        }} /> 
      <button className="post" onClick={clickPost}> post </button>
      {
        modal == true ? <Modal title={title} setTitle={setTitle} titleStatus={titleStatus}/> : null
      }

    </div>
  );
}

const Modal = (props) => {
  return (
    <div className='modal'>
      <h4> { props.title[props.titleStatus] } </h4>
      <p> Date </p>
      <p> Contents </p>
      <button>Modify</button>
    </div>
  )
}

export default App;
