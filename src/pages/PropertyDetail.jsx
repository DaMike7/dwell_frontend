import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { authService } from "../services/authService";
import SideNav from "../components/SideNav";
import client from "../api";

const PropertyDetail = () =>{
    const { propertyId } = useParams();
    const [data,setData] = useState('')
    const navigate = useNavigate()

    const formatPropertyType = (type) => {
      const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);
      return capitalizedType.replace(/_/g, ' ');
    };

    const messageOwner = (owner) =>{
      navigate(`/chat/user/${owner}`)
    }

    const toggleSaveProperty = async (propId) => {
      const isSaved = data.find(property => property.id === propId).isSaved;
      
      if (isSaved) {
        await unSaveProperty(propId);
      } else {
        await saveProperty(propId);
      }
  
      // Fetch data again to update the saved property status
      fetchData();
    };
  
    const saveProperty = async (propId) => {
      const response = await client.post(
        `users/tenants/like-property/${propId}/${Id}/`
      );
    };

    const unSaveProperty = async (propId) => {
      const response = await client.delete(
        `users/tenants/unlike-property/${propId}/${Id}/`
      );
  
    };

    useEffect(() => {
        const fetchPropData = async (id) => {
          try {
            const response = await client.get(`users/property-owners/properties/details/${id}`);
            setData(response.data); 
          } catch (error) {
            console.error('Could not fetch property details', error);
          }
        };
    
        fetchPropData(propertyId);
      }, [propertyId]);

    return(
        <>
        <SideNav/>
        <div className="px-4 py-4 sm:ml-64 border-gray-800 rounded-lg">
        <section className="bg-white dark:bg-gray-900">
              <div className="gap-16 items-center pt-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:pt-16 lg:px-6">
              <img className="mt-2 w-full lg:mt-2 rounded-lg" src={data.external_image_1} alt="property-image2" />
                <div className="font-light text-gray-400 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-2 mt-2 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{data.property_name}</h2>
                    <p className="mb-4 text-xl text-gray-700 tracking-tight font-semibold">{data.location}.</p>
                    <p className=" text-xl mb-2 text-gray-700 tracking-tight font-semibold">{data.lga}  Local Government,{data.state} State.</p>
                    <p className=" text-xl mb-2 text-gray-700 tracking-tight font-semibold">Property Type : {data.property_type}</p>

                    

                    <div className="mt-4 grid grid-cols-2 gap-4">
                    
                        <button onClick={ () => messageOwner(data.owner)} className="text-gray-100 bg-rose-600 mt-5 border-gray-800 flex items-center p-2 text-base font-normal rounded-lg transition duration-75 hover:bg-rose-400 hover:text-gray-800  dark:hover:bg-gray-700 dark:text-white group">
                        <svg className="w-6 h-6 hover:text-gray-800 text-gray-100 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M3.6 4.5c.3-.3.8-.5 1.3-.5H19a1.9 1.9 0 0 1 2 1.9V15a1.9 1.9 0 0 1-1.9 1.9h-3.6l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.9A1.9 1.9 0 0 1 3 15.1V6c0-.5.2-1 .6-1.4Zm4 3a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.6Z" clipRule="evenodd"/>
                        </svg>
  
                            <span className="inline-block rounded bg-success px-3 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-success-3 transition duration-150 ease-in-out hover:bg-success-accent-300 hover:shadow-success-2 focus:bg-success-accent-300 focus:shadow-success-2 focus:outline-none focus:ring-0 active:bg-success-600 active:shadow-success-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">Message {data.owner_Fname}</span>
                        </button>

                        {/*like*/}
                        <button onClick={toggleSaveProperty()} className="mt-2 flex items-center active:text-red-600 p-2 text-base font-normal rounded-lg transition duration-75  group">
                      <svg className="w-[43px] h-[43px] text-slate-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="m12.7 20.7 6.2-7.1c2.7-3 2.6-6.5.8-8.7A5 5 0 0 0 16 3c-1.3 0-2.7.4-4 1.4A6.3 6.3 0 0 0 8 3a5 5 0 0 0-3.7 1.9c-1.8 2.2-2 5.8.8 8.7l6.2 7a1 1 0 0 0 1.4 0Z" />
                      </svg>
                      <span className="font-bold text-lg text-slate-700 hover:text-gray-500">Save</span>
                    </button>
                    </div>
                    
                </div>
                <hr className="mt-4"/>
                <hr/>
                
              </div>

              <div className="gap-8 items-center py-4 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-1 lg:px-6">
                <img className="mt-2 w-full lg:mt-2 rounded-lg" src={data.other_images} alt="property-image2" />
                </div>

              {/**START */}
              <div className="gap-8 items-center py-4 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-1 lg:px-6">
              
                <div className="font-light text-gray-400 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4  text-3xl font-medium text-gray-900 dark:text-white">More Details</h2>
                    <p className="mb-1 text-xl  text-gray-700 font-medium">Available : <span className="tracking-tight ml-4 font-bold">{data.available}</span></p>
                    <p className=" text-xl mb-1 text-gray-700 font-medium">Address : <span className="tracking-tight ml-4 font-bold">{data.location}</span> </p>
                    <p className=" text-xl mb-1 text-gray-700 font-medium">Property Type : <span className="tracking-tight ml-4 font-bold">{data.property_type}</span></p>
                    <p className=" text-xl mb-1 text-gray-700 font-medium">Set Price : <span className="tracking-tight ml-4 font-bold">N{data.set_price}</span></p>
                    <p className=" text-xl mb-1 text-gray-700 font-medium">Continual Price : <span className="tracking-tight ml-4 font-bold">N{data.continual_price}</span></p>
                    <p className=" text-xl mb-1 text-gray-700 font-medium">Property Owner : <span className="tracking-tight ml-4 font-bold">{data.owner_Fname}</span></p>
                    {/** */}
                    <div className="mt-4 grid grid-cols-2 gap-4">
                    
                        <button onClick={ () => messageOwner(data.owner)} className="text-gray-100 bg-rose-600 mt-2 border-gray-800 flex items-center p-2 text-base font-normal rounded-lg transition duration-75 hover:bg-rose-400 hover:text-gray-800  dark:hover:bg-gray-700 dark:text-white group">
                        <svg className="w-6 h-6 hover:text-gray-800 text-gray-100 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M3.6 4.5c.3-.3.8-.5 1.3-.5H19a1.9 1.9 0 0 1 2 1.9V15a1.9 1.9 0 0 1-1.9 1.9h-3.6l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.9A1.9 1.9 0 0 1 3 15.1V6c0-.5.2-1 .6-1.4Zm4 3a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.6Z" clipRule="evenodd"/>
                        </svg>
  
                            <span className="inline-block rounded bg-success px-3 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-success-3 transition duration-150 ease-in-out hover:bg-success-accent-300 hover:shadow-success-2 focus:bg-success-accent-300 focus:shadow-success-2 focus:outline-none focus:ring-0 active:bg-success-600 active:shadow-success-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">Message {data.owner_Fname}</span>
                        </button>
                    </div>
                </div>
                <img className="mt-2 w-full lg:mt-2 rounded-lg" src={data.external_image_1} alt="property-image2" />
                </div>
                <div className="gap-8 items-center py-4 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-1 lg:px-6">
                <img className="mt-2 w-full lg:mt-2 rounded-lg" src={data.external_image_2} alt="property-image2" />
                <img className="mt-2 w-full lg:mt-2 rounded-lg" src={data.internal_image_2} alt="property-image2" />
                </div>
              {/*STOP*/}
            </section>
        </div>
        </>
    )
}
export default PropertyDetail;