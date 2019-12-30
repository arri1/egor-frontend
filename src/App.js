import React,{useState}from 'react';
import img1 from './img/img1.jpg'
import axios from 'axios'
const App=()=> {
  const [key,setKey]=useState(false)
  const a ='hello egor'
  const b ='hello gosha'
  const onClick = ()=>{
    axios.get('http://localhost:1337/answers')
      .then(function (data) {
        // handle success
        console.log(data.data[0].text);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
  const secondFunc = ()=>{
    setKey(!key)
  }
  return (
    <div>
      {false?a:b}
      <button onClick={onClick}>knopka</button>
      {key?<img src={img1}/>:null}
    </div>
  );
}

export default App;
