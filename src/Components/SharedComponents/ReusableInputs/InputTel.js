import React from 'react';

export const InputTel = ({ label, register, name, required, errors, placeholder }) => {
    const handleInputChange = (event) => {
        // Use regex to remove non-numeric characters
        const numericValue = event.target.value.replace(/[^0-9]/g, '');
        event.target.value = numericValue; // Update the input value
    };

    return (
        <div className='w-full'>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                {label} {required && <span className='text-red-500'>*</span>}
            </label>
            <input
                {...register(name, { required })}
                className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                type="tel"
                placeholder={placeholder}
                onChange={handleInputChange} // Attach the change handler
            />
            {errors[name] && <span className='text-red-500 text-sm'>This field is required</span>}
        </div>
    );
};
