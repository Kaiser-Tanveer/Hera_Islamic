import { useState } from 'react';

const useEditDelete = () => {
    const [error, setError] = useState('');

    // Reusable function to handle PATCH or DELETE requests
    const handleDataAction = async (url, method, data = null) => {
        try {
            const options = {
                method,
                headers: { 'Content-Type': 'application/json' },
            };
            if (data) {
                options.body = JSON.stringify(data);
            }
    
            const response = await fetch(url, options);
    
            if (!response.ok) {
                const contentType = response.headers.get('Content-Type');
                if (contentType && contentType.includes('application/json')) {
                    const errorResponse = await response.json();
                    throw new Error(errorResponse.error || 'Request failed');
                } else {
                    throw new Error(`Unexpected response: ${response.statusText}`);
                }
            }
            return response.json();
        } catch (error) {
            console.error('API Error:', error.message);
            setError(`Error: ${error.message}`);
            return null;
        }
    };
    

    // Function to update any field (status, amount, etc.)
    const updateField = async (e, fieldName, data, setAllData, apiEndpoint) => {
        const newValue = e.target.value;
        const url = `http://localhost:3003/api/${apiEndpoint}/${data._id}`;
        
        const response = await fetch(url, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ [fieldName]: newValue }),
        });
    
        if (response.ok) {
            setAllData(prevData =>
                prevData.map(item =>
                    item._id === data._id ? { ...item, [fieldName]: newValue } : item
                )
            );
        }
    };
    

    // Function to delete any data
    const deleteData = async (dataId, apiEndpoint, dataSetter) => {
        const url = `http://localhost:3003/api/${apiEndpoint}/${dataId}`;

        const response = await handleDataAction(url, 'DELETE');

        if (response) {
            dataSetter((prevData) => prevData.filter((item) => item._id !== dataId));
        }
    };

    return { error, updateField, deleteData };
};

export default useEditDelete;
