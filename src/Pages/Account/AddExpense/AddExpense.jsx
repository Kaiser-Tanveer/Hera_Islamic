import React from 'react';
import { useForm } from 'react-hook-form';

const AddExpense = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    return (
        <div className='bg-white p-6 rounded-md rounded-e-md h-[95vh]'>
        <h2 className='pb-6 text-xl font-bold'>Add New Expense</h2>
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
                            ID No. <span className='text-red-500'>*</span>
                        </label>
                        <input 
                        {...register("id", { required: true })}
                        class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="English"/>
                        {errors.id && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Expense Type <span className='text-red-500'>*</span>
                        </label>
                        <select
                        {...register("exType", { required: true })}
                         class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" placeholder='Select Expense Type'>
                        <option value="Select Expense Type" className='text-gray-200 opacity-40' selected>Select a Expense Type</option>
                        <option>Salary</option>
                        <option>Transport</option>
                        <option>House Rent</option>
                        <option>Health</option>
                        <option>Utilities</option>
                        </select>
                        {errors.exType && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Amount <span className='text-red-500'>*</span>
                        </label>
                        <input 
                        {...register("amount", { required: true })}
                        class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Enter Amount"/>
                        {errors.amount && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                    </div>
                    <div className='flex items-center justify-between gap-12 mb-6'>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Phone <span className='text-red-500'>*</span>
                        </label>
                        <input 
                        {...register("phone", { required: true })}
                        class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="#123456789ASDF"/>
                        {errors.phone && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Email <span className='text-red-500'>*</span>
                        </label>
                        <input 
                        {...register("mail", { required: true })}
                        class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="mail" placeholder="2021"/>
                        {errors.mail && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Status <span className='text-red-500'>*</span>
                        </label>
                        <select
                        {...register("status", { required: true })}
                         class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" placeholder='Select Expense Type'>
                        <option value="Select Status" className='text-gray-200 opacity-40' selected>Select Status</option>
                        <option>Paid</option>
                        <option>Unpaid</option>
                        </select>
                        {errors.status && <span className='text-red-500 text-sm'>This field is required</span>}
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

export default AddExpense;