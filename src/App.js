import {useEffect, useState} from 'react';
import Card from './Card';

function App() {
  const[array,setarray]=useState([]);
  const[quoteval,setquoteval]=useState({});
  const[color,setcolor]=useState('');

  function getquote(){
  fetch('https://type.fit/api/quotes'
  ).then((response)=>{return response.json();}
  ).then(val=>{
    const arr=[];
    for(const key in val)
    { 
      const value={
        id:key,
        ...val[key]
      };
      arr.push(value);
    }
    setarray(arr);
    setquoteval(arr[0]);
  });}

  function quoteSelect()
  {
    const val=Math.floor(Math.random()*array.length);
    setquoteval(array[val]);
    const randomcolor=Math.floor(Math.random()*16777215).toString(16);
    setcolor(randomcolor);
    document.body.style.backgroundColor='#'+randomcolor;
  }

  useEffect(()=>{getquote()},[]);

  return <div id="quote-box">
        <Card arr={array} value={quoteval}/>
        <button id="new-quote" style={{backgroundColor:'#'+color}} onClick={quoteSelect}>
        <a href="#" id="tweet-code">New Quote</a>
      </button>
    </div>
}

export default App;
