import { useState } from "react";
import { Link } from "react-router-dom";
import client from "../api";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const TenantSignup = () => {
    const [cnerror,setcnerror] = useState(null)
    const [cities, setCities] = useState([])
    const [error, setError] = useState(null);
    const [message, displayMessage] = useState(null);
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [userBirthday, setBirthday] = useState('');
    const [first_cn, setFCNumber] = useState('');
    const [second_cn, setSCNumber] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [profilePictureFile, setProfilePictureFile] = useState(null);
    const [selectedState, setSelectedState] = useState('');
    const [selectedLGA, setSelectedLGA] = useState('');

    const handleCNChange = (value) => {
        let enteredCN = value.trim();
        if (enteredCN !== '' && !enteredCN.startsWith('+234')) {
            enteredCN = '+234' + enteredCN;
        }
    
        if (enteredCN !== '' && enteredCN.length !== 14) {
            setcnerror('Invalid contact number!');
        } else {
            setcnerror(null); 
        }
    
        setFCNumber(enteredCN);}


    const handleTUSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await client.post('users/tenants/signup/', {
                username:username,
                email:email,
                first_name : firstName,
                last_name : lastName,
                first_contact_number : first_cn,
                second_contact_number: second_cn,
                birthday : userBirthday,
                state : selectedState,
                local_government: selectedLGA,
                profile_picture : profilePictureFile,
                address : address,
                password : password

            }, { withCredentials: true,
                headers: {
                'Content-Type': 'multipart/form-data',
            }, });
            
            console.log('Signup successful', response.data);
            if(response.status === 201 ){
                displayMessage("Signup Successful!")
                navigate('/login')
            }

            useEffect(() => {
              const token = authService.getToken();
              setToken(token);
            }, []);
            setError(null);
            
        } catch (error) {
            // Handle error
            console.error('Signup failed',error);
            setError('Invalid Form!\nCheck Data and Retry');
            displayMessage(null)
        }
    };
    

    const all_states = [
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

    const handleStateChange = (value,setstate) => {
        setSelectedState(setstate);
        let getStateCities = all_cities.filter(city => city.stateCode === value);
        setCities(getStateCities);
    };

    const handleLGChange = (value) => {
        setSelectedLGA(value);
    };



    return (
        <>
            <div className="">
                <div className="">
                    <div class="bg-gray-50 dark:bg-gray-900">
                    <div class="flex flex-col items-center justify-center px-6 py-8 ">

                    <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img class="w-9 h-9 mr-2" src="https://res.cloudinary.com/delagynow/image/upload/v1714138128/site_photo%20archive/Dwell_ftkvrx.svg" alt="logo"/>
                            Dwell    
                        </Link>
                        
                        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Sign Up As A Tenant
                                </h1>
                                <form class="space-y-4 md:space-y-6" action="#">
                                    {/* USERNAME */}
                                    <div>
                                        <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                        <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required/>
                                    </div>
                                    {/*EMAIL */}
                                    <div>
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required/>
                                    </div>
                                    {/*FIRST NAME */}
                                    <div>
                                        <label for="First Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                        <input type="text" name="first-name" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="first name" required/>
                                    </div>
                                    {/*LAST NAME */}
                                    <div>
                                        <label for="Last Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                        <input type="text" name="last-name" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="last name" required/>
                                    </div>
                                    {/*BIRTHDAY */}
                                    <div>
                                        <label for="Birthday" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Birthday</label>
                                        <input type="date" name="birthday" id="birthday" value={userBirthday} onChange={(e) => setBirthday(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                                    </div>
                                    {/*FIRST CONTACT NUMBER */}
                                    <div>
                                        <label for="First Contact Number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Contact Number 
                                        <span className="ml-3 text-red-600">{
                                            cnerror && (<h1>{cnerror}</h1>)
                                        }</span>
                                        </label>

                                        <input type="tel" name="first-number" id="first-number" pattern="\+234[0-9]{10}" value={first_cn} onChange={(e) => handleCNChange(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="sample +23491020000001" required/>
                                    </div>
                                    {/*SECOND CONTACT NUMBER */}
                                    <div>
                                        <label for="Second Contact Number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Second Contact Number (optional)</label>
                                        <input type="tel" name="last-number" id="last-number" value={second_cn} onChange={(e) => setSCNumber(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="second phone number" required=""/>
                                    </div>
                                    {/*STATE */}
                                    <div className="form-group">
                                        <label htmlFor="selectState">State * (residential state)</label>
                                        <select required
                                            onChange={(e) => handleStateChange(e.target.value ,e.target.selectedOptions[0].getAttribute('data-state-name'))}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="selectState"
                                            >
                                            <option value=""></option>
                                            {all_states.map(sta => (
                                            <option value={[sta.isoCode]}  data-state-name={sta.name}>{sta.name}</option>
                                            ))} 
                                        </select> 
                                    </div>
                                    {/*LGA*/}
                                    <div className="form-group">
                                        <label htmlFor="selectCity">City *</label>
                                        <select required onChange={(e) => handleLGChange(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="selectCity">
                                            <option value=""></option>
                                            {cities.map(city => (
                                                <option value={[city.name]}>{city.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    {/*ADDRESS */}
                                    <div>
                                        <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                        <input type="text" name="address" id="address" value={address} onChange={(e) => setAddress(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="residential address" required/>
                                    </div>
                                    {/*PROFILE PICTURE */}
                                    <div>
                                        <label for="picture" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Picture</label>
                                        <input type="file" name="picture" id="picture" onChange={(e) => setProfilePictureFile(e.target.files[0])} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                                    </div>
                                    {/*PASSWORD CONFIRMATION*/}
                                    <div>
                                        <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="password" name="confirm-password" id="confirm-password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                                    </div>
                                    {/*POST BUTTON */}
                                    <button onClick={handleTUSignup} class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                                    {/* Error message **/}
                                    {error && (
                                        <div className="text-red-500 dark:text-red-400 text-sm font-medium">
                                            {error}
                                        </div>
                                    )}
                                    {message && (<p className="text-teal-800 dark:text-teal-700 text-sm font-medium">{message}</p>)}
                                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Already have an account? <Link to="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default TenantSignup;