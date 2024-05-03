import SideNav from "../components/SideNav";
import { IoCloudUploadSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import client from "../api";
import { authService } from "../services/authService";
import { useNavigate } from "react-router-dom";

export default function AddProperty (){
   const [cities, setCities] = useState([])
   const [selectedState, setSelectedState] = useState('');
   const [selectedLGA, setSelectedLGA] = useState('');
   const [propertytype, setSelectedType] = useState('')
   const [ao, setAvailable] = useState('')
   const [property_name,setPropName] = useState('')
   const [Address,setAddress] = useState('')
   const [price,setPrice] = useState('')
   const [Cprice,setCprice] = useState('')
   const [in1,setIn1] = useState('')
   const [in2,setIn2] = useState('')
   const [out1,setOut1] = useState('')
   const [out2,setOut2] = useState('')
   const [other,setOther] = useState('')
   const [user,setUser] = useState('')

   const [error, setError] = useState(null);
   const [success, Message] = useState(null);
   const navigate = useNavigate()

   useEffect(()=>{
      const user = authService.getUserId();
      setUser(user)
   })
   
   const propData = {
      owner:user,
      property_name : property_name,
      property_type : propertytype,
      state:selectedState,
      lga:selectedLGA,
      location:Address,
      internal_image_1:in1,
      internal_image_2:in2,
      external_image_1:out1,
      external_image_2:out2,
      other_images:other,
      set_price:price,
      continual_price : Cprice,
      available:ao
   }

   const handlePropertyAdd = async () => {
      try{
         const response = await client.post(`users/property-owners/properties/add/`,propData,{ withCredentials: true,
            headers: {
            'Content-Type': 'multipart/form-data',
        }, })
         if(response.status === 201){
            console.log('Success!')
            Message('Success!')
            setError(null)
            navigate('/properties')
         }
      }catch(error){
         console.error({'error':error})
         setError('Erorr, check data and try again !')
         Message(null)
      }
   }

   const Available = [
      {'name':"Yes","isoCode":"yes"},
      {'name':"No","isoCode":"no"},

   ]
   const handleAvailableChange = (value) => {
      setAvailable(value);
  };

    {/**PROPERTY TYPE */}
    const all_types = [
        {'name':"Single Room","isoCode":"single_name"},
        {'name':"A Room Selfcon","isoCode":"a_room_self_con"},
        {'name':"Two Room Selfcon","isoCode":"two_rooms_self_con"},
        {'name':"Three Bedroom Flat","isoCode":"three_bedroom_flat"},
        {'name':"Four Bedroom Flat","isoCode":"four_bedroom_flat"}
    ]
    const handlePropertyTypeChange = (value) => {
        setSelectedType(value);
    };

    const handleStateChange = (value,setstate) => {
      setSelectedState(setstate);
      let getStateCities = all_cities.filter(city => city.stateCode === value);
      setCities(getStateCities);
  };

  const handleLGChange = (value) => {
      setSelectedLGA(value);
  };

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

const all_cities = [
  {"name":"Aba North","stateCode": "AA"},
  {"name":"Aba South","stateCode": "AA"},
  {"name":"Arochukwu","stateCode": "AA"},
  {"name":"Bende","stateCode": "AA"},
  {"name":"Ikwuano","stateCode": "AA"},
  {"name":"Isiala-Ngwa North","stateCode": "AA"},
  {"name":"Isiala-Ngwa South","stateCode": "AA"},
  {"name":"Isuikwato","stateCode": "AA"},
  {"name":"Obi Nwa","stateCode": "AA"},
  {"name":"Ohafia","stateCode": "AA"},
  {"name":"Osisioma","stateCode": "AA"},
  {"name":"Ngwa","stateCode": "AA"},
  {"name":"Ugwunagbo","stateCode": "AA"},
  {"name":"Ukwa East","stateCode": "AA"},
  {"name":"Ukwa West","stateCode": "AA"},
  {"name":"Umuahia North","stateCode": "AA"},
  {"name":"Umuahia South","stateCode": "AA"},
  {"name":"Umu-Neochi","stateCode": "AA"},
  {"name":"Demsa","stateCode": "AD"},
  {"name":"Fufore","stateCode": "AD"},
  {"name":"Ganaye","stateCode": "AD"},
  {"name":"Gireri","stateCode": "AD"},
  {"name":"Gombi","stateCode": "AD"},
  {"name":"Guyuk","stateCode": "AD"},
  {"name":"Hong","stateCode": "AD"},
  {"name":"Jada","stateCode": "AD"},
  {"name":"Lamurde","stateCode": "AD"},
  {"name":"Madagali","stateCode": "AD"},
  {"name":"Maiha","stateCode": "AD"},
  {"name":"Mayo-Belwa","stateCode": "AD"},
  {"name":"Michika","stateCode": "AD"},
  {"name":"Mubi North","stateCode": "AD"},
  {"name":"Mubi South","stateCode": "AD"},
  {"name":"Numan","stateCode": "AD"},
  {"name":"Shelleng","stateCode": "AD"},
  {"name":"Song","stateCode": "AD"},
  {"name":"Toungo","stateCode": "AD"},
  {"name":"Yola North","stateCode": "AD"},
  {"name":"Yola South","stateCode": "AD"},
  {"name":"Aguata","stateCode": "AB"},
  {"name":"Anambra East","stateCode": "AB"},
  {"name":"Anambra West","stateCode": "AB"},
  {"name":"Anaocha","stateCode": "AB"},
  {"name":"Awka North","stateCode": "AB"},
  {"name":"Awka South","stateCode": "AB"},
  {"name":"Ayamelum","stateCode": "AB"},
  {"name":"Dunukofia","stateCode": "AB"},
  {"name":"Ekwusigo","stateCode": "AB"},
  {"name":"Idemili North","stateCode": "AB"},
  {"name":"Idemili south","stateCode": "AB"},
  {"name":"Ihiala","stateCode": "AB"},
  {"name":"Njikoka","stateCode": "AB"},
  {"name":"Nnewi North","stateCode": "AB"},
  {"name":"Nnewi South","stateCode": "AB"},
  {"name":"Ogbaru","stateCode": "AB"},
  {"name":"Onitsha North","stateCode": "AB"},
  {"name":"Onitsha South","stateCode": "AB"},
  {"name":"Orumba North","stateCode": "AB"},
  {"name":"Orumba South","stateCode": "AB"},
  {"name":"Oyi","stateCode": "AB"},
  {"name":"Abak","stateCode": "AI"},
  {"name":"Eastern Obolo","stateCode": "AI"},
  {"name":"Eket","stateCode": "AI"},
  {"name":"Esit Eket","stateCode": "AI"},
  {"name":"Essien Udim","stateCode": "AI"},
  {"name":"Etim Ekpo","stateCode": "AI"},
  {"name":"Etinan","stateCode": "AI"},
  {"name":"Ibeno","stateCode": "AI"},
  {"name":"Ibesikpo Asutan","stateCode": "AI"},
  {"name":"Ibiono Ibom","stateCode": "AI"},
  {"name":"Ika","stateCode": "AI"},
  {"name":"Ikono","stateCode": "AI"},
  {"name":"Ikot Abasi","stateCode": "AI"},
  {"name":"Ikot Ekpene","stateCode": "AI"},
  {"name":"Ini","stateCode": "AI"},
  {"name":"Itu","stateCode": "AI"},
  {"name":"Mbo","stateCode": "AI"},
  {"name":"Mkpat Enin","stateCode": "AI"},
  {"name":"Nsit Atai","stateCode": "AI"},
  {"name":"Nsit Ibom","stateCode": "AI"},
  {"name":"Nsit Ubium","stateCode": "AI"},
  {"name":"Obot Akara","stateCode": "AI"},
  {"name":"Okobo","stateCode": "AI"},
  {"name":"Onna","stateCode": "AI"},
  {"name":"Oron","stateCode": "AI"},
  {"name":"Oruk Anam","stateCode": "AI"},
  {"name":"Udung Uko","stateCode": "AI"},
  {"name":"Ukanafun","stateCode": "AI"},
  {"name":"Uruan","stateCode": "AI"},
  {"name":"Urue-Offong/Oruko ","stateCode": "AI"},
  {"name":"Uyo","stateCode": "AI"},
  {"name":"Alkaleri","stateCode": "BI"},
  {"name":"Bauchi","stateCode": "BI"},
  {"name":"Bogoro","stateCode": "BI"},
  {"name":"Damban","stateCode": "BI"},
  {"name":"Darazo","stateCode": "BI"},
  {"name":"Dass","stateCode": "BI"},
  {"name":"Ganjuwa","stateCode": "BI"},
  {"name":"Giade","stateCode": "BI"},
  {"name":"Itas/Gadau","stateCode": "BI"},
  {"name":"Jama'are","stateCode": "BI"},
  {"name":"Katagum","stateCode": "BI"},
  {"name":"Kirfi","stateCode": "BI"},
  {"name":"Misau","stateCode": "BI"},
  {"name":"Ningi","stateCode": "BI"},
  {"name":"Shira","stateCode": "BI"},
  {"name":"Tafawa-Balewa","stateCode": "BI"},
  {"name":"Toro","stateCode": "BI"},
  {"name":"Warji","stateCode": "BI"},
  {"name":"Zaki","stateCode": "BI"},
  {"name":"Brass","stateCode": "BA"},
  {"name":"Ekeremor","stateCode": "BA"},
  {"name":"Kolokuma/Opokuma","stateCode": "BA"},
  {"name":"Nembe","stateCode": "BA"},
  {"name":"Ogbia","stateCode": "BA"},
  {"name":"Sagbama","stateCode": "BA"},
  {"name":"Southern Jaw","stateCode": "BA"},
  {"name":"Yenegoa","stateCode": "BA"},
  {"name":"Ado","stateCode": "BN"},
  {"name":"Agatu","stateCode": "BN"},
  {"name":"Apa","stateCode": "BN"},
  {"name":"Buruku","stateCode": "BN"},
  {"name":"Gboko","stateCode": "BN"},
  {"name":"Guma","stateCode": "BN"},
  {"name":"Gwer East","stateCode": "BN"},
  {"name":"Gwer West","stateCode": "BN"},
  {"name":"Katsina-Ala","stateCode": "BN"},
  {"name":"Konshisha","stateCode": "BN"},
  {"name":"Kwande","stateCode": "BN"},
  {"name":"Logo","stateCode": "BN"},
  {"name":"Makurdi","stateCode": "BN"},
  {"name":"Obi","stateCode": "BN"},
  {"name":"Ogbadibo","stateCode": "BN"},
  {"name":"Oju","stateCode": "BN"},
  {"name":"Okpokwu","stateCode": "BN"},
  {"name":"Ohimini","stateCode": "BN"},
  {"name":"Oturkpo","stateCode": "BN"},
  {"name":"Tarka","stateCode": "BN"},
  {"name":"Ukum","stateCode": "BN"},
  {"name":"Ushongo","stateCode": "BN"},
  {"name":"Vandeikya","stateCode": "BN"},
  {"name":"Abadam","stateCode": "BO"},
  {"name":"Askira/Uba","stateCode": "BO"},
  {"name":"Bama","stateCode": "BO"},
  {"name":"Bayo","stateCode": "BO"},
  {"name":"Biu","stateCode": "BO"},
  {"name":"Chibok","stateCode": "BO"},
  {"name":"Damboa","stateCode": "BO"},
  {"name":"Dikwa","stateCode": "BO"},
  {"name":"Gubio","stateCode": "BO"},
  {"name":"Guzamala","stateCode": "BO"},
  {"name":"Gwoza","stateCode": "BO"},
  {"name":"Hawul","stateCode": "BO"},
  {"name":"Jere","stateCode": "BO"},
  {"name":"Kaga","stateCode": "BO"},
  {"name":"Kala/Balge","stateCode": "BO"},
  {"name":"Konduga","stateCode": "BO"},
  {"name":"Kukawa","stateCode": "BO"},
  {"name":"Kwaya Kusar","stateCode": "BO"},
  {"name":"Mafa","stateCode": "BO"},
  {"name":"Magumeri","stateCode": "BO"},
  {"name":"Maiduguri","stateCode": "BO"},
  {"name":"Marte","stateCode": "BO"},
  {"name":"Mobbar","stateCode": "BO"},
  {"name":"Monguno","stateCode": "BO"},
  {"name":"Ngala","stateCode": "BO"},
  {"name":"Nganzai","stateCode": "BO"},
  {"name":"Shani","stateCode": "BO"},
  {"name":"Akpabuyo","stateCode": "CR"},
  {"name":"Odukpani","stateCode": "CR"},
  {"name":"Akamkpa","stateCode": "CR"},
  {"name":"Biase","stateCode": "CR"},
  {"name":"Abi","stateCode": "CR"},
  {"name":"Ikom","stateCode": "CR"},
  {"name":"Yarkur","stateCode": "CR"},
  {"name":"Odubra","stateCode": "CR"},
  {"name":"Boki","stateCode": "CR"},
  {"name":"Ogoja","stateCode": "CR"},
  {"name":"Yala","stateCode": "CR"},
  {"name":"Obanliku","stateCode": "CR"},
  {"name":"Obudu","stateCode": "CR"},
  {"name":"Calabar South","stateCode": "CR"},
  {"name":"Etung","stateCode": "CR"},
  {"name":"Bekwara","stateCode": "CR"},
  {"name":"Bakassi","stateCode": "CR"},
  {"name":"Calabar Municipality","stateCode": "CR"},
  {"name":"Oshimili","stateCode": "DT"},
  {"name":"Aniocha","stateCode": "DT"},
  {"name":"Aniocha South","stateCode": "DT"},
  {"name":"Ika South","stateCode": "DT"},
  {"name":"Ika North-East","stateCode": "DT"},
  {"name":"Ndokwa West","stateCode": "DT"},
  {"name":"Ndokwa East","stateCode": "DT"},
  {"name":"Isoko south","stateCode": "DT"},
  {"name":"Isoko North","stateCode": "DT"},
  {"name":"Bomadi","stateCode": "DT"},
  {"name":"Burutu","stateCode": "DT"},
  {"name":"Ughelli South","stateCode": "DT"},
  {"name":"Ughelli North","stateCode": "DT"},
  {"name":"Ethiope West","stateCode": "DT"},
  {"name":"Ethiope East","stateCode": "DT"},
  {"name":"Sapele","stateCode": "DT"},
  {"name":"Okpe","stateCode": "DT"},
  {"name":"Warri North","stateCode": "DT"},
  {"name":"Warri South","stateCode": "DT"},
  {"name":"Uvwie","stateCode": "DT"},
  {"name":"Udu","stateCode": "DT"},
  {"name":"Warri Central","stateCode": "DT"},
  {"name":"Ukwani","stateCode": "DT"},
  {"name":"Oshimili North","stateCode": "DT"},
  {"name":"Patani","stateCode": "DT"},
  {"name":"Afikpo South","stateCode": "EB"},
  {"name":"Afikpo North","stateCode": "EB"},
  {"name":"Onicha","stateCode": "EB"},
  {"name":"Ohaozara","stateCode": "EB"},
  {"name":"Abakaliki","stateCode": "EB"},
  {"name":"Ishielu","stateCode": "EB"},
  {"name":"lkwo","stateCode": "EB"},
  {"name":"Ezza","stateCode": "EB"},
  {"name":"Ezza South","stateCode": "EB"},
  {"name":"Ohaukwu","stateCode": "EB"},
  {"name":"Ebonyi","stateCode": "EB"},
  {"name":"Ivo","stateCode": "EB"},
  {"name":"Enugu South","stateCode": "EG"},
  {"name":"Igbo-Eze South","stateCode": "EG"},
  {"name":"Enugu North","stateCode": "EG"},
  {"name":"Nkanu","stateCode": "EG"},
  {"name":"Udi Agwu","stateCode": "EG"},
  {"name":"Oji-River","stateCode": "EG"},
  {"name":"Ezeagu","stateCode": "EG"},
  {"name":"IgboEze North","stateCode": "EG"},
  {"name":"Isi-Uzo","stateCode": "EG"},
  {"name":"Nsukka","stateCode": "EG"},
  {"name":"Igbo-Ekiti","stateCode": "EG"},
  {"name":"Uzo-Uwani","stateCode": "EG"},
  {"name":"Enugu East","stateCode": "EG"},
  {"name":"Aninri","stateCode": "EG"},
  {"name":"Nkanu East","stateCode": "EG"},
  {"name":"Udenu","stateCode": "EG"},
  {"name":"Esan North-East","stateCode": "ED"},
  {"name":"Esan Central","stateCode": "ED"},
  {"name":"Esan West","stateCode": "ED"},
  {"name":"Egor","stateCode": "ED"},
  {"name":"Ukpoba","stateCode": "ED"},
  {"name":"Central","stateCode": "ED"},
  {"name":"Etsako Central","stateCode": "ED"},
  {"name":"Igueben","stateCode": "ED"},
  {"name":"Oredo","stateCode": "ED"},
  {"name":"Ovia SouthWest","stateCode": "ED"},
  {"name":"Ovia South-East","stateCode": "ED"},
  {"name":"Orhionwon","stateCode": "ED"},
  {"name":"Uhunmwonde","stateCode": "ED"},
  {"name":"Etsako East","stateCode": "ED"},
  {"name":"Esan South-East","stateCode": "ED"},
  {"name":"Ado","stateCode": "EK"},
  {"name":"Ekiti-East","stateCode": "EK"},
  {"name":"Ekiti-West","stateCode": "EK"},
  {"name":"Emure/Ise/Orun","stateCode": "EK"},
  {"name":"Ekiti South-West","stateCode": "EK"},
  {"name":"Ikere","stateCode": "EK"},
  {"name":"Irepodun","stateCode": "EK"},
  {"name":"Ijero","stateCode": "EK"},
  {"name":"Ido/Osi","stateCode": "EK"},
  {"name":"Oye","stateCode": "EK"},
  {"name":"Ikole","stateCode": "EK"},
  {"name":"Moba","stateCode": "EK"},
  {"name":"Gbonyin","stateCode": "EK"},
  {"name":"Efon","stateCode": "EK"},
  {"name":"Ise/Orun","stateCode": "EK"},
  {"name":"Ilejemeje","stateCode": "EK"},
  {"name":"Abaji","stateCode": "ABJ"},
  {"name":"AMAC","stateCode": "ABJ"},
  {"name":"Bwari","stateCode": "ABJ"},
  {"name":"Gwagwalada","stateCode": "ABJ"},
  {"name":"Kuje","stateCode": "ABJ"},
  {"name":"Kwali","stateCode": "ABJ"},
  {"name":"Akko","stateCode": "GB"},
  {"name":"Balanga","stateCode": "GB"},
  {"name":"Billiri","stateCode": "GB"},
  {"name":"Dukku","stateCode": "GB"},
  {"name":"Kaltungo","stateCode": "GB"},
  {"name":"Kwami","stateCode": "GB"},
  {"name":"Shomgom","stateCode": "GB"},
  {"name":"Funakaye","stateCode": "GB"},
  {"name":"Gombe","stateCode": "GB"},
  {"name":"Nafada/Bajoga","stateCode": "GB"},
  {"name":"Yamaltu/Delta","stateCode": "GB"},
  {"name":"Aboh-Mbaise","stateCode": "IM"},
  {"name":"Ahiazu-Mbaise","stateCode": "IM"},
  {"name":"Ehime-Mbano","stateCode": "IM"},
  {"name":"Ezinihitte","stateCode": "IM"},
  {"name":"Ideato North","stateCode": "IM"},
  {"name":"Ideato South","stateCode": "IM"},
  {"name":"Ihitte/Uboma","stateCode": "IM"},
  {"name":"Ikeduru","stateCode": "IM"},
  {"name":"Isiala Mbano","stateCode": "IM"},
  {"name":"Isu","stateCode": "IM"},
  {"name":"Mbaitoli","stateCode": "IM"},
  {"name":"Ngor-Okpala","stateCode": "IM"},
  {"name":"Njaba","stateCode": "IM"},
  {"name":"Nwangele","stateCode": "IM"},
  {"name":"Nkwerre","stateCode": "IM"},
  {"name":"Obowo","stateCode": "IM"},
  {"name":"Oguta","stateCode": "IM"},
  {"name":"Ohaji/Egbema","stateCode": "IM"},
  {"name":"Okigwe","stateCode": "IM"},
  {"name":"Orlu","stateCode": "IM"},
  {"name":"Orsu","stateCode": "IM"},
  {"name":"Oru East","stateCode": "IM"},
  {"name":"Oru West","stateCode": "IM"},
  {"name":"Owerri-Municipal","stateCode": "IM"},
  {"name":"Owerri North","stateCode": "IM"},
  {"name":"Auyo","stateCode": "JG"},
  {"name":"Babura","stateCode": "JG"},
  {"name":"Birni Kudu","stateCode": "JG"},
  {"name":"Biriniwa","stateCode": "JG"},
  {"name":"Buji","stateCode": "JG"},
  {"name":"Dutse","stateCode": "JG"},
  {"name":"Gagarawa","stateCode": "JG"},
  {"name":"Garki","stateCode": "JG"},
  {"name":"Gumel","stateCode": "JG"},
  {"name":"Guri","stateCode": "JG"},
  {"name":"Gwaram","stateCode": "JG"},
  {"name":"Gwiwa","stateCode": "JG"},
  {"name":"Hadejia","stateCode": "JG"},
  {"name":"Jahun","stateCode": "JG"},
  {"name":"Kafin Hausa","stateCode": "JG"},
  {"name":"Kaugama Kazaure","stateCode": "JG"},
  {"name":"Kiri Kasamma","stateCode": "JG"},
  {"name":"Kiyawa","stateCode": "JG"},
  {"name":"Maigatari","stateCode": "JG"},
  {"name":"Malam Madori","stateCode": "JG"},
  {"name":"Miga","stateCode": "JG"},
  {"name":"Ringim","stateCode": "JG"},
  {"name":"Roni","stateCode": "JG"},
  {"name":"Sule-Tankarkar","stateCode": "JG"},
  {"name":"Taura","stateCode": "JG"},
  {"name":"Yankwashi","stateCode": "JG"},
  {"name":"Birni-Gwari","stateCode": "KD"},
  {"name":"Chikun","stateCode": "KD"},
  {"name":"Giwa","stateCode": "KD"},
  {"name":"Igabi","stateCode": "KD"},
  {"name":"Ikara","stateCode": "KD"},
  {"name":"jaba","stateCode": "KD"},
  {"name":"Jema'a","stateCode": "KD"},
  {"name":"Kachia","stateCode": "KD"},
  {"name":"Kaduna North","stateCode": "KD"},
  {"name":"Kaduna South","stateCode": "KD"},
  {"name":"Kagarko","stateCode": "KD"},
  {"name":"Kajuru","stateCode": "KD"},
  {"name":"Kaura","stateCode": "KD"},
  {"name":"Kauru","stateCode": "KD"},
  {"name":"Kubau","stateCode": "KD"},
  {"name":"Kudan","stateCode": "KD"},
  {"name":"Lere","stateCode": "KD"},
  {"name":"Makarfi","stateCode": "KD"},
  {"name":"Sabon-Gari","stateCode": "KD"},
  {"name":"Sanga","stateCode": "KD"},
  {"name":"Soba","stateCode": "KD"},
  {"name":"Zango-Kataf","stateCode": "KD"},
  {"name":"Zaria","stateCode": "KD"},
  {"name":"Ajingi","stateCode": "KN"},
  {"name":"Albasu","stateCode": "KN"},
  {"name":"Bagwai","stateCode": "KN"},
  {"name":"Bebeji","stateCode": "KN"},
  {"name":"Bichi","stateCode": "KN"},
  {"name":"Bunkure","stateCode": "KN"},
  {"name":"Dala","stateCode": "KN"},
  {"name":"Dambatta","stateCode": "KN"},
  {"name":"Dawakin Kudu","stateCode": "KN"},
  {"name":"Dawakin Tofa","stateCode": "KN"},
  {"name":"Doguwa","stateCode": "KN"},
  {"name":"Fagge","stateCode": "KN"},
  {"name":"Gabasawa","stateCode": "KN"},
  {"name":"Garko","stateCode": "KN"},
  {"name":"Garum","stateCode": "KN"},
  {"name":"Mallam","stateCode": "KN"},
  {"name":"Gaya","stateCode": "KN"},
  {"name":"Gezawa","stateCode": "KN"},
  {"name":"Gwale","stateCode": "KN"},
  {"name":"Gwarzo","stateCode": "KN"},
  {"name":"Kabo","stateCode": "KN"},
  {"name":"Kano Municipal","stateCode": "KN"},
  {"name":"Karaye","stateCode": "KN"},
  {"name":"Kibiya","stateCode": "KN"},
  {"name":"Kiru","stateCode": "KN"},
  {"name":"kumbotso","stateCode": "KN"},
  {"name":"Kunchi","stateCode": "KN"},
  {"name":"Kura","stateCode": "KN"},
  {"name":"Madobi","stateCode": "KN"},
  {"name":"Makoda","stateCode": "KN"},
  {"name":"Minjibir","stateCode": "KN"},
  {"name":"Nasarawa","stateCode": "KN"},
  {"name":"Rano","stateCode": "KN"},
  {"name":"Rimin Gado","stateCode": "KN"},
  {"name":"Rogo","stateCode": "KN"},
  {"name":"Shanono","stateCode": "KN"},
  {"name":"Sumaila","stateCode": "KN"},
  {"name":"Takali","stateCode": "KN"},
  {"name":"Tarauni","stateCode": "KN"},
  {"name":"Tofa","stateCode": "KN"},
  {"name":"Tsanyawa","stateCode": "KN"},
  {"name":"Tudun Wada","stateCode": "KN"},
  {"name":"Ungogo","stateCode": "KN"},
  {"name":"Warawa","stateCode": "KN"},
  {"name":"Wudil","stateCode": "KN"},
  {"name":"Bakori","stateCode": "KS"},
  {"name":"Batagarawa","stateCode": "KS"},
  {"name":"Batsari","stateCode": "KS"},
  {"name":"Baure","stateCode": "KS"},
  {"name":"Bindawa","stateCode": "KS"},
  {"name":"Charanchi","stateCode": "KS"},
  {"name":"Dandume","stateCode": "KS"},
  {"name":"Danja","stateCode": "KS"},
  {"name":"Dan Musa","stateCode": "KS"},
  {"name":"Daura","stateCode": "KS"},
  {"name":"Dutsi","stateCode": "KS"},
  {"name":"Dutsin-Ma","stateCode": "KS"},
  {"name":"Faskari","stateCode": "KS"},
  {"name":"Funtua","stateCode": "KS"},
  {"name":"Ingawa","stateCode": "KS"},
  {"name":"Jibia","stateCode": "KS"},
  {"name":"Kafur","stateCode": "KS"},
  {"name":"Kaita","stateCode": "KS"},
  {"name":"Kankara","stateCode": "KS"},
  {"name":"Kankia","stateCode": "KS"},
  {"name":"Katsina","stateCode": "KS"},
  {"name":"Kurfi","stateCode": "KS"},
  {"name":"Kusada","stateCode": "KS"},
  {"name":"Mai'Adua","stateCode": "KS"},
  {"name":"Malumfashi","stateCode": "KS"},
  {"name":"Mani","stateCode": "KS"},
  {"name":"Mashi","stateCode": "KS"},
  {"name":"Matazuu","stateCode": "KS"},
  {"name":"Musawa","stateCode": "KS"},
  {"name":"Rimi","stateCode": "KS"},
  {"name":"Sabuwa","stateCode": "KS"},
  {"name":"Safana","stateCode": "KS"},
  {"name":"Sandamu","stateCode": "KS"},
  {"name":"Zango","stateCode": "KS"},
  {"name":"Aleiro","stateCode": "KB"},
  {"name":"Arewa-Dandi","stateCode": "KB"},
  {"name":"Argungu","stateCode": "KB"},
  {"name":"Augie","stateCode": "KB"},
  {"name":"Bagudo","stateCode": "KB"},
  {"name":"Birnin Kebbi","stateCode": "KB"},
  {"name":"Bunza","stateCode": "KB"},
  {"name":"Dandi","stateCode": "KB"},
  {"name":"Fakai","stateCode": "KB"},
  {"name":"Gwandu","stateCode": "KB"},
  {"name":"Jega","stateCode": "KB"},
  {"name":"Kalgo","stateCode": "KB"},
  {"name":"Koko/Besse","stateCode": "KB"},
  {"name":"Maiyama","stateCode": "KB"},
  {"name":"Ngaski","stateCode": "KB"},
  {"name":"Sakaba","stateCode": "KB"},
  {"name":"Shanga","stateCode": "KB"},
  {"name":"Suru","stateCode": "KB"},
  {"name":"Wasagu/Danko","stateCode": "KB"},
  {"name":"Yauri","stateCode": "KB"},
  {"name":"Zuru","stateCode": "KB"},
  {"name":"Adavi","stateCode": "KG"},
  {"name":"Ajaokuta","stateCode": "KB"},
  {"name":"Ankpa","stateCode": "KB"},
  {"name":"Bassa","stateCode": "KB"},
  {"name":"Dekina","stateCode": "KB"},
  {"name":"Ibaji","stateCode": "KB"},
  {"name":"Idah","stateCode": "KB"},
  {"name":"Igalamela-Odolu","stateCode": "KB"},
  {"name":"Ijumu","stateCode": "KB"},
  {"name":"Kabba/Bunu","stateCode": "KB"},
  {"name":"Kogi","stateCode": "KB"},
  {"name":"Lokoja","stateCode": "KB"},
  {"name":"Mopa-Muro","stateCode": "KB"},
  {"name":"Ofu","stateCode": "KB"},
  {"name":"Ogori/Mangongo","stateCode": "KB"},
  {"name":"Okehi","stateCode": "KB"},
  {"name":"Okene","stateCode": "KB"},
  {"name":"Olamabolo","stateCode": "KB"},
  {"name":"Omala","stateCode": "KB"},
  {"name":"Yagba East","stateCode": "KB"},
  {"name":"Yagba West","stateCode": "KB"},
  {"name":"Asa","stateCode": "KW"},
  {"name":"Baruten","stateCode": "KW"},
  {"name":"Edu","stateCode": "KW"},
  {"name":"Ekiti","stateCode": "KW"},
  {"name":"Ifelodun","stateCode": "KW"},
  {"name":"Ilorin East","stateCode": "KW"},
  {"name":"Ilorin West","stateCode": "KW"},
  {"name":"Irepodun","stateCode": "KW"},
  {"name":"Isin","stateCode": "KW"},
  {"name":"Kaiama","stateCode": "KW"},
  {"name":"Moro","stateCode": "KW"},
  {"name":"Offa","stateCode": "KW"},
  {"name":"Oke-Ero","stateCode": "KW"},
  {"name":"Oyun","stateCode": "KW"},
  {"name":"Pategi","stateCode": "LA"},
  {"name":"Agege","stateCode": "LA"},
  {"name":"Ajeromi-Ifelodun","stateCode": "LA"},
  {"name":"Alimosho","stateCode": "LA"},
  {"name":"Amuwo-Odofin","stateCode": "LA"},
  {"name":"Apapa","stateCode": "LA"},
  {"name":"Badagry","stateCode": "LA"},
  {"name":"Epe","stateCode": "LA"},
  {"name":"Eti-Osa","stateCode": "LA"},
  {"name":"Ibeju/Lekki","stateCode": "LA"},
  {"name":"Ifako-Ijaye","stateCode": "LA"},
  {"name":"Ikeja","stateCode": "LA"},
  {"name":"Ikorodu","stateCode": "LA"},
  {"name":"Kosofe","stateCode": "LA"},
  {"name":"Lagos Island","stateCode": "LA"},
  {"name":"Lagos Mainland","stateCode": "LA"},
  {"name":"Mushin","stateCode": "LA"},
  {"name":"Ojo","stateCode": "LA"},
  {"name":"Oshodi-Isolo","stateCode": "LA"},
  {"name":"Shomolu","stateCode": "LA"},
  {"name":"Surulere","stateCode": "LA"},
  {"name":"Akwanga","stateCode": "NW"},
  {"name":"Awe","stateCode": "NW"},
  {"name":"Doma","stateCode": "NW"},
  {"name":"Karu","stateCode": "NW"},
  {"name":"Keana","stateCode": "NW"},
  {"name":"Keffi","stateCode": "NW"},
  {"name":"Kokona","stateCode": "NW"},
  {"name":"Lafia","stateCode": "NW"},
  {"name":"Nasarawa","stateCode": "NW"},
  {"name":"Nasarawa-Eggon","stateCode": "NW"},
  {"name":"Obi","stateCode": "NW"},
  {"name":"Toto","stateCode": "NW"},
  {"name":"Wamba","stateCode": "NW"},
  {"name":"Agaie","stateCode": "NG"},
  {"name":"Agwara","stateCode": "NG"},
  {"name":"Bida","stateCode": "NG"},
  {"name":"Borgu","stateCode": "NG"},
  {"name":"Bosso","stateCode": "NG"},
  {"name":"Chanchaga","stateCode": "NG"},
  {"name":"Edati","stateCode": "NG"},
  {"name":"Gbako","stateCode": "NG"},
  {"name":"Gurara","stateCode": "NG"},
  {"name":"Katcha","stateCode": "NG"},
  {"name":"Kontagora","stateCode": "NG"},
  {"name":"Lapai","stateCode": "NG"},
  {"name":"Lavun","stateCode": "NG"},
  {"name":"Magama","stateCode": "NG"},
  {"name":"Mariga","stateCode": "NG"},
  {"name":"Mashegu","stateCode": "NG"},
  {"name":"Mokwa","stateCode": "NG"},
  {"name":"Muya","stateCode": "NG"},
  {"name":"Pailoro","stateCode": "NG"},
  {"name":"Rafi","stateCode": "NG"},
  {"name":"Rijau","stateCode": "NG"},
  {"name":"Shiroro","stateCode": "NG"},
  {"name":"Suleja","stateCode": "NG"},
  {"name":"Tafa","stateCode": "NG"},
  {"name":"Wushishi","stateCode": "NG"},
  {"name":"Abeokuta North","stateCode": "OG"},
  {"name":"Abeokuta South","stateCode": "OG"},
  {"name":"Ado-Odo/Ota","stateCode": "OG"},
  {"name":"Egbado North","stateCode": "OG"},
  {"name":"Egbado South","stateCode": "OG"},
  {"name":"Ewekoro","stateCode": "OG"},
  {"name":"Ifo","stateCode": "OG"},
  {"name":"Ijebu East","stateCode": "OG"},
  {"name":"Ijebu North","stateCode": "OG"},
  {"name":"Ijebu North East","stateCode": "OG"},
  {"name":"Ijebu Ode","stateCode": "OG"},
  {"name":"Ikenne","stateCode": "OG"},
  {"name":"Imeko-Afon","stateCode": "OG"},
  {"name":"Ipokia","stateCode": "OG"},
  {"name":"Obafemi-Owode","stateCode": "OG"},
  {"name":"Ogun Waterside","stateCode": "OG"},
  {"name":"Odeda","stateCode": "OG"},
  {"name":"Odogbolu","stateCode": "OG"},
  {"name":"Remo North","stateCode": "OG"},
  {"name":"Shagamu","stateCode": "OG"},
  {"name":"Akoko North East","stateCode": "ON"},
  {"name":"Akoko North West","stateCode": "ON"},
  {"name":"Akoko South Akure East","stateCode": "ON"},
  {"name":"Akoko South West","stateCode": "ON"},
  {"name":"Akure North","stateCode": "ON"},
  {"name":"Akure South","stateCode": "ON"},
  {"name":"Ese-Odo","stateCode": "ON"},
  {"name":"Idanre","stateCode": "ON"},
  {"name":"Ifedore","stateCode": "ON"},
  {"name":"Ilaje","stateCode": "ON"},
  {"name":"Ile-Oluji","stateCode": "ON"},
  {"name":"Okeigbo","stateCode": "ON"},
  {"name":"Irele","stateCode": "ON"},
  {"name":"Odigbo","stateCode": "ON"},
  {"name":"Okitipupa","stateCode": "ON"},
  {"name":"Ondo East","stateCode": "ON"},
  {"name":"Ondo West","stateCode": "ON"},
  {"name":"Ose","stateCode": "ON"},
  {"name":"Owo","stateCode": "ON"},
  {"name":"Aiyedade","stateCode": "OS"},
  {"name":"Aiyedire","stateCode": "OS"},
  {"name":"Atakumosa East","stateCode": "OS"},
  {"name":"Atakumosa West","stateCode": "OS"},
  {"name":"Boluwaduro","stateCode": "OS"},
  {"name":"Boripe","stateCode": "OS"},
  {"name":"Ede North","stateCode": "OS"},
  {"name":"Ede South","stateCode": "OS"},
  {"name":"Egbedore","stateCode": "OS"},
  {"name":"Ejigbo","stateCode": "OS"},
  {"name":"Ife Central","stateCode": "OS"},
  {"name":"Ife East","stateCode": "OS"},
  {"name":"Ife North","stateCode": "OS"},
  {"name":"Ife South","stateCode": "OS"},
  {"name":"Ifedayo","stateCode": "OS"},
  {"name":"Ifelodun","stateCode": "OS"},
  {"name":"Ila","stateCode": "OS"},
  {"name":"Ilesha East","stateCode": "OS"},
  {"name":"Ilesha West","stateCode": "OS"},
  {"name":"Irepodun","stateCode": "OS"},
  {"name":"Irewole","stateCode": "OS"},
  {"name":"Isokan","stateCode": "OS"},
  {"name":"Iwo","stateCode": "OS"},
  {"name":"Obokun","stateCode": "OS"},
  {"name":"Odo-Otin","stateCode": "OS"},
  {"name":"Ola-Oluwa","stateCode": "OS"},
  {"name":"Olorunda","stateCode": "OS"},
  {"name":"Oriade","stateCode": "OS"},
  {"name":"Orolu","stateCode": "OS"},
  {"name":"Osogbo","stateCode": "OS"},
  {"name":"Afijio","stateCode": "OY"},
  {"name":"Akinyele","stateCode": "OY"},
  {"name":"Atiba","stateCode": "OY"},
  {"name":"Atigbo","stateCode": "OY"},
  {"name":"Egbeda","stateCode": "OY"},
  {"name":"Ibadan Central","stateCode": "OY"},
  {"name":"Ibadan North","stateCode": "OY"},
  {"name":"Ibadan North West","stateCode": "OY"},
  {"name":"Ibadan South East","stateCode": "OY"},
  {"name":"Ibadan South West","stateCode": "OY"},
  {"name":"Ibarapa Central","stateCode": "OY"},
  {"name":"Ibarapa East","stateCode": "OY"},
  {"name":"Ibarapa North","stateCode": "OY"},
  {"name":"Ido","stateCode": "OY"},
  {"name":"Irepo","stateCode": "OY"},
  {"name":"Iseyin","stateCode": "OY"},
  {"name":"Itesiwaju","stateCode": "OY"},
  {"name":"Iwajowa","stateCode": "OY"},
  {"name":"Kajola","stateCode": "OY"},
  {"name":"Lagelu Ogbomosho North","stateCode": "OY"},
  {"name":"Ogbmosho South","stateCode": "OY"},
  {"name":"Ogo Oluwa","stateCode": "OY"},
  {"name":"Olorunsogo","stateCode": "OY"},
  {"name":"Oluyole","stateCode": "OY"},
  {"name":"Ona-Ara","stateCode": "OY"},
  {"name":"Orelope","stateCode": "OY"},
  {"name":"Ori Ire","stateCode": "OY"},
  {"name":"Oyo East","stateCode": "OY"},
  {"name":"Oyo West","stateCode": "OY"},
  {"name":"Saki East","stateCode": "OY"},
  {"name":"Saki West","stateCode": "OY"},
  {"name":"Surulere","stateCode": "OY"},
  {"name":"Barikin Ladi","stateCode": "PT"},
  {"name":"Bassa","stateCode": "PT"},
  {"name":"Bokkos","stateCode": "PT"},
  {"name":"Jos East","stateCode": "PT"},
  {"name":"Jos North","stateCode": "PT"},
  {"name":"Jos South","stateCode": "PT"},
  {"name":"Kanam","stateCode": "PT"},
  {"name":"Kanke","stateCode": "PT"},
  {"name":"Langtang North","stateCode": "PT"},
  {"name":"Langtang South","stateCode": "PT"},
  {"name":"Mangu","stateCode": "PT"},
  {"name":"Mikang","stateCode": "PT"},
  {"name":"Pankshin","stateCode": "PT"},
  {"name":"Qua'an Pan","stateCode": "PT"},
  {"name":"Riyom","stateCode": "PT"},
  {"name":"Shendam","stateCode": "PT"},
  {"name":"Wase","stateCode": "PT"},
  {"name":"Abua/Odual","stateCode": "RS"},
  {"name":"Ahoada East","stateCode": "RS"},
  {"name":"Ahoada West","stateCode": "RS"},
  {"name":"Akuku Toru","stateCode": "RS"},
  {"name":"Andoni","stateCode": "RS"},
  {"name":"Asari-Toru","stateCode": "RS"},
  {"name":"Bonny","stateCode": "RS"},
  {"name":"Degema","stateCode": "RS"},
  {"name":"Emohua","stateCode": "RS"},
  {"name":"Eleme","stateCode": "RS"},
  {"name":"Etche","stateCode": "RS"},
  {"name":"Gokana","stateCode": "RS"},
  {"name":"Ikwerre","stateCode": "RS"},
  {"name":"Khana","stateCode": "RS"},
  {"name":"Obia/Akpor","stateCode": "RS"},
  {"name":"Ogba/Egbema/Ndoni","stateCode": "RS"},
  {"name":"Ogu/Bolo","stateCode": "RS"},
  {"name":"Okrika","stateCode": "RS"},
  {"name":"Omumma","stateCode": "RS"},
  {"name":"Opobo/Nkoro","stateCode": "RS"},
  {"name":"Oyigbo","stateCode": "RS"},
  {"name":"Port-Harcourt","stateCode": "RS"},
  {"name":"Tai","stateCode": "RS"},
  {"name":"Binji","stateCode": "ST"},
  {"name":"Bodinga","stateCode": "ST"},
  {"name":"Dange-shnsi","stateCode": "ST"},
  {"name":"Gada","stateCode": "ST"},
  {"name":"Goronyo","stateCode": "ST"},
  {"name":"Gudu","stateCode": "ST"},
  {"name":"Gawabawa","stateCode": "ST"},
  {"name":"Illela","stateCode": "ST"},
  {"name":"Isa","stateCode": "ST"},
  {"name":"Kware","stateCode": "ST"},
  {"name":"kebbe","stateCode": "ST"},
  {"name":"Rabah","stateCode": "ST"},
  {"name":"Sabon birni","stateCode": "ST"},
  {"name":"Shagari","stateCode": "ST"},
  {"name":"Silame","stateCode": "ST"},
  {"name":"Sokoto North","stateCode": "ST"},
  {"name":"Sokoto South","stateCode": "ST"},
  {"name":"Tambuwal","stateCode": "ST"},
  {"name":"Tqngaza","stateCode": "ST"},
  {"name":"Tureta","stateCode": "ST"},
  {"name":"Wamako","stateCode": "ST"},
  {"name":"Wurno","stateCode": "ST"},
  {"name":"Yabo","stateCode": "ST"},
  {"name":"Ardo-kola","stateCode": "TB"},
  {"name":"Bali","stateCode": "TB"},
  {"name":"Donga","stateCode": "TB"},
  {"name":"Gashaka","stateCode": "TB"},
  {"name":"Cassol","stateCode": "TB"},
  {"name":"Ibi","stateCode": "TB"},
  {"name":"Jalingo","stateCode": "TB"},
  {"name":"Karin-Lamido","stateCode": "TB"},
  {"name":"Kurmi","stateCode": "TB"},
  {"name":"Lau","stateCode": "TB"},
  {"name":"Sardauna","stateCode": "TB"},
  {"name":"Takum","stateCode": "TB"},
  {"name":"Ussa","stateCode": "TB"},
  {"name":"Wukari","stateCode": "TB"},
  {"name":"Yorro","stateCode": "TB"},
  {"name":"Zing","stateCode": "TB"},
]

    return(
        <>
        <SideNav/>
        <div class="flex h-screen bg-gray-100">
   <div class="m-auto">
      <div>
         <button type="button" class="relative w-full flex justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-gradient-to-r from-cyan-600 to-slate-600 rounded-md hover:bg-gray-900  focus:outline-none   transition duration-300 transform active:scale-95 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
               <g>
                  <rect fill="none" height="24" width="24"></rect>
               </g>
               <g>
                  <g>
                     <path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"></path>
                  </g>
               </g>
            </svg>
            <span class="pl-2 mx-1">Create New Property</span>
         </button>
         <div class="mt-5 bg-white rounded-lg shadow">
            <div class="flex">
               <div class="flex-1 py-5 pl-5 overflow-hidden">
                  <svg class="inline align-text-top" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                     <g>
                        <path d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z" fill="none" id="svg_1" stroke="null"></path>
                        <path d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z" id="svg_2"></path>
                        <circle cx="7.04807" cy="6.97256" r="2.5" id="svg_3"></circle>
                     </g>
                  </svg>
                  <h1 class="inline text-2xl font-semibold leading-none">Address</h1>
               </div>
            </div>
            <div class="px-5 pb-5">
                <label htmlFor="selectPosition">Property Name *</label>
               <input type="text" value={property_name} onChange={(e) =>setPropName(e.target.value)} placeholder="Property Name" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-1 mb-3 text-base  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" required/>
               {/** */}

               <label htmlFor="selectPosition">Property Type *</label>
               <select required
                  onChange={(e) => handlePropertyTypeChange(e.target.value)}
                  className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-1 mb-3 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  >
                  <option value=""></option>
                  {all_types.map(sta => (
                  <option value={[sta.isoCode]}>{sta.name}</option>
                  ))}
               </select>

               {/** */}
               <label htmlFor="selectPosition">State *</label>
               <select required
                  onChange={(e) => handleStateChange(e.target.value ,e.target.selectedOptions[0].getAttribute('data-state-name'))}
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-1 mb-3 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                  >
                  <option value=""></option>
                  {all_states.map(sta => (
                  <option value={[sta.isoCode]} data-state-name={sta.name}>{sta.name}</option>
                  ))} 
               </select> 

               <div class="flex">
                  <div class="flex-grow w-1/4 pr-2">
                    <label htmlFor="selectPosition">Local Government *</label>
                    <select required onChange={(e) => handleLGChange(e.target.value)} className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-1 mb-3 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400">
                     <option value=""></option>
                     {cities.map(city => (
                        <option value={[city.name]}>{city.name}</option>
                     ))}
                  </select>

                  </div>
                  <div class="flex-grow">
                    <label htmlFor="selectPosition">Address *</label>
                    <input placeholder="Address" value={Address} onChange={(e)=>setAddress(e.target.value)} class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-1 mb-3 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" required/>
                  </div>
               </div>

            </div>
            <div class="flex">
               <div class="flex py-5 pl-5 overflow-hidden">
                  <IoCloudUploadSharp className="text-2xl mr-2"/>
                  <h1 class="inline text-2xl font-semibold leading-none">Uploads</h1>
               </div>
               <div class="flex-none pt-2.5 pr-2.5 pl-1"></div>
            </div>
            {/**2 */}
            <div class="px-5 pb-5">
                <label htmlFor="selectPosition">Internal image 1 *</label>
               <input type="file" onChange={(e) =>setIn1(e.target.files[0])} placeholder="Internal-image-1" className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-1 mb-3 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" required/>
               
               <label htmlFor="selectPosition">Internal image 2 *</label>
               <input type="file" onChange={(e)=>setIn2(e.target.files[0])} placeholder="Internal-image-2" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-1 mb-3 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" required/> 

               <div class="flex">
                  <div class="flex-grow w-1/4 pr-2">
                     <label htmlFor="selectPosition">External Image 1 *</label>
                     <input  type="file" onChange={(e)=>setOut1(e.target.files[0])} placeholder="External-image-1" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-1 mb-3 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" required/>
                  </div>

                  <div class="flex-grow">
                     <label htmlFor="selectPosition">External Image 2 *</label>
                     <input type="file" onChange={(e)=>setOut2(e.target.files[0])} placeholder="External-image-2" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-1 mb-3 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" required/>
                  </div>
               </div>
               
            </div>

            {/**3 */}
            <div class="px-5 pb-5">
                <label htmlFor="selectPosition">Other Images</label>
               <input type="file" onChange={(e)=>setOther(e.target.files[0])}  placeholder="Other images" className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-1 mb-3 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
               
               <label htmlFor="selectPosition">Set Price *</label>
               <input  placeholder="Set price" value={price} onChange={(e)=>setPrice(e.target.value)} class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-1 mb-3 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" required/> 

               <div class="flex">
                  <div class="flex-grow w-1/4 pr-2">
                     <label htmlFor="Continual Price">Continual Price *</label>
                     <input value={Cprice} onChange={(e)=>setCprice(e.target.value)} placeholder="Continual Price" class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-1 mb-3 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" required/>
                  </div>

                  <div class="flex-grow">
                     <label htmlFor="selectPosition">Available *</label>
                     <select required onChange={(e) => handleAvailableChange(e.target.value)} className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-1 mb-3 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400">
                     <option value=""></option>
                     {Available.map(op => (
                        <option value={[op.isoCode]}>{op.name}</option>
                     ))}
                  </select>
                  </div>
               </div>
               
            </div>

            <hr class="mt-4"/>
            <div class="flex flex-row-reverse p-3 mb-3">
               <div class="flex-initial pl-3 mb-3">
                  <button type="button" class="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-gradient-to-r from-cyan-600 to-slate-600 rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out">
                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z" opacity=".3"></path>
                        <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                     </svg>
                     <span onClick={() => handlePropertyAdd()} class="pl-2 mx-1">Save</span>
                  </button>
                  {error && (
                     <div>
                        <button className="p-2 bg-rose-500 text-neutral-50 font-medium text-base mt-2 rounded-lg">{error}</button>
                     </div>
                  )}
                  {success && (
                     <div>
                        <button className="p-3 bg-emerald-500 text-neutral-50 font-medium text-base mt-2 rounded-lg">{success}</button>
                     </div>
                  )}
               </div>
               
            </div>
         </div>
         </div>
   </div>
</div>
        </>
    )
}