import { Link } from "react-router-dom";
import { authService } from "../services/authService";
import SideNav from "../components/SideNav";
import { useNavigate,useParams } from "react-router-dom";
import { useState , useEffect} from "react";
import client from "../api";
import Header from "../components/Header";
import { Avatar } from "flowbite-react";


const Inbox = () => {
    const [userId, setUserId] = useState('');
    const [role, setUserRole] = useState('');
    const [data, setData] = useState([]);
    const [username,setUsername] = useState('')
    const [pictures, setPictures] = useState({});
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
  
    useEffect(() => {
      const userId = authService.getUserId();
      setUserId(userId);
  
      const role = authService.getUserRole();
      setUserRole(role);

      const username = authService.getUsername()
      setUsername(username)
  
      fetchUserMessages();
    }, [userId]);
  
    const fetchUserMessages = async () => {
      setLoading(true)
      try {
        const response = await client.get(`chat/inbox/${userId}/`);
        setData(response.data);
        setLoading(false)
        setError(false)
  
        const uniqueSenders = [...new Set(response.data.map((message) => message.sender))];
        uniqueSenders.forEach(fetchProfilePicture);
  
      } catch (error) {
        setLoading(false)
        setError(true)
        console.error("Error fetching messages:", error.response);
      }
    };
  
    const fetchProfilePicture = async (senderId) => {
      try {
        if (pictures[senderId]) {
          return; // Already have this sender's picture
        }

        let profilePicture;
        try {
          const req1 = await client.get(`users/tenants/picture/${senderId}/`);
          profilePicture = req1.data.profile_picture;
        } catch (error) {
          try {
            const req2 = await client.get(`users/property-owners/picture/${senderId}/`);
            profilePicture = req2.data.profile_picture;
          } catch (innerError) {
            console.error('Both requests failed:', innerError);
          }
        }
        setPictures((prev) => ({ ...prev, [senderId]: profilePicture })); 
  
      } catch (error) {
        console.error("Couldn't fetch profile picture:", error);
      }
    };
  
    const getLatestMessages = () => {
      const latestMessages = {};
      data.forEach((message) => {
        const senderUsername = message.sender_username;
        if (!latestMessages[senderUsername] || message.timestamp > latestMessages[senderUsername].timestamp) {
          latestMessages[senderUsername] = message;
        }
      });
      return Object.values(latestMessages);
    };
    
    return(
        <>
        <SideNav/>
        <div className="p-4 sm:ml-64  flex flex-col min-h-screen bg-gradient-to-r from-gray-100 to-slate-200">
        <div >
        <Header/>
            <div>
                {loading ? (<div className="flex flex-col space-y-4 p-4 max-w-md mx-auto">
                  <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-gray-300 h-10 w-10"></div>
                    <div class="flex-1 space-y-2 py-1">
                        <div class="h-2 bg-gray-300 rounded"></div>
                        <div class="space-y-1">
                            <div class="h-2 bg-gray-300 rounded w-5/6"></div>
                            <div class="h-2 bg-gray-300 rounded w-4/6"></div>
                        </div>
                    </div>
                </div>
                
                <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-gray-300 h-10 w-10"></div>
                    <div class="flex-1 space-y-2 py-1">
                        <div class="h-2 bg-gray-300 rounded"></div>
                        <div class="space-y-1">
                            <div class="h-2 bg-gray-300 rounded w-5/6"></div>
                            <div class="h-2 bg-gray-300 rounded w-1/2"></div>
                        </div>
                    </div>
                </div>

                <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-gray-300 h-10 w-10"></div>
                    <div class="flex-1 space-y-2 py-1">
                        <div class="h-2 bg-gray-300 rounded"></div>
                        <div class="space-y-1">
                            <div class="h-2 bg-gray-300 rounded w-5/6"></div>
                            <div class="h-2 bg-gray-300 rounded w-1/2"></div>
                        </div>
                    </div>
                </div>

                <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-gray-300 h-10 w-10"></div>
                    <div class="flex-1 space-y-2 py-1">
                        <div class="h-2 bg-gray-300 rounded"></div>
                        <div class="space-y-1">
                            <div class="h-2 bg-gray-300 rounded w-5/6"></div>
                            <div class="h-2 bg-gray-300 rounded w-1/2"></div>
                        </div>
                    </div>
                </div>

                <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-gray-300 h-10 w-10"></div>
                    <div class="flex-1 space-y-2 py-1">
                        <div class="h-2 bg-gray-300 rounded"></div>
                        <div class="space-y-1">
                            <div class="h-2 bg-gray-300 rounded w-5/6"></div>
                            <div class="h-2 bg-gray-300 rounded w-1/2"></div>
                        </div>
                    </div>
                </div>
                </div>): error ? (
                    <section class=" mt-28 flex flex-col min-h-screen bg-gradient-to-r from-gray-200 to-cyan-50">
                        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                            <div class="mx-auto max-w-screen-sm text-center">
                                <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-slate-700 dark:text-primary-500">Oops!</h1>
                                <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
                                <p class="mb-4 text-lg font-light text-gray-900 dark:text-gray-400">Sorry, you don't have any message in your inbox. </p>
                                <Link to='/home' class="inline-flex text-white bg-rose-600 hover:bg-rose-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-rose-500 my-4">Back to Homepage</Link>
                            </div>   
                        </div>
                    </section>
                ):(
                <div>
                  {/**DATA */}
                  <div className="mt-16">
                    <ul>
                    {getLatestMessages().map((latestMessage) => (
                            <li >
                    
                                <Link to={`/chat/user/${latestMessage.sender}`}  onClick={() => handleButton (latestMessage.sender)} className="flex rounded-xl border border-slate-800 bg-gradient-to-r from-cyan-600 to-slate-600 my-4 pl-4 pt-4" key={latestMessage.id}>
                                <Avatar img={pictures[latestMessage.sender]}  status="offline" statusPosition="top-left" />
                                <div className="flex flex-col max-w-[320px] ml-4">
                                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                        <span className="text-sm font-semibold text-gray-200 dark:text-white">{latestMessage.sender_Fname} {latestMessage.sender_Lname} </span>
                                        <span className="text-sm font-medium text-gray-300 dark:text-gray-200">{new Date (latestMessage.timestamp).toLocaleString()}</span>
                                    </div>
                                    <p className="text-sm font-semibold py-2.5 text-gray-200 dark:text-white">{latestMessage.content}</p>
                                </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                </div>
                )}
            </div>
        </div>
          
        </div>
        </>
    )
}
export default Inbox;