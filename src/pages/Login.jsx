import { useState , useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../services/authService";
import Footer from "../components/Footer";
import { Spinner } from "flowbite-react";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading,setLoading] = useState(false)


    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true)

        try{
            const userData = { username,password};
            const response = await authService.loginUser(userData);

            //console.log(response?.data)
            if(response.status === 200 ){
                setLoading(false)
                authService.setToken(response?.data?.access);
                navigate('/home')
            }
            setError(null);
        
        } catch (error) {
            setLoading(false)
            console.error('Login failed', error.response);
            setError('Invalid username or password!');
        }
    };
    return(
        <>
        <div>
            <section className="bg-gradient-to-r from-slate-400 to-gray-3000 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img class="w-9 h-9 mr-2" src="https://res.cloudinary.com/delagynow/image/upload/v1714138128/site_photo%20archive/Dwell_ftkvrx.svg" alt="logo"/>
                            Dwell    
                        </Link>
                <div className="w-full bg-gradient-to-r from-zinc-500 to-slate-400 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                         
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-700 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            {/* Error message **/}
                            {error && (
                                    <div className="text-gray-900 dark:text-gray-900 text-sm font-medium">
                                        {error}
                                    </div>
                            )}
                            <button onClick={handleLogin} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{loading ? (<Spinner className="mr-2" size='md'/>):(<h1></h1>)}Sign innil</button>
                            <p className="text-sm font-light text-gray-800 dark:text-gray-400">
                                Don’t have an account yet? <Link to="/" smooth duration={500} className="font-medium text-cyan-400 hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            </section>
        </div>   
        <Footer/>
        </>
)};
export default Login;
