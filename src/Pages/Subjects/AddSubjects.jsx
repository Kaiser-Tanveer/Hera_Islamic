import React from 'react';
import { useForm } from 'react-hook-form';

const AddSubjects = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    return (
        <div className='bg-white rounded-md rounded-e-md p-4 h-[60vh]'>
        <h2 className='pb-6 text-xl font-bold'>Add New Subject</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='w-full flex items-center justify-between gap-12 mb-6'>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Name <span className='text-red-500'>*</span>
                        </label>
                        <input 
                        {...register("name", { required: true })}
                        class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="English Grammar"/>
                        {errors.name && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Subject Type <span className='text-red-500'>*</span>
                        </label>
                        <select
                        {...register("subType", { required: true })}
                         class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" placeholder='Select Subject Type'>
                        <option value="Select Subject Type" className='text-gray-200 opacity-40' selected>Select Subject Type</option>
                        <option>English</option>
                        <option>Bengali</option>
                        <option>Arabic</option>
                        <option>Al-Quran</option>
                        <option>Al-Hadith</option>
                        </select>
                        {errors.subType && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                    </div>
                    <div className='flex items-center justify-between gap-12 mb-6'>
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
                            Enter Subject Code <span className='text-red-500'>*</span>
                        </label>
                        <input 
                        {...register("subCode", { required: true })}
                        class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="#123456789ASDF"/>
                        {errors.subCode && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
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

export default AddSubjects;