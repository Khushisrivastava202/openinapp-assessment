import { Avatar,Navbar , Dropdown} from 'flowbite-react';
import { Link } from 'react-router-dom';
import { IoMdNotificationsOutline } from "react-icons/io";
import logo from '../assets/logo2.png'
import { UserAuth } from '../components/AuthContext';
import { useEffect,useState } from 'react';
import { useNavigate,useLocation } from "react-router-dom";


export default function Header() {
  const { logOut, user } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <Navbar>
       <Navbar.Toggle className='mt-4'  /> 

      <Link to="/" className="flex font-semibold mt-4 sm:ml-[0%]">
        <img src={logo} alt='logo' className="w-12 h-12 sm:w-16 sm:h-16"/>
        <span className=' ml-[10%] mt-2 text-2xl sm:text-4xl'>Base</span>
      </Link>
      <div><h2 className='flex sm:mt-4 text-white sm:text-black font-semibold text-4xl'>Upload CSV</h2></div>
      <div><h2 className='sm:mt-  text-black font-semibold text-4xl'></h2></div>
      <div><h2 className='sm:mt-  text-black font-semibold text-4xl'></h2></div>
      <div><h2 className='sm:mt-  text-black font-semibold text-4xl'></h2></div>
      <div><h2 className='sm:mt-  text-black font-semibold text-4xl'></h2></div>


      <div className='flex gap-2 md:order-2'>
        <Link to='notification'
          className='w-14 h-10 sm:inline'
        >
          <IoMdNotificationsOutline className='text-4xl mt-2'/>
        </Link>
        <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={user?.photoURL} rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>{user?.displayName}</span>
            </Dropdown.Header>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
          </Dropdown>         
      </div>
          
    </Navbar>
  );
}


          
         
          
          