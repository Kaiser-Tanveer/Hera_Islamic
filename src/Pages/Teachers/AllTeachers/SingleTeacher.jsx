import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { FaDownload, FaPrint } from 'react-icons/fa6';

const SingleTeacher = () => {
    return (
        <div className='bg-white rounded-md p-6 h-[95vh] overflow-y-scroll'>
            <div className='flex items-start justify-center gap-8'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOXzncoFn4YCPE7za6ghwJdj-IWqbbTXGtg&s" alt="" />
                <div className=''>
                    <div className='w-full flex items-center justify-between text-xl'>
                        <h2>My Name</h2>
                        <div className='flex items-center justify-end gap-6'>
                            <FaEdit/> <FaDownload/> <FaPrint/> 
                        </div>
                    </div>
                    <p className='py-6 text-justify'>Aliquam erat volutpat. Curabiene natis massa sedde lacu stiquen sodale word moun taiery.Aliquam erat volutpaturabiene natis massa sedde sodale word moun taiery.</p>
                    <table>
                        <tbody>
                            <tr>
                                <td>Name :</td>
                                <td className='font-bold pl-6 pb-4'>Mrs. X</td>
                            </tr>
                            <tr>
                                <td>Gander :</td>
                                <td className='font-bold pl-6 pb-4'>Female</td>
                            </tr>
                            <tr>
                                <td>Father :</td>
                                <td className='font-bold pl-6 pb-4'>Mr. X</td>
                            </tr>
                            <tr>
                                <td>Mother :</td>
                                <td className='font-bold pl-6 pb-4'>Mrs. XY</td>
                            </tr>
                            <tr>
                                <td>Date of Birth :</td>
                                <td className='font-bold pl-6 pb-4'>xx/xx/xxxx</td>
                            </tr>
                            <tr>
                                <td>Religion :</td>
                                <td className='font-bold pl-6 pb-4'>Islam</td>
                            </tr>
                            <tr>
                                <td>Father's Occupation :</td>
                                <td className='font-bold pl-6 pb-4' cla>X</td>
                            </tr>
                            <tr>
                                <td>Email :</td>
                                <td className='font-bold pl-6 pb-4'>xyz@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Admission Date :</td>
                                <td className='font-bold pl-6 pb-4'>xx.xx.xxxx</td>
                            </tr>
                            <tr>
                                <td>Class :</td>
                                <td className='font-bold pl-6 pb-4'>X</td>
                            </tr>
                            <tr>
                                <td>Section :</td>
                                <td className='font-bold pl-6 pb-4'>A</td>
                            </tr>
                            <tr>
                                <td>Roll :</td>
                                <td className='font-bold pl-6 pb-4'>xx</td>
                            </tr>
                            <tr>
                                <td>Address :</td>
                                <td className='font-bold pl-6 pb-4'>Unknown</td>
                            </tr>
                            <tr>
                                <td>Phone :</td>
                                <td className='font-bold pl-6 pb-4'>01XXXXXXXXX</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SingleTeacher;