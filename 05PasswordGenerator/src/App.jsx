import { useCallback, useEffect, useState ,useRef} from 'react'


function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*(){}~`+-_="

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random() * str.length+1)

      password += str.charAt(char)
    }
    setPassword(password)
  },
  [length,numberAllowed,charAllowed,setPassword])
  
  const  copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
  
  return (
    <>
    <div className='flex-row-reverse max-w-screen-md mx-auto shadow-md rounded-lg px-10 py-12 my-7 
      text-orange-500 bg-gray-700'>

    <h3 className="text-3xl text-center text-white gap-2 my-3">Password Generator</h3>

    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text"
      value={password}
      className='outline-none w-full py-2 px-3 bg-clip-padding my-6 rounded-l-lg h-9' 
      placeholder='Password'
      readOnly
      ref={passwordRef}
      />
      <button 
      onClick={copyPasswordToClipboard}
      className='outline-none bg-blue-500 text-white px-3 py-1 h-9 my-6 rounded-r-lg'>copy</button>
    </div>
    <div className='flex gap-x-24'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={6}
        max={50}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label>Length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={()=>{
          setNumberAllowed((prev) =>!prev);
        }}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox"
        defaultChecked={charAllowed}
        id='characterInput'
        onChange={()=>{
          setCharAllowed((prev) =>!prev);
        }}
        />
        <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
  </div>
    
    </>
  )
}

export default App
