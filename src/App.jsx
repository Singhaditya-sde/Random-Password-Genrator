import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [numberallowed, setnumberallowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [password, setpassword] = useState("")

  //Use of the UseRef for the copy button
  const passwordref = useRef(null)

  const passwordgenrator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed) str+="0123456789"
    if(charallowed) str+="!'()*+,-./:;<=>?@"

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
        pass += str.charAt(char)
    }
    setpassword(pass)
  } , [length,numberallowed,charallowed,setpassword])

  const copypasswordtoclipboard =useCallback(() => {
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordgenrator()
  },[length,numberallowed,charallowed,passwordgenrator])

  return (
    <>
      <div className='w-full max-w-md mx-auto  shadow-md rounded-lg  p-9 px-5 my-8 text-orange-500 bg-gray-700'>
          <h1 className='text-4xl text-center text-white mb-3 my-3'>Password Genrator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white ">
          <input
            type='text'
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordref}
          />
          <button onClick={copypasswordtoclipboard} className='bg-blue-700 text-white outline-none px-3 shrink-0 cursor-pointer'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 cursor-pointer'>
            <input 
              type='range'
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(l)=>{setLength(l.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1 cursor-pointer'>
            <input
              type='checkbox'
              defaultChecked={numberallowed}
              id="numberinput"
              onChange={()=>{
                setnumberallowed((prev) => !prev)
              }}
            />
            <label htmlFor='numberInput'>Number:</label>
          </div>
          <div className='flex items-center gap-x-1 cursor-pointer'>
            <input
              type='checkbox'
              defaultChecked={charallowed}
              id="charinput"
              onChange={()=>{
                setcharallowed((prev) => !prev)
              }}
            />
            <label htmlFor='charInput'>Charater:</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
