import { useEffect, useState } from "react";
import { useNavigate , Link} from "react-router-dom";
import { authService } from "../services/authService";
import client from "../api";
import SideNav from "../components/SideNav";

import { Toast,Spinner } from "flowbite-react";
import { MdOutlineWavingHand } from "react-icons/md";


const Home = () => {
  const [Id,setUserId] = useState('')
  const [role,setRole] = useState('')
  const [email,setEmail] = useState('')
  const navigate = useNavigate();
  const [fname,setFname] = useState('')
  const [lname,setLname] = useState('')
  const [selectedState, setSelectedState] = useState('');
  const [propertytype, setSelectedType] = useState('')
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null)

  const formatPropertyType = (type) => {
  const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);
  return capitalizedType.replace(/_/g, ' ');
};
  //
  const [data, setData] = useState([]);

  const handleFilter = async () => {
    if (selectedState && propertytype) { 
      setLoading(true);
      try {
        const response = await client.get(
          `users/property-owners/properties/filter/${propertytype}/${selectedState}/`
        );

        setData(response.data);
        setError(null); 
      } catch (error) {
        console.error("Error fetching filtered properties:", error);
        setError("No Match Found.");
      } finally {
        setLoading(false);
      }
    }
  };

  {/**PROPERTY TYPE */}
  const all_types = [
    {'name':"Single Room","isoCode":"single_room"},
    {'name':"A Room Selfcon","isoCode":"a_room_self_con"},
    {'name':"Two Room Selfcon","isoCode":"two_rooms_self_con"},
    {'name':"Three Bedroom Flat","isoCode":"three_bedroom_flat"},
    {'name':"Four Bedroom Flat","isoCode":"four_bedroom_flat"}
  ]
  const handleTypeChange = (value) => {
    setSelectedType(value);
};
{/**PROPERTY TYPE */}

{/**STATE */}
const all_states =[
  {"name": "Abuja", "isoCode": "ABJ"},
  {"name": "Abia", "isoCode": "AA"},
  {"name": "Adamawa", "isoCode": "AD"},
  {"name": "Anambra", "isoCode": "AB"},
  {"name": "Akwa Ibom", "isoCode": "AI"},
  {"name": "Bauchi", "isoCode": "BI"},
  {"name": "Bayelsa", "isoCode": "BA"},
  {"name": "Benue", "isoCode": "BN"},
  {"name": "Borno","isoCode": "BO"},
  {"name": "Cross River", "isoCode": "CR"},
  {"name": "Delta", "isoCode": "DT"},
  {"name": "Ebonyi", "isoCode": "EB"},
  {"name": "Edo", "isoCode": "ED"},
  {"name": "Ekiti", "isoCode": "EK"},
  {"name": "Enugu", "isoCode": "EG"},
  {"name": "Gombe", "isoCode": "GB"},
  {"name": "Imo", "isoCode": "IM"},
  {"name": "Jigawa", "isoCode": "JG"},
  {"name": "Kaduna", "isoCode": "KD"},
  {"name": "Kano", "isoCode": "KN"},
  {"name": "Katsina", "isoCode": "KS"},
  {"name": "kebbi", "isoCode": "KB"},
  {"name": "Kogi", "isoCode": "KG"},
  {"name": "Kwara", "isoCode": "KW"},
  {"name": "Lagos", "isoCode": "LA"},
  {"name": "Nassarawa", "isoCode": "NW"},
  {"name": "Niger", "isoCode": "NG"},
  {"name": "Ogun", "isoCode": "OG"},
  {"name": "Ondo", "isoCode": "ON"},
  {"name": "Osun", "isoCode": "OS"},
  {"name": "Oyo", "isoCode": "OY"},
  {"name": "Plateau", "isoCode": "PT"},
  {"name": "Rivers", "isoCode": "RS"},
  {"name": "Sokoto", "isoCode": "ST"},
  {"name": "Taraba", "isoCode": "TB"},
]

