import React from 'react';
import { useForm } from 'react-hook-form';

const AddExamSchedule = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    return (
        <div className='bg-white p-6 rounded-md rounded-e-md h-[58vh]'>
        <h2 className='pb-6 text-xl font-bold'>Add New Exam</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='w-full flex items-center justify-between gap-12 mb-6'>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Exam Name <span className='text-red-500'>*</span>
                        </label>
                        <input 
                        {...register("examName", { required: true })}
                        class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Class Test"/>
                        {errors.examName && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Expense Type <span className='text-red-500'>*</span>
                        </label>
                        <select
                        {...register("Sub", { required: true })}
                         class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" placeholder='Select Subject'>
                        <option value="Select Expense Type" className='text-gray-200 opacity-40' selected>Select Subject</option>
                        <option>English</option>
                        <option>Al-Quran</option>
                        <option>Mathematics</option>
                        <option>Bengali</option>
                        <option>Arabic</option>
                        </select>
                        {errors.Sub && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Section <span className='text-red-500'>*</span>
                        </label>
                        <select
                        {...register("section", { required: true })}
                         class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" placeholder='Select Section'>
                        <option value="Select Section" className='text-gray-200 opacity-40' selected>Select Section</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                        <option>E</option>
                        </select>
                        {errors.section && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                    </div>
                    <div className='flex items-center justify-between gap-12 mb-6'>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Select Time <span className='text-red-500'>*</span>
                        </label>
                        <select
                        {...register("time", { required: true })} type='time'
                         class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" placeholder='Select Time'>
                        <option value="Select Time" className='text-gray-200 opacity-40' selected>Select Time</option>
                        <option>10.00-12.00</option>
                        <option>01.00-03.00</option>
                        </select>
                        {errors.time && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Date <span className='text-red-500'>*</span>
                        </label>
                        <input 
                        {...register("exDate", { required: true })}
                        class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white" type="date"/>
                        {errors.exDate && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='w-full'></div>
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

export default AddExamSchedule;