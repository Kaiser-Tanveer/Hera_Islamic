import React from 'react';
import { useForm } from 'react-hook-form';

const CreateNotice = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    return (
        <div className='bg-white p-6 rounded-md rounded-e-md h-[80vh]'>
            <h2 className='pb-6 text-xl font-bold'>Create New Notice</h2>
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='w-full flex items-start justify-between gap-12 mb-6'>
                        <div className='w-full'>
                        <div className='w-full flex items-center justify-between gap-12 mb-6'>
                            <div className='w-full'>
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Title <span className='text-red-500'>*</span>
                            </label>
                            <input 
                            {...register("title", { required: true })}
                            class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Your Notice Title"/>
                            {errors.title && <span className='text-red-500 text-sm'>This field is required</span>}
                            </div>
                        </div>
                        <div className='w-full flex items-center justify-between gap-12 mb-6'>
                            <div className='w-full'>
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Posted By <span className='text-red-500'>*</span>
                            </label>
                            <input 
                            {...register("postedBy", { required: true })}
                            class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Mr. X"/>
                            {errors.postedBy && <span className='text-red-500 text-sm'>This field is required</span>}
                            </div>
                        </div>
                        <div className='w-full flex items-center justify-between gap-12 mb-6'>
                            <div className='w-full'>
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Date <span className='text-red-500'>*</span>
                            </label>
                            <input 
                            {...register("date", { required: true })}
                            class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="date"/>
                            {errors.date && <span className='text-red-500 text-sm'>This field is required</span>}
                            </div>
                        </div>
                        </div>
                        <div className='w-full'>
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Details <span className='text-red-500'>*</span>
                            </label>
                            <textarea 
                            {...register("details", {required: true})}
                            class="appearance-none block w-full h-[242px] bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Class Test"/>
                            {errors.details && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        </div>
                        <div>
                    </div>

                    <div className='flex items-center justify-start gap-6 my-8'>
                    <input type="submit" value="SUBMIT" className='h-12 w-32 bg-blue-700 text-white font-semibold rounded-md border border-white hover:border-blue-700 hover:bg-white hover:text-blue-700 duration-500'/>
                    <input type="reset" value="RESET" className='h-12 w-32 border text-blue-700 border-blue-700 font-semibold rounded-md hover:bg-blue-700 hover:text-white duration-500'/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateNotice;