import React from 'react';

export const InputSelect = ({ label, register, name, required, options = [], errors }) => (
    <div className='w-full'>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            {label} {required && <span className='text-red-500'>*</span>}
        </label>
        <select
            {...register(name, { required })}
            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
        >
            <option value="" disabled selected>
                Select {label}
            </option>
            {Array.isArray(options) && options.length > 0 ? (
                options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))
            ) : (
                <option disabled>No options available</option>
            )}
        </select>
        {errors[name] && (
            <span className='text-red-500 text-sm'>This field is required</span>
        )}
    </div>
);
