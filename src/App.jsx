import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaPlane } from "react-icons/fa";


const App = () => {

  const [travel, setTravel] = useState([])
  const [post, setPost] = useState([])


  useEffect(() => {
    axios.get('/travels')
    .then(res =>{
      setTravel(Object.keys(res.data[0]))
      setPost(res.data)
    })
  }, [])
  return (
    <>
        <div className='mt-20 md:w-2/4 mx-auto'>
          <div className='bg-black container mx-auto p-4 w-3/4'>
            {
              post.map((travels) => {
                return (
                  <div key={travels.id} className='flex flex-col p-2 mb-5 bg-white shadow-md rounded-md'>
                    <div className='flight columns-3 mt-5'>
                      <div className="origin flex">
                        <p className='text-orange-400 '>{travels.origin}</p>
                        <div className="color w-2 h-2 rounded-full bg-orange-400 mt-2 ml-3">

                      <div className="dash w-48 h-0.5 bg-zinc-600 mx-12">
                        <span><FaPlane className='ml-24'/></span>
                      </div>
                        </div>
                      </div>
                      <div className="destination">
                        <p className='text-green-600 ml-52'>{travels.destination}</p>
                        <div className="color w-2 h-2 rounded-full bg-green-600 mt-5 ml-10">
                        </div>
                      </div>
                    </div>
                    <div className='mt-6'>
                      <p className='font-medium text-lg'>{travels.date}</p>
                      <p className='font-medium text-lg'>{travels.package}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
    </>
  )
}

export default App
