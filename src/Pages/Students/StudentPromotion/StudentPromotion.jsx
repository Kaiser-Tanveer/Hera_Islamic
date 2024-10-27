import React from 'react';
import { useForm } from 'react-hook-form';

const StudentPromotion = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    return (
        <div className='bg-white rounded-md p-6'>
        <h2 className='text-xl font-bold'>Search Student Promotion</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='w-full flex items-center justify-between gap-12 my-6'>
                <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Current Session <span className='text-red-500'>*</span>
                        </label>
                        <select
                        {...register("currSession", { required: true })}
                         class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white">
                        <option value="Current Session" className='text-gray-200 opacity-40' selected>Select Current Session</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        </select>
                        {errors.currSession && <span className='text-red-500 text-sm'>This field is required</span>}
                </div>  
                <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Promote Session <span className='text-red-500'>*</span>
                        </label>
                        <select
                        {...register("promoteSession", { required: true })}
                         class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white">
                        <option value="Current Session" className='text-gray-200 opacity-40' selected>Select Promote Session</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        </select>
                        {errors.promoteSession && <span className='text-red-500 text-sm'>This field is required</span>}
                </div>  
                <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Promotion From Class <span className='text-red-500'>*</span>
                        </label>
                        <select
                        {...register("promotionFrom", { required: true })}
                         class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white">
                        <option value="Promotion From" className='text-gray-200 opacity-40' selected>Promotion from Class</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        </select>
                        {errors.promotionFrom && <span className='text-red-500 text-sm'>This field is required</span>}
                </div>  
                <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        Promotion To Class <span className='text-red-500'>*</span>
                        </label>
                        <select
                        {...register("promotionTo", { required: true })}
                         class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white">
                        <option value="promotionTo" className='text-gray-200 opacity-40' selected>Promotion to Class</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        </select>
                        {errors.currSession && <span className='text-red-500 text-sm'>This field is required</span>}
                </div>  
            </div>
            <div className='flex items-center justify-start gap-6 my-10'>
                <input type="submit" value="SUBMIT" className='h-12 w-32 bg-blue-700 text-white font-semibold rounded-md'/>
                <input type="reset" value="RESET" className='h-12 w-32 border text-blue-700 border-blue-700 font-semibold rounded-md'/>
            </div>
        </form>
        </div>
    );
};

export default StudentPromotion;