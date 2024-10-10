import React, { useState } from 'react';
import { HiChevronDoubleRight, HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [stuOpen, setStuOpen] = useState(false);
    const [teacherOpen, setTeacherOpen] = useState(false);
    const [libraryOpen, setLibraryOpen] = useState(false);
    const [accOpen, setAccOpen] = useState(false);
    const [classesOpen, setClassesOpen] = useState(false);
    const [examOpen, setExamOpen] = useState(false);
    return (
        <aside className='w-full h-[100vh] overflow-auto pr-6 pb-6'>
            <div className='w-full flex flex-col gap-2'>
                <NavLink to="/dashboard"  className={({isActive}) => 
                isActive ? "border-b border-gray-200 px-4 py-2 text-sky-500 duration-500"
                :
                "border-b border-gray-200 hover:border-white hover:bg-sky-50 px-4 py-2 duration-500"
                }>
                    Dashboard
                </NavLink>
                    <button onClick={() => setStuOpen(!stuOpen)} className='flex items-center justify-between gap-2 border-b border-gray-200 hover:border-white hover:bg-sky-50 px-4 py-2 duration-500'>
                        <span>Students</span>
                        {
                            stuOpen ?
                            <HiChevronUp/>
                            :
                            <HiChevronDown/>
                        }
                    </button>
                    {
                        stuOpen &&
                            <div className='flex flex-col bg-gray-100 rounded-b-md -mt-2'>
                            <NavLink to="/students" className={({isActive}) => 
                            isActive ? "flex items-center border-b border-gray-200 px-4 py-2 text-sky-500 duration-500"
                            :
                            "flex items-center border-b border-gray-200 hover:border-white hover:bg-sky-50 px-4 py-2 duration-500"
                            }>
                                <HiChevronDoubleRight className='font-bold'/> <span>All Students</span>
                            </NavLink>
                            <NavLink to="admissionForm" className={({isActive}) => 
                            isActive ? "flex items-center border-b border-gray-200 px-4 py-2 text-sky-500 duration-500"
                            :
                            "flex items-center border-b border-gray-200 hover:border-white hover:bg-sky-50 px-4 py-2 duration-500"
                            }>
                            <HiChevronDoubleRight className='font-bold'/> <span>Admission Form</span>
                            </NavLink>
                            <NavLink to="stuPromotion" className={({isActive}) => 
                            isActive ? "flex items-center border-b rounded-b-md border-gray-200 px-4 py-2 text-sky-500 duration-500"
                            :
                            "flex items-center border-b border-gray-200 hover:border-white hover:bg-sky-50 px-4 py-2 duration-500"
                            }>
                            <HiChevronDoubleRight className='font-bold'/> <span>Promotion</span>
                                
                            </NavLink>
                            </div>
                    }
                    <button onClick={() => setTeacherOpen(!teacherOpen)} className='flex items-center justify-between gap-2 border-b border-gray-200 hover:border-white hover:bg-sky-50 px-4 py-2 duration-500'>
                        <span>Teachers</span>
                        {
                            teacherOpen ?
                            <HiChevronUp/>
                            :
                            <HiChevronDown/>
                        }
                    </button>
                    {
                        teacherOpen &&
                            <div className='flex flex-col bg-gray-100 rounded-b-md -mt-2'>
                            <NavLink to="/teachers" className={({isActive}) => 
                            isActive ? "flex items-center border-b border-gray-200 px-4 py-2 text-sky-500 duration-500"
                            :
                            "flex items-center border-b border-gray-200 hover:border-white hover:bg-sky-50 px-4 py-2 duration-500"
                            }>
                                <HiChevronDoubleRight className='font-bold'/> <span>All Teachers</span>
                            </NavLink>
                            <NavLink to="addTeacher" className={({isActive}) => 
                            isActive ? "flex items-center border-b border-gray-200 px-4 py-2 text-sky-500 duration-500"
                            :
                            "flex items-center border-b border-gray-200 hover:border-white hover:bg-sky-50 px-4 py-2 duration-500"
                            }>
                            <HiChevronDoubleRight className='font-bold'/> <span>Add Teacher</span>
                            </NavLink>
                            <NavLink to="teacherPayment" className={({isActive}) => 
                            isActive ? "flex items-center border-b rounded-b-md border-gray-200 px-4 py-2 text-sky-500 duration-500"
                            :
                            "flex items-center border-b border-gray-200 hover:border-white hover:bg-sky-50 px-4 py-2 duration-500"
                            }>
                            <HiChevronDoubleRight className='font-bold'/> <span>Payment</span>
                                
                            </NavLink>
                            </div>
                    }
                    <button onClick={() => setLibraryOpen(!libraryOpen)} className='flex items-center justify-between gap-2 border-b border-gray-200 hover:border-white hover:bg-sky-50 px-4 py-2 duration-500'>
                        <span>Libraries</span>
                        {
                            libraryOpen ?
                            <HiChevronUp/>
                            :
                            <HiChevronDown/>
                        }
                    </button>
                    {
                        libraryOpen &&
                            <div className='flex flex-col bg-gray-100 rounded-b-md -mt-2'>
                            <NavLink to="/allBooks" className={({isActive}) => 
                            isActive ? "flex items-center border-b border-gray-200 px-4 py-2 text-sky-500 duration-500"
                            :
                            "flex items-center border-b border-gray-200 hover:border-white hover:bg-sky-50 px-4 py-2 duration-500"
                            }>
                                <HiChevronDoubleRight className='font-bold'/> <span>All Books</span>
                            </NavLink>
                            <NavLink to="addBook" className={({isActive}) => 
                            isActive ? "flex items-center border-b border-gray-200 px-4 py-2 text-sky-500 duration-500"
                            :
                            "flex items-center border-b border-gray-200 hover:border-white hover:bg-sky-50 px-4 py-2 duration-500"
                            }>
                            <HiChevronDoubleRight className='font-bold'/> <span>Add New Book</span>
                            </NavLink>
                            </div>
                    }
                    <button onClick={() => setAccOpen(!accOpen)} className='flex items-center justify-between gap-2 border-b border-gray-200 hover:border-white hover:bg-sky-50 px-4 py-2 duration-500'>
                        <span>Account</span>
                        {
                            accOpen ?
                            <HiChevronUp/>
                            :
                            <HiChevronDown/>
                        }
                    </button>
                    {
                        accOpen &&
                            <div className='flex flex-col bg-gray-100 rounded-b-md -mt-2'>
                            <NavLink to="/allFees" className={({isActive}) => 
                            isActive ? "flex items-center border-b border-gray-200 px-4 py-2 text-sky-500 duration-500"
                            :
                            "flex items-center border-b border-gray-200 hover:border-white hover:bg-sky-50 px-4 py-2 duration-500"
                            }>
                                <HiChevronDoubleRight className='font-bold'/> <span>All Fees Collection</span>
                            </NavLink>
                            <NavLink to="expenses" className={({isActive}) => 
                            isActive ? "flex items-center border-b border-gray-200 px-4 py-2 text-sky-500 duration-500"
                            :
                            "flex items-center border-b border-gray-200 hover:border-white hover:bg-sky-50 px-4 py-2 duration-500"
                            }>
                            <HiChevronDoubleRight className='font-bold'/> <span>Expenses</span>
                            </NavLink>
                            <NavLink to="addExpense" className={({isActive}) => 
                            isActive ? "flex items-center border-b border-gray-200 px-4 py-2 text-sky-500 duration-500"
                            :
                            "flex items-center border-b border-gray-200 hover:border-white hover:bg-sky-50 px-4 py-2 duration-500"
                            }>
                            <HiChevronDoubleRight className='font-bold'/> <span>Add Expense</span>
                            </NavLink>
                            </div>
                    }
                    <button onClick={() => setClassesOpen(!classesOpen)} className='flex items-center justify-between gap-2 border-b border-gray-200 hover:border-white hover:bg-sky-50 px-4 py-2 duration-500'>
                        <span>Classes</span>
                        {
                            classesOpen ?
                            <HiChevronUp/>
                            :
                            <HiChevronDown/>
                        }
                    </button>
                    {
                        classesOpen &&
                            <div className='flex flex-col bg-gray-100 rounded-b-md -mt-2'>
                            <NavLink to="/allClassSchedules" className={({isActive}) => 
                            isActive ? "flex items-center border-b border-gray-200 px-4 py-2 text-sky-500 duration-500"
                            :
                            "flex items-center border-b border-gray-200 hover:border-white hover:bg-sky-50 px-4 py-2 duration-500"
                            }>
                                <HiChevronDoubleRight className='font-bold'/> <span>All Classes</span>
                            </NavLink>
                            <NavLink to="addNewClasses" className={({isActive}) => 
                            isActive ? "flex items-center border-b border-gray-200 px-4 py-2 text-sky-500 duration-500"
                            :
                            "flex items-center border-b border-gray-200 hover:border-white hover:bg-sky-50 px-4 py-2 duration-500"
                            }>
                            <HiChevronDoubleRight className='font-bold'/> <span>Add Classes</span>
                            </NavLink>
                        </div>
                    }
                    <NavLink to="/subjects" className={({isActive}) => 
                        isActive ? "flex items-center border-b border-gray-200 px-4 py-2 text-sky-500 duration-500"
                        :
                        "flex items-center border-b border-gray-200 hover:border-white hover:bg-sky-50 px-4 py-2 duration-500"
                        }> <span>Subjects</span>
                    </NavLink>
                    <NavLink to="/classRoutines" className={({isActive}) => 
                        isActive ? "flex items-center border-b border-gray-200 px-4 py-2 text-sky-500 duration-500"
                        :
                        "flex items-center border-b border-gray-200 hover:border-white hover:bg-sky-50 px-4 py-2 duration-500"
                        }> <span>Class Routines</span>
                    </NavLink>
                    <NavLink to="/attendance" className={({isActive}) => 
                        isActive ? "flex items-center border-b border-gray-200 px-4 py-2 text-sky-500 duration-500"
                        :
                        "flex items-center border-b border-gray-200 hover:border-white hover:bg-sky-50 px-4 py-2 duration-500"
                        }> <span>Student Attendance</span>
                    </NavLink>
                    <button onClick={() => setExamOpen(!examOpen)} className='flex items-center justify-between gap-2 border-b border-gray-200 hover:border-white hover:bg-sky-50 px-4 py-2 duration-500'>
                        <span>Examinations</span>
                        {
                            examOpen ?
                            <HiChevronUp/>
                            :
                            <HiChevronDown/>
                        }
                    </button>
                    {
                        examOpen &&
                            <div className='flex flex-col bg-gray-100 rounded-b-md -mt-2'>
                            <NavLink to="/examSchedules" className={({isActive}) => 
                            isActive ? "flex items-center border-b border-gray-200 px-4 py-2 text-sky-500 duration-500"
                            :
                            "flex items-center border-b border-gray-200 hover:border-white hover:bg-sky-50 px-4 py-2 duration-500"
                            }>
                                <HiChevronDoubleRight className='font-bold'/> <span>Exam Schedules</span>
                            </NavLink>
                            <NavLink to="/grades" className={({isActive}) => 
                            isActive ? "flex items-center border-b border-gray-200 px-4 py-2 text-sky-500 duration-500"
                            :
                            "flex items-center border-b border-gray-200 hover:border-white hover:bg-sky-50 px-4 py-2 duration-500"
                            }>
                            <HiChevronDoubleRight className='font-bold'/> <span>Exam Grades</span>
                            </NavLink>
                        </div>
                    }
                    <NavLink to="/notice" className={({isActive}) => 
                    isActive ? "flex items-center border-b border-gray-200 px-4 py-2 text-sky-500 duration-500"
                    :
                    "flex items-center border-b border-gray-200 hover:border-white hover:bg-sky-50 px-4 py-2 duration-500"
                    }><span>Notice</span>
                    </NavLink>
                    <NavLink to="/users" className={({isActive}) => 
                    isActive ? "flex items-center border-b border-gray-200 px-4 py-2 text-sky-500 duration-500"
                    :
                    "flex items-center border-b border-gray-200 hover:border-white hover:bg-sky-50 px-4 py-2 duration-500"
                    }><span>Users</span>
                    </NavLink>
            </div>
        </aside>
    );
};

export default Sidebar;