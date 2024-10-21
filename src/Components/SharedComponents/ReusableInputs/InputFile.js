import React from 'react';

export const InputFile = ({ label, register, name, required, errors }) => (
    <div className='w-full'>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            {label} {required && <span className='text-red-500'>*</span>}
        </label>
        <input
            {...register(name, { required })}
            className="block w-full text-gray-700 border rounded-md py-[10px] bg-gray-100 px-4 leading-tight focus:outline-none focus:bg-white"
            type="file"
            accept="image/*"
        />
        {errors[name] && <span className='text-red-500 text-sm'>This field is required</span>}
    </div>
);
