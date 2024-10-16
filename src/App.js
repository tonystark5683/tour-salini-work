
import { useState } from 'react';
import './App.css';
import Tours from './Component/Tours';
import { cities } from './Data/Data';

function App() {


  const [data,setData]=useState(cities)


  const removeTour=(id)=>{
    const newCities=data?.filter((el)=>el.id!==id)

    setData(newCities)

  }

  if(data.length===0){
    return (
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button className ="refresh_btn" onClick={()=>setData(cities)}>
          Refresh
        </button>

      </div>
    )
  }
  return (
    <div className="App">
      <div className='container'>
      <h1 className='title'>Plan With Shalini</h1>
      </div>
      
      <Tours tours={data} ondelete={removeTour}/>
    </div>
  );
}

export default App;
