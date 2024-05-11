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
    const [loading,setLoading] = useState(false)

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
        setLoading(true)
        const Response = await client.get(`users/tenants/saved/${userId}/`)
        setLoading(false)
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

        {loading? (<div role="staus" className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
            {/**LOADING */}
                <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                </svg>
            </div>
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div class="flex items-center mt-4">
            <svg class="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                </svg>
                <div>
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                    <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
            </div>
            <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                </svg>
            </div>
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div class="flex items-center mt-4">
            <svg class="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                </svg>
                <div>
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                    <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
            </div>
            <span class="sr-only">Loading...</span>
        </div>):(

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
        )}
        </div>
        </>
    )
}
export default Like;