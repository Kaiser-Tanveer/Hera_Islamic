import React from 'react';
import { useForm } from 'react-hook-form';

const AddBook = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    return (
        <div className='bg-white p-6 rounded-md rounded-e-md h-[95vh]'>
        <h2 className='pb-6 text-xl font-bold'>Add New Book</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='w-full flex items-center justify-between gap-12 mb-6'>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Book Name <span className='text-red-500'>*</span>
                        </label>
                        <input 
                        {...register("bName", { required: true })}
                        class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="English Grammar"/>
                        {errors.bName && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Subject <span className='text-red-500'>*</span>
                        </label>
                        <input 
                        {...register("sub", { required: true })}
                        class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="English"/>
                        {errors.sub && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Writer Name <span className='text-red-500'>*</span>
                        </label>
                        <input 
                        {...register("writer", { required: true })}
                        class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Jane"/>
                        {errors.writer && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Class <span className='text-red-500'>*</span>
                        </label>
                        <select
                        {...register("class", { required: true })}
                         class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" placeholder='Select Class'>
                        <option value="Select Class" className='text-gray-200 opacity-40' selected>Select Class</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        </select>
                        {errors.class && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                    </div>
                    <div className='flex items-center justify-between gap-12 mb-6'>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            ID No. <span className='text-red-500'>*</span>
                        </label>
                        <input 
                        {...register("id", { required: true })}
                        class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="#123456789ASDF"/>
                        {errors.id && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Publishing Date <span className='text-red-500'>*</span>
                        </label>
                        <input 
                        {...register("pDate", { required: true })}
                        class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="number" placeholder="2021"/>
                        {errors.pDate && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Uploaded Date <span className='text-red-500'>*</span>
                        </label>
                        <input 
                        {...register("upDate", { required: true })}
                        class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white" type="date"/>
                        {errors.upDate && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='w-full'></div>
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

export default AddBook;