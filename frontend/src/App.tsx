import React from 'react'
import TopNavBar from './Components/TopNavBar'
// import Footer from './Components/Footer'

const App = () => {
  return (
    <div className=' min-h-screen bg-slate-100'>
        <TopNavBar />
        <div className='flex flex-col justify-center items-center'>
          <button className=' bg-green-700 p-2 rounded-md  w-40 '>Upload</button>
          <p>subtile file *.srt or text file *.txt *.pdf</p>
        </div>
        <div className='mt-5 mx-auto p-5 bg-red-300 rounded-lg' style={{width:800}}>
          <p>insert your text here:</p>
          <textarea className=' w-full'></textarea>
        </div>
        {/* <Footer /> */}
    </div>
  )
}

export default App