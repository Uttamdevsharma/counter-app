import logo from './logo.svg';
import { useState } from 'react';
import './App.css';



  
function App() {
  const[dynamicCounter1,setDynamicCounter1] = useState(20);
  const[dynamicCounter2,setDynamicCounter2] = useState(15);

  const increaseHandler1 = () => {
    setDynamicCounter1(dynamicCounter1+1);
  };

  const decreaseHandler1 = () => {
   setDynamicCounter1(dynamicCounter1-1);
  };


  const increaseHandler2 = () => {
    setDynamicCounter2(dynamicCounter2+1);
  };

  const decreaseHandler2 = () => {
   setDynamicCounter2(dynamicCounter2-1);
  };


  return (
    <div className="App">

      <div className='counter-app-1'>
      <p>The value of the counter is {dynamicCounter1}</p>
      
      <button onClick={increaseHandler1}>Increase By 1</button>
      <button onClick={decreaseHandler1}>Decrease By 1</button>
      </div>

      <div className='counter-app-2'>
      <p>The value of the counter is {dynamicCounter2}</p>
      
      <button onClick={increaseHandler2}>Increase By 1</button>
      <button onClick={decreaseHandler2}>Decrease By 1</button>
        
      </div>
      
      
    </div>

  );
 

}
    
export default App;
