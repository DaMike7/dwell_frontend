import SideNav from "../components/SideNav";
import client from "../api";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function Users() {
  const [users, setUsers] = useState([]); 
  const navigate = useNavigate()
  const [activeModalUserId, setActiveModalUserId] = useState(false);
  
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await client.get('/auth/users/all/');
      setUsers(response.data); 
      console.log('Fetched Data!');
    } catch (error) {
      console.error({'Error ': error.response});
    }
  };const openDeleteModal = (username) => {
    setActiveModalUserId(username);
  };

  const closeDeleteModal = () => {
    setActiveModalUserId(null);
  };

  const deleteUser = async (handle,role,uid) => {
    try{
      if (role === 'tenant'){
      const response = await client.delete(`users/tenants/delete-user/${uid}/`)
      if (response.status === 201){
        console.log(`Deleted user with username: ${handle}`);
      }
      }
      else if(role === 'property_owner'){
        const response = await client.delete(`users/property-owners/delete-user/${uid}/`)
        if (response.status === 201){
          console.log(`Deleted user with username: ${handle}`);} 
      }
    
      closeDeleteModal(); 
    }catch(error){
      console.log({'error!':response.erorr})
    }
  };


  return (
    <>
      <SideNav/>
      <div className="p-3 sm:ml-64">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="shadow overflow-hidden rounded border-b border-gray-200">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm">User Id</th>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Username</th>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm">First Name</th>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Last Name</th>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Birthday</th>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm">User Category</th>
                      <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td className="text-left py-3 px-4" >{user.id}</td>
                        <td className="text-left py-3 px-4">{user.handle}</td>
                        <td className="text-left py-3 px-4">{user.first_name}</td>
                        <td className="text-left py-3 px-4">{user.last_name}</td>
                        <td className="text-left py-3 px-4">{user.birthday}</td>
                        <td className="text-left py-3 px-4">{user.user_group}</td>
                        <td className="text-left py-3 px-4">
                          <div className="flex space-x-4 items-center">
                            <FaEye className="text-2xl cursor-pointer" onClick={() => navigate(`/profile/${user.handle}`)} />
                            <RiDeleteBin5Line className="text-2xl text-red-600 cursor-pointer" onClick={() => openDeleteModal(user.handle)} />
                            {activeModalUserId && (
                            <Modal show={true} size="md" onClose={closeDeleteModal} popup>
                              <Modal.Header />
                              <Modal.Body>
                                <div className="text-center">
                                  <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400" />
                                  <h3 className="mb-5 text-lg font-normal text-gray-500">
                                    Are you sure you want to delete {user.handle} ?
                                  </h3>
                                  <div className="flex justify-center gap-4">
                                    <button className="px-6 py-2 bg-red-600 text-white rounded-lg" onClick={() => deleteUser(activeModalUserId,user.user_group,user.id)}>
                                      Yes, I'm sure
                                    </button>
                                    <button className="px-6 py-2 bg-emerald-500 text-white rounded-lg" onClick={closeDeleteModal}>
                                      No, cancel
                                    </button>
                                    </div>
                                  </div>
                                </Modal.Body>
                              </Modal>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                    {users.length === 0 && (
                      <tr>
                        <td colSpan="7" className="text-center py-3 px-4">No users found.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}