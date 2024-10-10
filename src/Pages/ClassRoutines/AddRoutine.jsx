import React from 'react';
import { useForm } from 'react-hook-form';

const AddRoutine = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    return (
        <div className='bg-white rounded-md rounded-e-md p-4 h-[60vh]'>
        <h2 className='pb-6 text-xl font-bold'>Add Class Routines</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='w-full flex items-center justify-between gap-12 mb-6'>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                           Day <span className='text-red-500'>*</span>
                        </label>
                        <select
                        {...register("day", { required: true })}
                         class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" placeholder='Select Subject Type'>
                        <option value="Select Subject Type" className='text-gray-200 opacity-40' selected>Select A Day</option>
                        <option>Sunday</option>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        </select>
                        {errors.day && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Select Class <span className='text-red-500'>*</span>
                        </label>
                        <select
                        {...register("class", { required: true })}
                         class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" placeholder='Select Subject Type'>
                        <option value="Select Subject Type" className='text-gray-200 opacity-40' selected>Select Class</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        </select>
                        {errors.class && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                           Subject Name <span className='text-red-500'>*</span>
                        </label>
                        <input 
                        {...register("subName", { required: true })}
                        class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="English Grammar"/>
                        {errors.subName && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                    </div>
                    <div className='flex items-center justify-between gap-12 mb-6'>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Select Section <span className='text-red-500'>*</span>
                        </label>
                        <select
                        {...register("section", { required: true })}
                         class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" placeholder='Select Subject Type'>
                        <option value="Select Subject Type" className='text-gray-200 opacity-40' selected>Select Section</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        </select>
                        {errors.section && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Select Time <span className='text-red-500'>*</span>
                        </label>
                        <select
                        {...register("time", { required: true })}
                         className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" placeholder='Select Subject Type'>
                        <option value="Select Subject Type" className='text-gray-200 opacity-40' selected>Select Time</option>
                        <option>10.00 - 11.00</option>
                        <option>11.00 - 12.00</option>
                        <option>12.00 - 01.00</option>
                        <option>01.00 - 02.00</option>
                        <option>02.00 - 03.00</option>
                        <option>03.00 - 04.00</option>
                        </select>
                        {errors.time && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Enter Date <span className='text-red-500'>*</span>
                        </label>
                        <input 
                        {...register("date", { required: true })}
                        class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="date" placeholder="#123456789ASDF"/>
                        {errors.date && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                    </div>
                    
                    <div className='flex items-center justify-start gap-6 my-8'>
                    <input type="submit" value="SUBMIT" className='h-12 w-32 bg-sky-500 text-white font-semibold rounded-md border border-white hover:border-sky-500 hover:bg-white hover:text-sky-500 duration-500'/>
                    <input type="reset" value="RESET" className='h-12 w-32 border text-sky-500 border-sky-500 font-semibold rounded-md hover:bg-sky-500 hover:text-white duration-500'/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddRoutine;