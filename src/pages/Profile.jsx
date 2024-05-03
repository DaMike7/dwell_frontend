import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authService } from "../services/authService";
import SideNav from "../components/SideNav";
import client from "../api";

const Profile = () => {
  const [username, setUsername] = useState('');
  const [userRole, setUserRole] = useState('');
  const [userId,setUserId] = useState('')
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [message, displayMessage] = useState(null);
  //
  const [updatedFirstName,setUpdatedFirstName] = useState('')
  const [updatedLastName,setUpdatedLastName] = useState('')
  const [updatedEmail , setUpdatedEmail] = useState('')
  const [updatedBday , setUpdatedBday] = useState('')
  const [updatedFCN , setUpdatedFCN] = useState('')
  const [updatedSCN , setUpdatedSCN] = useState('')
  const [updatedState,setUpdatedState] = useState('')
  const [updatedlga,setUpdatedlga] = useState('')
  const [updatedAddress , setUpdatedAddress] = useState('')
  //


  useEffect(() => {
    const username = authService.getUsername();
    setUsername(username);

    const userRole = authService.getUserRole();
    setUserRole(userRole);

    const userId = authService.getUserId();
    setUserId(userId)

    // Fetch user data when the component mounts
    fetchUserData();
  }, [username]);

  const [data, setData] = useState([]);

  const handleUpdate  = async (e) => {
    e.preventDefault();

    try {
      const updatedData ={
        first_name : updatedFirstName,
        last_name:updatedLastName,
        email:updatedEmail,
        birthday:updatedBday,
        first_contact_number:updatedFCN,
        second_contact_number:updatedSCN,
        state:updatedState,
        local_government:updatedlga,
        address:updatedAddress

      }     
      if (userRole === "tenant"){
      const response = await client.put(`users/tenants/update-user/${userId}/`,updatedData,{ withCredentials: true,
        headers: {
        'Content-Type': 'multipart/form-data',
    }, });
        if(response.status === 201 ){
          console.log('Details Updated Sucessfully')
          displayMessage("Profile Updated Successfully!")
      }
      setError(null);
      //
      } else if (userRole === "property_owner"){
        const response = await client.put(`users/property-owners/${userId}/`,updatedData,{ withCredentials: true,
          headers: {
          'Content-Type': 'multipart/form-data',
      }, });
      if(response.status === 201 ){
        console.log('Details Updated Sucessfully')
        displayMessage("Profile Updated Successfully!")
      }
      setError(null);
        }
    } catch (error) {
        console.error("Error fetching user data:", error.response);
        setError('Couldn\'t update data ,check data and try again');
  };

  }

  const fetchUserData = async () => {
    try {
      if (userRole === "tenant"){
      const response = await client.get(`users/tenants/${username}/`);
      setData(response.data);
      } else if (userRole === "property_owner"){
        const response = await client.get(`users/property-owners/${username}/`);
        setData(response.data);
        }

    } catch (error) {
        console.error("Error fetching user data:", error.response);
    }
  };

  return (
    <>
      <SideNav />
      <div className="p-4 sm:ml-64 border-gray-800 rounded-lg bg-gray-50">
        <div className="flex justify-center items-center ">
          <section class="">
            <div className="mx-4 my-8">
              <img className="h-60 w-60 rounded-full border-8 border-slate-300 ring-2 ring-rose-300 dark:ring-gray-500" src={data.profile_picture} alt="profile_picture" />
            </div>
            <div className="font-light text-gray-400 sm:text-lg dark:text-gray-400 text-center">
              <h2 className="mb-2 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{data.first_name}<span className="ml-4">{data.last_name}</span></h2>
              
            </div>
            
          </section>
        </div>
        {/**/}
        <div class="gap-14  py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6 p-5 mb-4 border border-rose-200 rounded-lg bg-slate-300 dark:bg-gray-800 dark:border-gray-700">
        

          <form>
              <div class="grid gap-6 mb-6 md:grid-cols-2">

                  {/*USERNAME*/}
                  <div>
                      <label for="phone" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Username</label>
                  <div class="relative">
                  <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
  
                      </div>
                      <p aria-describedby="helper-text-explanation" class="bg-blue-100 border border-pink-500 text-gray-900 text-lg rounded-sm font-semibold focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">@{data.username}</p>
                  </div>
                  </div> 
                  
                  {/*FIRST NAME*/}
                  <div>
                      <label for="phone" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">First Name</label>
                  <div class="relative">
                  <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <svg class="w-6 h-6 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
                    </svg>
  
  
                      </div>
                      <input type="text" value={updatedFirstName} onChange={(e) => setUpdatedFirstName(e.target.value)} aria-describedby="helper-text-explanation" class="bg-blue-100 border border-pink-500  text-gray-900 text-sm  font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={data.first_name} />
                  </div>
                  </div> 

                  
                  
                  {/*LAST NAME*/}
                  <div>
                      <label for="phone" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Last Name</label>
                  <div class="relative">
                  <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
                    </svg>
  
  
                      </div>
                      <input type="text" value={updatedLastName} onChange={(e) => setUpdatedLastName(e.target.value)} aria-describedby="helper-text-explanation" class="bg-blue-100 border border-pink-500 font-bold text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder={data.last_name} />
                  </div>
                  </div> 
                  
                  {/*EMAIL*/}
                  <div>
                      <label for="phone" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Email</label>
                  <div class="relative">
                  <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <svg class="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.5a6 6 0 0 1 1.5 4v4a1 1 0 1 1-2 0v-4a4 4 0 0 0-4-4h-.5C5 6 3 8 3 10.5V16c0 .6.4 1 1 1h7v3c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-3h5c.6 0 1-.4 1-1v-6a4 4 0 0 0-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z"/>
                    </svg>
  
  
                      </div>
                      <input type="text" value={updatedEmail} onChange={(e) => setUpdatedEmail(e.target.value)} aria-describedby="helper-text-explanation" class="ml-2 bg-blue-100 border border-pink-500 font-bold text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder={data.email} />
                  </div>
                  </div>  

                  

                  {/*FIRST CONTACT NUMBER*/}
                  <div>
                      <label for="phone" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">First Phone Number</label>
                  <div class="relative">
                  <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <svg class="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 4a2.6 2.6 0 0 0-2 .9 6.2 6.2 0 0 0-1.8 6 12 12 0 0 0 3.4 5.5 12 12 0 0 0 5.6 3.4 6.2 6.2 0 0 0 6.6-2.7 2.6 2.6 0 0 0-.7-3L18 12.9a2.7 2.7 0 0 0-3.8 0l-.6.6a.8.8 0 0 1-1.1 0l-1.9-1.8a.8.8 0 0 1 0-1.2l.6-.6a2.7 2.7 0 0 0 0-3.8L10 4.9A2.6 2.6 0 0 0 8 4Z"/>
                    </svg>
  
                      </div>
                      <input type="text" value={updatedFCN} onChange={(e) => setUpdatedFCN(e.target.value)} aria-describedby="helper-text-explanation" class="ml-2 bg-blue-100 border border-pink-500 font-bold text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="\+234[0-9]{10}" placeholder={data.first_contact_number} />
                  </div>
                  </div>

                  {/*SECOND CONTACT NUMBER*/}
                  <div>
                      <label for="phone" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Second Phone Number</label>
                  <div class="relative">
                  <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <svg class="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 4a2.6 2.6 0 0 0-2 .9 6.2 6.2 0 0 0-1.8 6 12 12 0 0 0 3.4 5.5 12 12 0 0 0 5.6 3.4 6.2 6.2 0 0 0 6.6-2.7 2.6 2.6 0 0 0-.7-3L18 12.9a2.7 2.7 0 0 0-3.8 0l-.6.6a.8.8 0 0 1-1.1 0l-1.9-1.8a.8.8 0 0 1 0-1.2l.6-.6a2.7 2.7 0 0 0 0-3.8L10 4.9A2.6 2.6 0 0 0 8 4Z"/>
                    </svg>
  
                      </div>
                      <input type="text" value={updatedSCN} onChange={(e) => setUpdatedSCN(e.target.value)} aria-describedby="helper-text-explanation" class="ml-2 bg-blue-100 border border-pink-500 font-bold text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="\+234[0-9]{10}" placeholder={data.second_contact_number} />
                  </div>
                  </div>

                  {/*BIRTHDAY*/}
                  <div>
                      <label for="phone" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Birthday</label>
                  <div class="relative">
                  <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <svg class="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M5 5c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1a2 2 0 0 1 2 2v1c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V7c0-1.1.9-2 2-2ZM3 19v-7c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6-6c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1ZM7 17a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
                    </svg>
  
                      </div>
                      <input type="text" value={updatedBday} onChange={(e) => setUpdatedBday(e.target.value)} aria-describedby="helper-text-explanation" class="ml-2 bg-blue-100 border border-pink-500 font-bold text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder={data.birthday} />
                  </div>
                  </div>

                  {/*STATE*/}
                  <div>
                      <label htmlFor="phone" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">State</label>
                  <div class="relative">
                  <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <svg class="w-[30px] h-[30px] text-gray-800  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z" clip-rule="evenodd"/>
                    </svg>
  
                      </div>
                      <input type="text" value={updatedState} onChange={(e) => setUpdatedState(e.target.value)} aria-describedby="helper-text-explanation" class="ml-2 bg-blue-100 border border-pink-500  font-bold text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={data.state} />
                  </div>
                  </div>

                  {/*LGA*/}
                  <div>
                      <label for="phone" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Local Government</label>
                  <div class="relative">
                  <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                      <svg class="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z" clip-rule="evenodd"/>
                      </svg>
                      </div>
                      <input type="text" value={updatedlga} onChange={(e) => setUpdatedlga(e.target.value)} aria-describedby="helper-text-explanation" class="ml-2 bg-blue-100 border border-pink-500 font-bold text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder={data.local_government} />
                  </div>
                  </div>

                  {/*ADDRESS*/}
                  <div>
                      <label for="phone" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Address</label>
                  <div class="relative">
                  <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <svg class="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12 2a8 8 0 0 1 6.6 12.6l-.1.1-.6.7-5.1 6.2a1 1 0 0 1-1.6 0L6 15.3l-.3-.4-.2-.2v-.2A8 8 0 0 1 11.8 2Zm3 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd"/>
                    </svg>
  
  
                      </div>
                      <input type="text" value={updatedAddress} onChange={(e) => setUpdatedAddress(e.target.value)} aria-describedby="helper-text-explanation" class="ml-2 bg-blue-100 border border-pink-500 font-bold text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder={data.address} />
                  </div>
                  </div>
                  {/**URL */}
                  {authService.getUserRole() === "property_owner" ? (
                  
                  <div>
                      <label for="phone" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Website Url</label>
                  <div class="relative">
                  <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <svg class="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12 2a3 3 0 0 0-2.1.9l-.9.9a1 1 0 0 1-.7.3H7a3 3 0 0 0-3 3v1.2c0 .3 0 .5-.2.7l-1 .9a3 3 0 0 0 0 4.2l1 .9c.2.2.3.4.3.7V17a3 3 0 0 0 3 3h1.2c.3 0 .5 0 .7.2l.9 1a3 3 0 0 0 4.2 0l.9-1c.2-.2.4-.3.7-.3H17a3 3 0 0 0 3-3v-1.2c0-.3 0-.5.2-.7l1-.9a3 3 0 0 0 0-4.2l-1-.9a1 1 0 0 1-.3-.7V7a3 3 0 0 0-3-3h-1.2a1 1 0 0 1-.7-.2l-.9-1A3 3 0 0 0 12 2Zm3.7 7.7a1 1 0 1 0-1.4-1.4L10 12.6l-1.3-1.3a1 1 0 0 0-1.4 1.4l2 2c.4.4 1 .4 1.4 0l5-5Z" clip-rule="evenodd"/>
                    </svg>
  
  
  
                      </div>
                      <input type="text" id="phone-input" aria-describedby="helper-text-explanation" className="ml-2 bg-blue-100 border border-pink-500 font-bold  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder={data.website_url} />
                  </div>
                  </div>
                  ):(<h1></h1>)}
              </div>
              {/*POSITION*/}
              {authService.getUserRole() === "property_owner" ? (
                  <div className="mb-4">
                      <label for="phone" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Position</label>
                  <div class="relative">
                  <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <svg class="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.4l1.4.7a7.7 7.7 0 0 0 .7.3 21 21 0 0 0 16.4-.3l1.5-.7V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5c0-.6-.4-1-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.4 7.9.6-.3V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.4l.6.3a10 10 0 0 0 .7.3 23 23 0 0 0 18-.3h.1L21 13l.4.9ZM12 10a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z" clip-rule="evenodd"/>
                    </svg>
  
  
                      </div>
                      <p type="text" id="phone-input" aria-describedby="helper-text-explanation" class="ml-2 bg-blue-100 border border-pink-500  text-gray-900 text-sm font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >{data.position}</p>
                  </div>
                  </div>
                  ):(<h1></h1>)}

              {/*SUBMIT*/}
              <button onClick={handleUpdate} class="text-white bg-pink-800 hover:bg-pink-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cya-700 dark:focus:ring-cyan-800">Update Details</button>
              {/* Error message **/}
              {error && (
                      <div className="text-red-500 mt-4 dark:text-red-400 text-sm font-medium">
                          {error}
                      </div>
              )}{message && (<p className="text-teal-800 dark:text-teal-700 text-sm font-medium">{message}</p>)}
              {message && (<p className="text-teal-800 dark:text-teal-700 text-sm font-medium">{message}</p>)}

          </form>


      </div>              
      </div>
    </>
  );
};

export default Profile;