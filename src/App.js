// import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"
import Todo from './components/Todo';


function App() {

  const [input , setInput] = useState(" ")
  const [items, setItems] = useState([])
  const itemEvent = (e)=>{
    setInput(e.target.value)
    
  }

  const listItems =()=>{
      setItems((old)=>{
        return [...old,input]
      });
      setInput(" ")
      
  }
 const deleteItems=(id)=>{
    console.log("item deleted")
    setItems((old)=>{
        return old.filter((arr, index)=>{
          return index !== id;
        })
    })
  }
  return (<>    <div className='maindiv'>
     <div className='centerdiv'>
       <br />
       <h1 className='todo'>TO-DO List</h1>
       <input className='type' value={input} type="text" placeholder='enter to-do' onChange={itemEvent} />
       <button onClick={listItems} className='btn'>Add</button>
       
        { items.map((val,index)=>{
           return (<Todo id={index} key={index} text={val}
           oncelect={deleteItems}/>)
           
         })}
       
     </div>
    </div>
    </>

  );
}

export default App;
