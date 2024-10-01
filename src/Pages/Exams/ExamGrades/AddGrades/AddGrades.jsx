import React from 'react';
import { useForm } from 'react-hook-form';

const AddGrades = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    return (
        <div className='bg-white p-6 rounded-md rounded-e-md h-[58vh]'>
        <h2 className='pb-6 text-xl font-bold'>Add New Grade</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='w-full flex items-start justify-between gap-12 mb-6'>
                        <div className='w-full'>
                        <div className='w-full flex items-center justify-between gap-12 mb-6'>
                            <div className='w-full'>
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Grade Name <span className='text-red-500'>*</span>
                            </label>
                            <select
                            {...register("gName", { required: true })}
                            class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" placeholder='Select Subject'>
                            <option value="Select Grade" className='text-gray-200 opacity-40' selected>Select Grade</option>
                            <option>A+</option>
                            <option>A</option>
                            <option>B</option>
                            <option>B-</option>
                            <option>C</option>
                            <option>D</option>
                            <option>F</option>
                            </select>
                            {errors.gName && <span className='text-red-500 text-sm'>This field is required</span>}
                            </div>
                            <div className='w-full'>
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Grade Point <span className='text-red-500'>*</span>
                            </label>
                            <input 
                            {...register("gPoint", { required: true })}
                            class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="number" placeholder="4.50"/>
                            {errors.gPoint && <span className='text-red-500 text-sm'>This field is required</span>}
                            </div>
                        </div>
                        <div className='w-full flex items-center justify-between gap-12 mb-6'>
                            <div className='w-full'>
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Percentage From <span className='text-red-500'>*</span>
                            </label>
                            <input 
                            {...register("percentFrom", { required: true })}
                            class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="number" placeholder="80"/>
                            {errors.percentFrom && <span className='text-red-500 text-sm'>This field is required</span>}
                            </div>
                            <div className='w-full'>
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Percentage Upto <span className='text-red-500'>*</span>
                            </label>
                            <input 
                            {...register("percentUpto", { required: true })}
                            class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="number" placeholder="100"/>
                            {errors.percentUpto && <span className='text-red-500 text-sm'>This field is required</span>}
                            </div>
                        </div>
                        </div>
                        <div className='w-full'>
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Comment 
                            </label>
                            <textarea 
                            {...register("comment")}
                            class="appearance-none block w-full h-[140px] bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Class Test"/>
                            {errors.comment && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        </div>
                        <div>
                    </div>

                    <div className='flex items-center justify-start gap-6 my-8'>
                    <input type="submit" value="SUBMIT" className='h-12 w-32 bg-blue-500 text-white font-semibold rounded-md border border-white hover:border-blue-500 hover:bg-white hover:text-blue-500 duration-500'/>
                    <input type="reset" value="RESET" className='h-12 w-32 border text-blue-500 border-blue-500 font-semibold rounded-md hover:bg-blue-500 hover:text-white duration-500'/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddGrades;