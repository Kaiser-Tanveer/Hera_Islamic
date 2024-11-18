import React, { useState } from 'react';
import { ImBin } from 'react-icons/im';
import { Link } from 'react-router-dom';
import Modal from '../../../../Components/SharedComponents/ReusablePopUp/Modal';
import useUserActions from '../../../../MyHooks/useUserAction';

const FilteredUserData = ({user, setUsers}) => {
    const { error, updateUserType, deleteUser } = useUserActions();
    const [showModal, setShowModal] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    const handleDeleteClick = (studentId) => {
        setUserToDelete(studentId);
        setShowModal(true);  // Show the modal
    };

    const handleConfirmDelete = () => {
        if (userToDelete) {
            deleteUser(userToDelete, 'users', setUsers);
            setShowModal(false);  // Close the modal after confirming
        }
    };

    const handleCancelDelete = () => {
        setShowModal(false);  // Close the modal if cancelled
    };
    return (
        <tr key={user?.roll} className='border-y border-gray-200 odd:bg-gray-50 even:bg-white hover:odd:bg-gray-100'>
                <td className='pr-2 py-2 text-nowrap'>{user?.roll}</td>
                <td className='p-2 text-nowrap'>
                    <Link to="/stu" className='flex items-center gap-2'>
                        <img src={user?.img} alt="" className='h-8 w-8 rounded-full' loading='lazy' />
                    </Link>
                </td>
                <td className='p-2 text-nowrap'>
                    <Link to="/stu" className='flex items-center gap-2'>
                        {user?.fName + ' ' + user.lName}
                    </Link>
                </td>
                <td className='p-2 text-nowrap'>{user?.gender}</td>
                <td className='p-2 text-nowrap'>
                    <select onChange={(e) => updateUserType(e, 'users', user, setUsers)} value={user?.userType}>
                        <option value="Student">Student</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Parent">Parent</option>
                        <option value="Admin">Admin</option>
                        <option value="Super Admin">Super Admin</option>
                    </select>
                </td>            
                <td className='p-2 text-nowrap'>{user?.address}</td>
                <td className='p-2 text-nowrap'>{user?.phone}</td>
                <td className='p-2 text-nowrap'>{user?.email}</td>
                <td className='p-2 text-nowrap'>{user?.action}</td>
                <td className='p-2 text-nowrap text-center'>
                    <button 
                        onClick={() => handleDeleteClick(user._id)}
                        className='text-red-600 hover:bg-red-100 p-2 rounded-md border border-gray-50 hover:border-red-500 group duration-500'>
                        <ImBin className='group-hover:scale-110 duration-500' />
                    </button>
                </td>
                {showModal && (
                <Modal
                    isOpen={showModal}
                    onClose={handleCancelDelete}
                    onConfirm={handleConfirmDelete}
                    title="Delete Student"
                    confirmText="Delete"
                    cancelText="Cancel"
                >
                    <p>Are you sure you want to delete this user?</p>
                </Modal>
            )}
            </tr>
    );
};

export default FilteredUserData;