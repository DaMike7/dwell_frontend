import React, { useState, useEffect, useRef } from "react";
import SideNav from "../components/SideNav";
import { authService } from "../services/authService";
import { useParams , Link , useNavigate} from "react-router-dom";
import client from "../api";
import { current } from "@reduxjs/toolkit";
import { Banner,Navbar } from "flowbite-react";
import { FaArrowLeft } from "react-icons/fa6";

const Chat = () => {
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const [data,setData] = useState([])
  const { sender } = useParams();
  const [message,setMessages] = useState([])
  const [picture,setPicture] = useState('')
  const [newMessage,setNewMessage] = useState('')
  const socket  = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const token = authService.getToken()
    setToken(token)
    const userId = authService.getUserId()
    setUserId(userId)

    fetchChatMessages(userId, sender);
    socket.current = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${sender}/?token=${token}`)
    socket.current.onopen = () =>{
      console.log('connected')
    }

    getSender()
    scroll()
 
    socket.current.onmessage = (event) => {
      setMessages(prevMessages => [...prevMessages, JSON.parse(event.data)]);
    }

    return () =>{
      if(socket.current){
        socket.current.close()
        console.log('Disconnected')
      }
    }

  }, [sender, authService,]);

  const scroll = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
};

  const getSender = async () => {
    let picture;
    try {
      const req1 = await client.get(`users/tenants/picture/${sender}/`);
      picture = req1.data.profile_picture;
    } catch (error) {
      try {
        const req2 = await client.get(`users/property-owners/picture/${sender}/`);
        picture = req2.data.profile_picture;
      } catch (innerError) {
        console.error('Both requests failed:', innerError);
      }
    }
    setPicture(picture);
    const response = await client.get(`auth/users/get/${sender}/`)
    setData(response.data)
  }

  const fetchChatMessages = async (userId, sender) => {
    try {

      const response = await client.get(`chat/messages/${userId}/${sender}/`);
      setMessages(response.data);
      console.log('Fetched Messages Successfully');
    } catch (error) {
      console.error("Error fetching chat messages:", error.response);
    }
  };

  const sendMessage = async () =>{
    if (!newMessage.trim()) return;

    socket.current.send(JSON.stringify({ 'message':newMessage , 'sender':userId , 'receiver' :sender }))

    const messageData = {
      sender : userId,
      receiver : sender,
      content : newMessage
    }

    const response = await client.post(`chat/send-message/${userId}/${sender}/`,messageData)
    setNewMessage('')
    if (response.status === 200){
    console.log('Sent!')
    }
    else{
      console.log('Message not sent!')
    }
  }

  return (
    <>
      <SideNav />
      <div className=" flex flex-col h-screen sm:ml-64 bg-gradient-to-r from-slate-300 to-amber-50">
      <nav class="p-1.5 flex bg-gradient-to-r from-cyan-600 to-slate-600">
        <div onClick={() => navigate(`/inbox/${userId}`)} className="text-gray-100 hover:text-gray-700 flex gap-1 bg-inherit hover:bg-gray-100 m-2 p-1.5 rounded-lg"><FaArrowLeft className="text-xl mt-1 font-body "/></div>
        <div className="ml-0 lg:ml-4 flex text-gray-100">
          <img className="w-12 h-12 rounded-full mx-2 mr-2" src={picture} alt="profile picture" />
          <p className="mt-3 text-lg font-semibold">{data.first_name} {data.last_name}</p>
        </div>
      </nav>
        <div id='messages' className="p-4 flex-grow overflow-y-auto">
          {message.length > 0 ? (
            <div>
              <ul className="space-y-4">
                {message.map((msg) => (
                  <li
                    key={msg.message_id}
                    className={`flex ${msg.sender === userId ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`${msg.sender === userId ? 'bg-gradient-to-r from-cyan-600 to-slate-700 text-gray-100 p-2 rounded-lg max-w-xs md:max-w-md':'bg-gradient-to-r from-teal-400 to-yellow-200 text-gray-900 p-2.5 rounded-lg max-w-xs md:max-w-md'}` }
                    >
                      <p>{msg.content || msg.message}</p>
                      {/*<p className="text-xs text-gray-600 mt-1">{new Date(msg.timestamp).toLocaleString()}</p>*/}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <section className="bg-gradient-to-r from-slate-300 to-amber-50 dark:bg-gray-900 mt-28">
              <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                  <h1 className="mb-4 text-6xl tracking-tight font-extrabold lg:text-6xl text-slate-700 dark:text-primary-500">Oops!</h1>
                  <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-3xl dark:text-white">No previous Messages Found.</p>
                  <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-400">Send A New Message. </p>
                </div>
              </div>
            </section>
          )}
        </div>

        <div className="my-2" id="send-section"></div>

        {/**SEND BUTTON */}
        <div  className="p-2 mt-auto bg-white border-t-2 border-gray-200">
          <div className="flex gap-2">
            <input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-400"
              placeholder="Type your message here..."
            />
            <button
              className=" p-2.5 px-4 bg-gradient-to-r from-cyan-600 to-slate-600 rounded-lg text-gray-100 font-medium"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;