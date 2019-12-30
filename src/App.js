import React,{useState}from 'react';
import img1 from './img/img1.jpg'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`
const Button = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 20px;
  background-color: red;

`
const NewButton= styled(Button)`
  background-color: blue;
`

const App=()=> {
  const [key,setKey]=useState(false)
  const [testText,setTestText]=useState('')
  const a ='hello egor'
  const b ='hello gosha'
  const addName = ()=>{
    axios.post('http://localhost:1337/students', {
      "name": testText
    })

  }
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
  const textOnChange = (arg)=>{
    console.log(arg.target.value)
    setTestText(arg.target.value);
  }

  return (
    <Container>
      {false?a:b}
      <Button onClick={onClick}>knopka</Button>
      <NewButton onClick={addName}>dobavit' egora</NewButton>
      {key?<img src={img1}/>:null}
      <input  onChange={textOnChange}></input>
    </Container>
  );
}

export default App;