const handleStateChange = (value) => {
  setSelectedState(value);
};
{/** */}

  useEffect(() => {
    const role = authService.getUserRole()
      setRole(role)
    const Id = authService.getUserId()
      setUserId(Id)

    const fname = authService.getUserFirstName()
    setFname(fname)

    const lname = authService.getUserLastName();
    setLname(lname)

    const email = authService.getUserEmail()
      setEmail(email)

    fetchData();
    
  },[]);

  const fetchData = async () => {
    const response = await client.get(
      'users/property-owners/properties/'
    );
    setData(response.data);
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

  const messageOwner = (owner) =>{
    navigate(`/chat/user/${owner}`)
  }

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

  return (
    <>
      <SideNav/>
      <div className="p-3 sm:ml-64 flex flex-col min-h-screen bg-gradient-to-r from-gray-200 to-slate-300">
      {loading ? (
        <div className="m-4">
          <div role="status" class="mb-4 space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
              <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                  <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                  </svg>
              </div>
              <div class="w-full">
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
              </div>
              <span class="sr-only">Loading...</span>
          </div>
          <div role="status" class="mb-4 space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
              <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                  <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                  </svg>
              </div>
              <div class="w-full">
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
              </div>
              <span class="sr-only">Loading...</span>
          </div>
          <div role="status" class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
              <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                  <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                  </svg>
              </div>
              <div class="w-full">
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
              </div>
              <span class="sr-only">Loading...</span>
          </div>
          {/**LOADING */}
          </div>
      ) : error ? (
        <section class="bg-gradient-to-r from-gray-300 to-slate-400 mt-28">
                        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                            <div class="mx-auto max-w-screen-sm text-center">
                                <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-slate-700 dark:text-primary-500">Oops!</h1>
                                <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">{error}</p>
                                <p class="mb-4 text-lg font-light text-gray-900 dark:text-gray-400">Pull down to refresh page. </p>


                                <Link to='/home' class="inline-flex text-white bg-rose-600 hover:bg-rose-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:focus:ring-rose-500 my-4">Home</Link>
                            </div>   
                        </div>
                    </section>
      ) : (<div>
        
        { data.length > 0 ?(
        <div>
        {data.map((property, index) => (
          <div key={index} className="border-gray-800 rounded-lg ">
            {/**TOAST */}
        <Toast className=" ml-8 bg-red-200">
        <div className=" inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
          <MdOutlineWavingHand className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-medium">Hi {fname} {lname}.</div>
        <Toast.Toggle className="bg-red-100" />
        </Toast>
        {/**TOAST */}
  
            <section className="bg-gradient-to-r from-gray-100 to-cyan-50 dark:bg-gray-50">
              {/** FILTER */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-4 sm:px-0">
              <p className="pt-3 flex-shrink-0">Filter by</p>
              <select onChange={(e) => handleTypeChange(e.target.value)} className="flex-grow rounded-lg border-gray-800">
                <option value="">property type</option>
                  {all_types.map(pt => (
                  <option value={[pt.isoCode]}>{pt.name}</option>
                ))}
              </select>

              <select onChange={(e) => handleStateChange(e.target.value)} className="flex-grow rounded-lg border-gray-800">
               <option value="">state</option>
                  {all_states.map(sta => (
                  <option value={[sta.name]}>{sta.name}</option>
                ))}
              </select>

              <button onClick={()=>handleFilter()} className="flex-shrink-0 p-3 text-center text-gray-900 font-normal rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-600 hover:bg-red-700">Apply</button>
          </div>
          {/**FILTER END */}
              <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <img className="mt-2 w-full lg:mt-2 rounded-lg" src={property.external_image_1} alt="property-image2" />
                <div className="font-light text-gray-700 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-2 mt-2 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{property.property_name}</h2>
                    <p className="mb-4 text-xl text-gray-800 font-semibold">{property.location}.</p>
                    <p className=" text-xl mb-2 text-gray-800 font-semibold">{property.lga}  Local Government,{property.state} State.</p>
                    <p className=" text-xl mb-2 text-gray-800 font-semibold">Property Type : {formatPropertyType(property.property_type)}</p>

                    <div className="mt-4 grid grid-cols-2 gap-4">
                    <p className=" text-xl text-gray-800 font-semibold">Price : N{property.set_price} </p> 
                    <p className="text-xl text-gray-800 font-semibold">Available : {property.available}</p>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-4">
                    <Link to={`/properties/view-more/${property.id}`} class="text-gray-100 bg-gray-800 mt-5 border-gray-800 flex items-center p-2 text-base font-normal rounded-lg transition duration-75 hover:bg-gray-700 hover:text-gray-800  dark:hover:bg-gray-700 dark:text-white group">
                        <svg className="w-[30px] h-[30px] text-gray-100 dark:text-white hover:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"/>
                        </svg>
                            <span className="inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-success-3 transition duration-150 ease-in-out hover:bg-success-accent-300 hover:shadow-success-2 focus:bg-success-accent-300 focus:shadow-success-2 focus:outline-none focus:ring-0 active:bg-success-600 active:shadow-success-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">View More</span>
                        </Link>
                        <button onClick={() => messageOwner(property.owner)} className="text-gray-100 bg-rose-600 mt-5 border-gray-800 flex items-center p-2 text-base font-normal rounded-lg transition duration-75 hover:bg-rose-400 hover:text-gray-800  dark:hover:bg-gray-700 dark:text-white group">
                        <svg className="w-6 h-6 hover:text-gray-800 text-gray-100 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M3.6 4.5c.3-.3.8-.5 1.3-.5H19a1.9 1.9 0 0 1 2 1.9V15a1.9 1.9 0 0 1-1.9 1.9h-3.6l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.9A1.9 1.9 0 0 1 3 15.1V6c0-.5.2-1 .6-1.4Zm4 3a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.6Z" clipRule="evenodd"/>
                        </svg>
  
                            <span className="inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-success-3 transition duration-150 ease-in-out hover:bg-success-accent-300 hover:shadow-success-2 focus:bg-success-accent-300 focus:shadow-success-2 focus:outline-none focus:ring-0 active:bg-success-600 active:shadow-success-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">Message</span>
                        </button>

                        {/*like*/}
                        <button onClick={() => toggleSaveProperty(property.id)} className="mt-2 flex items-center active:text-red-600 p-2 text-base font-normal rounded-lg transition duration-75  group">
                      <svg className="w-[43px] h-[43px] text-slate-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="m12.7 20.7 6.2-7.1c2.7-3 2.6-6.5.8-8.7A5 5 0 0 0 16 3c-1.3 0-2.7.4-4 1.4A6.3 6.3 0 0 0 8 3a5 5 0 0 0-3.7 1.9c-1.8 2.2-2 5.8.8 8.7l6.2 7a1 1 0 0 0 1.4 0Z" />
                      </svg>
                      <span className="font-bold text-lg text-slate-700 hover:text-gray-500">{property.isSaved ? 'Unsave' : 'Save'}</span>
                    </button>
                    </div>
                    
                </div>
                <hr className="mt-4"/>
                <hr/>
                
              </div>
            </section>
      </div>
      ))}</div>
        ):(
          <section class="bg-gradient-to-r from-gray-300 to-slate-400 mt-28">
                        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                            <div class="mx-auto max-w-screen-sm text-center">
                                <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-slate-700 dark:text-primary-500">Oops!</h1>
                                <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Error fetching data.</p>
                                <p class="mb-4 text-lg font-light text-gray-900 dark:text-gray-400">Refresh page. </p>

                                { role === 'property_owner' ? (<button><Link to='/new-property' class="inline-flex text-white bg-emerald-600 hover:bg-emerald-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:focus:ring-rose-500 my-4 mr-4">Create A Property</Link></button>):(<h1></h1>)}

                                <Link to='/home' class="inline-flex text-white bg-rose-600 hover:bg-rose-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:focus:ring-rose-500 my-4">Refresh</Link>
                            </div>   
                        </div>
                    </section>
        )}
      </div>)}
      </div>
    </>
    
  );
};

export default Home;