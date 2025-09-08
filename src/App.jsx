import { useState, useRef } from 'react'

function App() {
  const [seconds, setSeconds] = useState(0)

  const intervalRef = useRef(null)

  const start = () => {
    intervalRef.current = setInterval(() => {
      setSeconds(seconds => seconds + 1)
    }, 1000)
    console.log('started')
  }
  const stop = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null

    console.log('stopped')
  }
const reset= ()=>{
  stop();
  setSeconds(0)
  console.log('reset')
}


  return (
    <>
      <h1 className='text-4xl font-bold text-gray-900'>StopWatch {seconds} seconds</h1>
      <div className='flex gap-4 p-4 bg-gray-100 rounded-lg shadow-md'>
        <button onClick={start} className='bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded'>Start</button>
        <button onClick={stop} className='bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded'>Stop</button>
        {<button onClick={reset} className='bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded'>Reset</button>}
      </div>
    </>
  )
}

export default App
