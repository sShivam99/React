import { useState,useCallback,useEffect } from 'react'

function App() {
  
  const [length,setLength]= useState(8);
  const [numberAllowed,setnumberAllowed]=useState('False');
  const [characterAllowed,setcharacterAllowed]=useState('False');
  const [password,setPassword]=useState('');

  const passwordGenerator=useCallback(
    ()=>{
      let pass='';
      let characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy';

      if(numberAllowed) characters+='0123456789';
      if(characterAllowed) characters+='{}[]|\:<>./?`~!@#$%';

      for(let i=1;i<=length;i++)
      {
        let index=Math.floor(Math.random()*characters.length +1);
        pass+=characters[index];
      }
      setPassword(pass);
    },
    [length,numberAllowed,characterAllowed,setPassword]
  );
  
  useEffect(()=>{passwordGenerator()}
  , [length,numberAllowed,characterAllowed]);

  return (
    <>
    <div className='px-4 py-4 border-slate-950 rounded-xl w-400'> 
    <input 
    type="text"
    value={password} 
    placeholder='Password' 
    readOnly/>
    
    </div>
    <input type="range" 
    value={length} 
    onChange={(e)=>setLength(e.target.value)}
    min={8}
    max={100}
    /> 
    <label>Length :{length}</label>
    <input type="checkbox" 
    defaultChecked={numberAllowed}
      onChange={()=>setnumberAllowed((prev=>!prev))}
    />
    <label>Number</label>
    <input type="checkbox" 
    defaultChecked={characterAllowed}
      onChange={()=>setcharacterAllowed((prev=>!prev))}
    />
    <label>Character</label>
    </>
    
  )
}

export default App
