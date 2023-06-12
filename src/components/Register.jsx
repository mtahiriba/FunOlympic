import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import jwt_decode from "jwt-decode";
import { GoogleLogin } from '@react-oauth/google'
import logo from '../assets/images/logo.png'
import {USERS} from '../shared/users'

function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')

    const navigate = useNavigate();

    const responseGoogle = (response) => {
        var decoded = jwt_decode(response.credential);
        console.log(decoded)

        const userObj = {
            _id: decoded.sub,
            email: decoded.email,
            name: decoded.name,
            password: '',
            picture: decoded.picture,
        }
        
        localStorage.setItem('user', JSON.stringify(userObj))
        navigate('/', {replace: true})
    }


    const Register = () => {
        if(name.length>0 && name.length>0 && name.length>0 && name.length>0){
            if(password === confirmPass && (USERS.filter((user) => user.email === email).length === 0)){
                USERS.push({
                    _id: USERS.length + 1,
                    name: name,
                    email: email,
                    password: password,
                    picture: 'https://www.nicepng.com/png/full/136-1366211_group-of-10-guys-login-user-icon-png.png'
                })
                navigate('/login', {replace: true})
            }
            else{
                //error
            }
        }
        else{
            //error
        }
    }


  return (
    <div className='flex flex-col items-center h-full bg-gray-50 md:h-screen'>
                <div className='flex justify-between md:px-20 px-10 w-full mt-3'>
                    <Link
                        to="/"
                    >
                        <img src={logo} width="130px" alt='logo' className=''/>
                    </Link>
                    <div className='flex justify-center items-center gap-3'>
                        <p className='hidden md:flex font-bold text-px opacity-70 text-neutral-600'>Already have an account?</p>    
                        <Link
                            to="/Login"
                            className='text-neutral-600 font-bold text-md hover:text-green-500'
                        >
                            <span>Login</span>
                            
                        </Link>    
                    </div>
                </div>
                <div className='flex flex-col items-center h-full w-full md:pt-12 pt-8'>
                    <div className='px-5 md:px-10 h-auto md:w-2/6 w-5/6 flex flex-col items-center rounded-md gap-4 border-gray-100 border bg-white py-8 shadow-xl'>
                        <div className='w-full'>
                            <h1 className='text-2xl font-bold  mb-3'>Sign up</h1>
                            <hr className='w-full h-px -mt-1 mb-5 border-0 rounded  bg-gray-300'/>
                        </div>
                        <input
                            className='flex-1 border-gray-200 outline-none border-2 p-2 rounded-md hover:border-gray-400 w-full focus:border-blue-400'
                            type='text'
                            placeholder='Full Name'
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                        <input
                            className='flex-1 border-gray-200 outline-none border-2 p-2 rounded-md hover:border-gray-400 w-full focus:border-blue-400'
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <input
                            className='flex-1 border-gray-200 outline-none border-2 p-2 rounded-md hover:border-gray-400 w-full focus:border-blue-400'
                            type='Password'
                            placeholder='Create a password'
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        <input
                            className='flex-1 border-gray-200 outline-none border-2 p-2 rounded-md hover:border-gray-400 w-full focus:border-blue-400'
                            type='Password'
                            placeholder='Confirm password'
                            value={confirmPass}
                            onChange={(e)=>setConfirmPass(e.target.value)}
                        />
                        <button
                            type='button'
                            className='bg-green-500 text-white px-6 py-2 rounded-md font-semibold text-base outline-none w-full hover:bg-green-600 hover:border-green-600 border-green-500 border-2 block'
                        onClick={Register}
                        >
                            Rigister
                        </button>
                        <div className='flex my-2 w-full px-10'>
                            <hr className='w-2/3 h-px mx-auto mt-3 mr-5 border-0 rounded bg-gray-300'/>
                            <p className=''>OR</p>
                            <hr className='w-2/3 h-px mx-auto mt-3 ml-5 border-0 rounded  bg-gray-300'/>
                        </div>
                        <div className='shadow-2xl'>
                            <GoogleLogin
                                onSuccess={responseGoogle}
                                onError={()=>{
                                    console.log("Login Error")
                                }}
                            />
                        </div>
                    </div>
               </div>
            </div>
  )
}

export default Register