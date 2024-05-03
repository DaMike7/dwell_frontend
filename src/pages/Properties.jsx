import { Link } from "react-router-dom";
import SideNav from "../components/SideNav";
import Home from "./Home";
import { useEffect, useState } from "react";
import { authService } from "../services/authService";
import client from "../api";
import { GiHomeGarage } from "react-icons/gi";

const Properties = ({Response}) =>{
    const [data,setdata] = useState([])
    const [owner,setOwner] = useState('')

    const formatPropertyType = (type) => {
        const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);
        return capitalizedType.replace(/_/g, ' ');
      };
    
    useEffect(() => {
        const owner = authService.getUserId();
        setOwner(owner);

        getData();
    },[owner])

    const getData = async () =>{
        Response = await client.get(`users/property-owners/owner/properties/${owner}/`)
        setdata(Response.data)
    }

    return(
        <>
        <SideNav/>
        <div className=" pb-4 sm:ml-64 flex flex-col min-h-screen bg-gradient-to-r from-gray-200 to-slate-300 ">
            <nav className="bg-gradient-to-r from-slate-600 to-cyan-600 py-2 border border-slate-900 dark:border-gray-600 mx-screen">
                <h1 className="text-center font-semibold text-2xl text-gray-100 font-sans">Properties</h1>
            </nav>
            <div className="px-4 mt-5 flex justify-end">
            <Link to="/new-property" className="p-3 font-medium text-gray-300 rounded-lg bg-gradient-to-r from-cyan-600 to-slate-600 flex"><GiHomeGarage className="text-2xl"/> <span className="ml-1">New Property</span></Link>
            
            </div >
            {data.length > 0 ? (<div className="mt-12">
                {data.map((property,index) =>(
                    <div className="px-4">
                    <ul>
                    <li >
                        <Link to={`/properties/view-more/${property.id}`}>
            
                        <h1 className="flex rounded-xl border border-pink-500 bg-stone-300 my-2 pl-4 pt-4" >
                        <img className="w-12 h-12 rounded-md mx-4" src={property.property_pic} alt="property-picture" />
                        <div className="flex flex-col max-w-[320px] ml-4">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="font-medium text-lg mr-4  text-gray-900 dark:text-white">{property.property_name}</span>
                                <span className="text-sm font-bold text-gray-700 dark:text-gray-400">Available : {property.available}</span>
                                
                            </div>
                            <p className="text-sm font-semibold py-1 text-gray-900 dark:text-white">{formatPropertyType(property.property_type)}</p>
                            <p className="text-sm font-semibold pb-1 text-gray-900 dark:text-white">Set Price : N{property.set_price}<span className="ml-12">Continual Price : N{property.continual_price}</span></p>
                        </div>
                        </h1>
                        </Link>
                    </li>
                    </ul>
                </div>
                ))}
            </div>
            ):(
                <section class="bg-gradient-to-r from-gray-300 to-slate-400 px-4 dark:bg-gray-900 mt-28">
                        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                            <div class="mx-auto max-w-screen-sm text-center">
                                <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-slate-700 dark:text-primary-500">Oops!</h1>
                                <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
                                <p class="mb-4 text-lg font-light text-gray-900 dark:text-gray-400">Seems like you haven't created any property yet. </p>

                                <button><Link to='/new-property' class="inline-flex text-white bg-emerald-600 hover:bg-emerald-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:focus:ring-rose-500 my-4 mr-4">Create A Property</Link></button>

                                <Link to='/home' class="inline-flex text-white bg-rose-600 hover:bg-rose-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:focus:ring-rose-500 my-4">Back to Homepage</Link>
                            </div>   
                        </div>
                    </section>)}
           
        </div>
        </>
    )
}
export default Properties;