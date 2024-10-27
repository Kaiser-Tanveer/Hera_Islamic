import React from 'react';

export const InputNumber = ({ label, register, name, required, errors, placeholder }) => {
    const handleKeyPress = (event) => {
        // Allow only numeric characters and control keys (e.g., backspace)
        const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'Tab'];
        if (!allowedKeys.includes(event.key)) {
            event.preventDefault(); // Prevent input of non-numeric characters
        }
    };

    const handleInputChange = (event) => {
        // Ensure that only numbers are present in the input value
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
                type="number"
                placeholder={placeholder}
                onKeyPress={handleKeyPress} // Handle key press events
                onChange={handleInputChange} // Handle input change events
                min="0" // Set minimum value (if needed)
                step="1" // Enforce integer values
                inputMode="numeric" // Suggests numeric keyboard on mobile devices
            />
            {errors[name] && <span className='text-red-500 text-sm'>This field is required</span>}
        </div>
    );
};
