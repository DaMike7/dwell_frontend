import { Link,useNavigate } from "react-router-dom";
import SideNav from "../components/SideNav";
import { useState , useEffect } from "react";
import { authService } from "../services/authService";
import client from "../api";
import { Card } from "flowbite-react";

const Like = () =>{
    const [userId,setUserId] = useState('')
    const [role,setUserRole] = useState('')
    const [data, setData] = useState([])
    const formatPropertyType = (type) => {
        const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);
        return capitalizedType.replace(/_/g, ' ');
      };
    const navigate = useNavigate()

    useEffect(() =>{
        const userId = authService.getUserId()
        setUserId(userId)
        FetchProps()
        
    },[userId])

    const FetchProps = async () =>{
        const Response = await client.get(`users/tenants/saved/${userId}/`)
        setData(Response.data)
    }

    const handleDelete = async (property_id) =>{
        const response  = await client.delete(`users/tenants/unlike-property/${property_id}/${userId}/`)
        FetchProps()
        if (response.status === 201){
            console.log('property unliked')
        }else{
            console.log('error : Couldnt unlike property!')
        }
    }

    return(
        <>
        <SideNav/>
        <div className="min-h-screen bg-gradient-to-r from-gray-200 to-slate-300 pb-4 sm:ml-64 border-gray-800 rounded-lg">


<nav class="min-w-screen bg-gradient-to-r from-cyan-600 to-slate-600 dark:bg-gray-900 py-2 border border-slate-900 dark:border-gray-600">
  <h1 className="text-center font-semibold text-2xl text-gray-100 font-sans ">Saved</h1>
</nav>

        <div className="px-4">
                {data.length > 0  ? (
                    <div className="mt-12">
                    
                    {data.map((property, index) => (
                        <Card
                        className="max-w-sm md:grid-cols-2 lg:grid-cols-3 lg:gap-2"
                        imgAlt="Property-image"
                        imgSrc={property.property_pic}
                      >
                        <Link to={`/properties/view-more/${property.property_id}`} ><h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {property.property_name}<span className="text-xl ml-4 font-medium">- {formatPropertyType(property.property_type)}</span>
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                          {property.created_at}
                          </p></Link>
                          <span onClick={() => handleDelete(property.property_id)}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg></span>
                      </Card>
                        
                        ))}
                    
                </div>
                ) : (
                    <section class="bg-gradient-to-r from-gray-200 to-slate-300 dark:bg-gray-900 mt-28">
                        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                            <div class="mx-auto max-w-screen-sm text-center">
                                <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-slate-700 dark:text-primary-500">Oops!</h1>
                                <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
                                <p class="mb-4 text-lg font-light text-gray-900 dark:text-gray-400">Sorry, you haven't saved any property yet. </p>
                                <Link to='/home' class="inline-flex text-white bg-rose-600 hover:bg-rose-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-rose-500 my-4">Back to Homepage</Link>
                            </div>   
                        </div>
                    </section>
                )}
            </div>
        </div>
        </>
    )
}
export default Like;