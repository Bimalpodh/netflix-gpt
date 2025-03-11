import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { USER_PROFILE_LOGO } from '../utils/constant'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header2 = () => {
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user)

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
      
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 bg-opacity-50 bg-gradient-to-b from-black z-10">
    {/* Logo */}
    <img
      className="w-36"
      src="src\assets\netflix-gpt.svg"
      alt="logo"
    />

    {/* Sign-in Button */}
    
  { user &&  (<div className='flex p-2'>
        <img className='h-10 rounded-4xl' src={user.photoURL} alt="user"/>
        <button
          className="text-white  font-bold w-20 rounded h-10"
         onClick={handleSignOut}>
          (Sign Out)
        </button>
      </div>)
      
      }
  
  </div>
  )
}

export default Header2