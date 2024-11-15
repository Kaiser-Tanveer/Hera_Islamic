import React, { useState } from 'react';
import { ImBin } from 'react-icons/im';
import { Link } from 'react-router-dom';
import useUserActions from '../../../MyHooks/useUserAction';
import Modal from '../../../Components/SharedComponents/ReusablePopUp/Modal';

const AllStudentData = ({ student, setStudents, students }) => {
    const { error, updateUserType, deleteUser } = useUserActions();
    const [showModal, setShowModal] = useState(false);
    const [studentToDelete, setStudentToDelete] = useState(null);

    const handleDeleteClick = (studentId) => {
        setStudentToDelete(studentId);
        setShowModal(true);  // Show the modal
    };

    const handleConfirmDelete = () => {
        if (studentToDelete) {
            deleteUser(studentToDelete, 'students', setStudents);
            setShowModal(false);  // Close the modal after confirming
        }
    };

    const handleCancelDelete = () => {
        setShowModal(false);  // Close the modal if cancelled
    };

    return (
        <>
            <tr key={student?.roll} className='border-y border-gray-200 odd:bg-gray-50 even:bg-white hover:odd:bg-gray-100'>
                <td className='pr-2 py-2 text-nowrap'>{student?.roll}</td>
                <td className='p-2 text-nowrap'>
                    <Link to="/stu" className='flex items-center gap-2'>
                        <img src={student?.img} alt="" className='h-8 w-8 rounded-full' loading='lazy' />
                    </Link>
                </td>
                <td className='p-2 text-nowrap'>
                    <Link to="/stu" className='flex items-center gap-2'>
                        {student?.fName + ' ' + student.lName}
                    </Link>
                </td>
                <td className='p-2 text-nowrap'>{student?.gender}</td>
                <td className='p-2 text-nowrap'>{student?.class}</td>
                <td className='p-2 text-nowrap'>{student?.section}</td>
                <td className='p-2 text-nowrap'>{student?.parent}</td>
                <td className='p-2 text-nowrap'>{student?.address}</td>
                <td className='p-2 text-nowrap'>{student?.DOB}</td>
                <td className='p-2 text-nowrap'>{student?.phone}</td>
                <td className='p-2 text-nowrap'>
                    <select onChange={(e) => updateUserType(e, 'students', student, setStudents)} value={student?.userType}>
                        <option value="Student">Student</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Parent">Parent</option>
                        <option value="Admin">Admin</option>
                        <option value="Super Admin">Super Admin</option>
                    </select>
                </td>            
                <td className='p-2 text-nowrap text-center'>
                    <button 
                        onClick={() => handleDeleteClick(student._id)}
                        className='text-red-600 hover:bg-red-100 p-2 rounded-md border border-gray-50 hover:border-red-500 group duration-500'>
                        <ImBin className='group-hover:scale-110 duration-500' />
                    </button>
                </td>
            </tr>

            {/* Modal for confirmation */}
            {showModal && (
                <Modal
                    isOpen={showModal}
                    onClose={handleCancelDelete}
                    onConfirm={handleConfirmDelete}
                    title="Delete Student"
                    confirmText="Delete"
                    cancelText="Cancel"
                >
                    <p>Are you sure you want to delete this student?</p>
                </Modal>
            )}
        </>
    );
};

export default AllStudentData;
