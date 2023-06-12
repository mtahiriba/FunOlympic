import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import shareVideo from '../assets/share.mp4'

export default function LocalUserLogin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [error, seterror] = useState(false)

  const navigate = useNavigate();


  const login = () => {
    if (email !== '' && password !== '') {

        const user = {
            email: email,
            password: password
        }

        localStorage.setItem('user', JSON.stringify(user))
        navigate('/', {replace: true})
    }
    
}

  return (
    <div className='flex justify-start items-center flex-col h-screen'>
        <div className='relative w-full h-full'>
            <video 
                src={shareVideo} 
                type="video/mp4" 
                loop 
                controls={false}
                muted 
                autoPlay
                className='w-full h-full object-cover'/>
        
            <div className='absolute flex flex-col justify-center items-center top-0 left-0 right-0 buttom-0 bg-blackOverlay h-full gap-3'>
                {error && (
                    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative md:w-96 w-5/6" role="alert">
                    <span class="block ">Sorry, your password was incorrect. Please double-check your password.</span>
                    <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                      <svg class="fill-current h-6 w-6 text-red-500" 
                      role="button" xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 20 20"
                      onClick={() => {seterror(false)}}
                      >
                        <title>Close</title>
                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                    </span>
                  </div>
                )}
                <div className='px-7 h-auto md:w-96 w-5/6 flex flex-col items-center rounded-md gap-4 border-gray-100 border bg-slate-800'>
                    <Link
                        to="/"
                    >
                      <h3 className='mt-10 mb-6 text-white text-2xl' >Local User Login</h3>
                        {/* <img src={logo} width="150px" alt='logo' className='mt-10 mb-6'/> */}
                    </Link>
                    
                    <input
                        className='border-gray-500 outline-none border-2 p-2 rounded-md focus:border-blue-700 w-full focus:shadow-lg shadow-blue-700 bg-slate-900 text-white'
                        type='text'
                        placeholder='Email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input
                        className='border-gray-500 outline-none border-2 p-2 rounded-md focus:border-blue-700 w-full focus:shadow-lg shadow-blue-700 bg-slate-900 text-white'
                        type='Password'
                        placeholder='Password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button
                        type='button'
                        className='bg-green-500 text-white px-6 py-2 rounded-md font-semibold text-base outline-none w-full hover:bg-green-600 hover:border-green-600 border-green-500 border-2 block'
                        onClick={login}
                    >
                        Login
                    </button>
                    <div className='flex my-2 w-full px-10'>
                        <hr className='w-2/3 h-px mx-auto mt-3 mr-5 border-0 rounded bg-white'/>
                        <p className='text-white'>OR</p>
                        <hr className='w-2/3 h-px mx-auto mt-3 ml-5 border-0 rounded  bg-white'/>
                    </div>
                    <Link
                        to="/international-user-login"
                    >
                      <p className='text-white text-sm mb-5'>International User login</p>
                    </Link>
                    
                </div>
                <div className='flex justify-center items-center border-gray-100 border-2 h-auto md:w-96 w-5/6 rounded-md py-5 bg-slate-100'>
                    <p className='text-sm font-bold'>Don't have an account? 
                        
                        <Link
                            to="/local-user-register"
                            className='text-green-500'
                        >
                            <span> Register</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
