import { useEffect, useState } from "react";
import { useNavigate , Link, Navigate , useParams} from "react-router-dom";
import { authService } from "../services/authService";
import client from "../api";
import "../utils/styles.css"
import {  Popover } from "flowbite-react";
import { IoPeople } from "react-icons/io5";

export default function SideNav(){
    const [username,setUsername] = useState('')
    const [first_name,setUserFirstName] = useState('')
    const [last_name,setUserLastName] = useState('')
    const [userRole, setUserRole] = useState('');
    const [id, setUserId] = useState('');
    const navigate = useNavigate();
    const[picture,setPicture] = useState('')
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); 


    useEffect(() => {
        const username = authService.getUsername()
          setUsername(username)
        const first_name = authService.getUserFirstName()
          setUserFirstName(first_name)
        const last_name = authService.getUserLastName()
          setUserLastName(last_name)
        const userRole = authService.getUserRole();
          setUserRole(userRole);
        const id = authService.getUserId();
          setUserId(id);
        userPicture();
    },[id])

    const userPicture = async () => {
        try {
            let response;
            if (userRole === 'tenant') {
                response = await client.get(`users/tenants/picture/${id}/`);
            } else if (userRole === 'property_owner') {
                response = await client.get(`users/property-owners/picture/${id}/`);
            }

            const picture = response.data.profile_picture;
            setPicture(picture);
        } catch (error) {
            console.error('Error fetching user picture:', error);
        }
    };

    const logout = () =>{
        authService.logOutUser();
        navigate('/login')
    }
    const toggleSidebar = () => {
        setIsSidebarOpen((prevState) => !prevState);}
    return(
        <>
        <button
        onClick={toggleSidebar} 
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        {/* Use a different icon when the sidebar is open/closed */}
        <svg
          className={`w-6 h-6 ${isSidebarOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
  id="default-sidebar"
  className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
    isSidebarOpen ? '' : '-translate-x-full'
  } sm:translate-x-0`}
  aria-label="Sidenav"
 >
  <button onClick={toggleSidebar} className="close-button absolute top-4 right-4">
  <svg className="w-[26px] h-[26px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
</svg>

  </button>
    
            <div className="overflow-y-auto py-5 px-3 h-full bg-gradient-to-r from-slate-300 to-slate-400  border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <ul className="space-y-4">
                    {/*PROFILE PICTURE*/}
                    <img className="h-16 w-16 rounded-full ml-4" src={picture} alt="profile_picture"/><span className="text-xl text-rose-600 pl-4">{first_name} {last_name}</span>
                    <li>
                        {/**PROFILE */}
                        <Link to={`/profile/${username}`} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg className="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clipRule="evenodd"/>
                            </svg>
  
                            <span className="ml-3">@{username}</span>
                        </Link>
                        {/**HOME */}
                        <Link to="/home" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg className="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z" clipRule="evenodd"/>
                            </svg>
  
                            <span className="ml-3">Home</span>
                        </Link>
                    </li>
                    
                    {/**INBOX */}
                    <li>
                        <Link to={`/inbox/${id}`} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg className="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M5 3.8A1 1 0 0 1 6 3h12c.5 0 .9.3 1 .8l1.8 8.2h-4.2a2 2 0 0 0-1.9 1.2 3 3 0 0 1-5.4 0A2 2 0 0 0 7.4 12H3.2L5 3.8ZM3 14v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-4.4a5 5 0 0 1-9.2 0H3Z" clipRule="evenodd"/>
                        </svg>
  
                            <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                        </Link>
                    </li>
                    {/** PROPERTIES*/}
                    {authService.getUserRole() === "property_owner" ? (
                    <li>
                        <Link to="/properties" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg className="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19c0 .6.4 1 1 1h3v-3c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v3h3c.6 0 1-.4 1-1v-8.5"/>
                        </svg>
  
                            <span className="flex-1 ml-3 whitespace-nowrap">Properties</span>
                        </Link>
                    </li>
                    ):(<h1></h1>)}

                    {/**USERS */}
                    {authService.getUserRole() !== "property_owner" && authService.getUserRole() !== 'tenant' ? (
                    <li>
                        <Link to="/users" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <IoPeople className="text-4xl"/>
  
                            <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                        </Link>
                    </li>
                    ):(<h1></h1>)}
                    {/** */}
                    
                    {/*SAVED*/}
                    {userRole === 'tenant' ? (
                    <li>
                          <Link to="/saved" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">
                            <svg className="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="m12.7 20.7 6.2-7.1c2.7-3 2.6-6.5.8-8.7A5 5 0 0 0 16 3c-1.3 0-2.7.4-4 1.4A6.3 6.3 0 0 0 8 3a5 5 0 0 0-3.7 1.9c-1.8 2.2-2 5.8.8 8.7l6.2 7a1 1 0 0 0 1.4 0Z"/>
                            </svg>
  
                            <span className="flex-1 ml-3 text-left whitespace-nowrap">Saved</span>

                            </Link>
                    </li>):(<h1></h1>)}
                </ul>
                <ul className="pt-5 mt-5 space-y-4 border-t border-gray-200 dark:border-gray-700">
                    <li>
                        <Link to="/faqs" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                        <svg className="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm9-3a1.5 1.5 0 0 1 2.5 1.1 1.4 1.4 0 0 1-1.5 1.5 1 1 0 0 0-1 1V14a1 1 0 1 0 2 0v-.5a3.4 3.4 0 0 0 2.5-3.3 3.5 3.5 0 0 0-7-.3 1 1 0 0 0 2 .1c0-.4.2-.7.5-1Zm1 7a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z" clipRule="evenodd"/>
                        </svg>
  
                            <span className="ml-3">FAQs</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/about-dwell' className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                            <svg className="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.4l1.4.7a7.7 7.7 0 0 0 .7.3 21 21 0 0 0 16.4-.3l1.5-.7V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5c0-.6-.4-1-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.4 7.9.6-.3V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.4l.6.3a10 10 0 0 0 .7.3 23 23 0 0 0 18-.3h.1L21 13l.4.9ZM12 10a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z" clipRule="evenodd"/>
                        </svg>
                            <span className="ml-3">About</span>
                        </Link>
                    </li>
                    
                    {userRole === 'property_owner' || userRole === 'tenant' ?(
                    <li>
                    {/**CONTACT ADMIN */}
                    <Popover
                        aria-labelledby="default-popover"
                        content={
                            <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
                            <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
                            <h3 className="font-semibold text-gray-900 dark:text-white">Contact Admin</h3>
                            </div>
                            <div className="px-3 py-2">
                                <p className="pt-2 pb-4">Hey do you suspect suspicious activities? or are you experiencing any issues</p>
                                <button className=" p-2.5 bg-slate-600 rounded-lg text-gray-100" onClick={()=> navigate('/chat/user/1')}>Message Admin</button>
                            </div>
                            </div>
                        }
                        >
                        <h1 className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                        <svg className="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.5a6 6 0 0 1 1.5 4v4a1 1 0 1 1-2 0v-4a4 4 0 0 0-4-4h-.5C5 6 3 8 3 10.5V16c0 .6.4 1 1 1h7v3c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-3h5c.6 0 1-.4 1-1v-6a4 4 0 0 0-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z"/>
                        </svg>
  
                            <span className="ml-3">Contact</span>
                        </h1>
                    </Popover>
                    </li>):(<h1></h1>)}
                    <li>
                        <button onClick={logout} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                        <svg className="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"/>
                        </svg>
                            <span className="ml-3">Logout</span>
                        </button>
                    </li>
                </ul>   
                
            </div>
            </aside>
        </>
    )
};