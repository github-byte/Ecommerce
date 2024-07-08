import React, {useState} from 'react';
import '../../../index.css'

interface LoginProps {
}

const Login: React.FunctionComponent<LoginProps> = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false);
  return (<div className='shadow-3 h-300 flex flex-col p-4 justify-center w-1/3 bg-white'>
    <div>
        <form method='POST' className='flex flex-col justify-center items-center'>
            <div className='flex justify-center bg-slate-200'>
                <img src="https://payment-order-full-stack-ecommerce-hn9z.vercel.app/static/media/signin.17a4958e14cc0056ecac.gif" alt="mndnsd" />
            </div>
            {isSignUp ? <>
                <div className='mt-7 w-full'>Name:</div>
                <input name='name' className='rounded-sm border-2  w-full bg-slate-200' placeholder='Name' value=""/>
            </> : <></>}
            <div className='mt-3 w-full'>Email:</div>
            <input name='email' className='rounded-sm border-2  w-full bg-slate-200' placeholder='Email' value=""/>
            <div className='mt-3  w-full'>Password</div>
            <div className='relative w-full'>
                <input className="relative w-full rounded-sm border-2 bg-slate-200" name='password' placeholder='Email' value=""/>
                <div className='absolute right-2 top-1 bottom-0'>
                    {isVisible ? <i className="fa-solid fa-eye" onClick={()=> setIsVisible(!isVisible)}/> : 
                        <i className="fa-solid fa-eye-slash" onClick={()=> setIsVisible(!isVisible)}></i>
                    }
                </div>
            </div>
            {isSignUp ? <>
                <div className='mt-3  w-full'>Confirm Password</div>
                    <div className='relative w-full'>
                    <input className="relative w-full rounded-sm border-2 bg-slate-200" name='password' placeholder='Email' value=""/>
                    <div className='absolute right-2 top-1 bottom-0'>
                        {isVisible ? <i className="fa-solid fa-eye" onClick={()=> setIsVisible(!isVisible)}/> : 
                            <i className="fa-solid fa-eye-slash" onClick={()=> setIsVisible(!isVisible)}></i>
                        }
                    </div>
                </div>
            </> : <></>}
            <a className='hover:underline text-right w-full' href="http://">Forgot Password ?</a>
            <button className='bg-red-600 rounded-full text-white w-2/3 mt-5 p-2' type="submit">Submit</button>
            <div className='mt-3'>Don't have an account: <span className='text-red-500 cursor-pointer' onClick={() => setIsSignUp(true)}>Sign Up</span></div>
        </form>
    </div>
  </div>);
};

export default Login;
