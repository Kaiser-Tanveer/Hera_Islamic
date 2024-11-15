import { useState } from 'react';

const useUserActions = () => {
    const [error, setError] = useState('');

    // Reusable function to handle PATCH or DELETE requests
    const handleUserAction = async (url, method, data = null) => {
        try {
            const options = {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            if (data) {
                options.body = JSON.stringify(data);
            }

            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`Failed to ${method === 'PATCH' ? 'update' : 'delete'} user`);
            }

            return response;
        } catch (error) {
            console.error(error);
            setError(`Error: ${error.message}`);
        }
    };

    // Function to update user type (PATCH)
    const updateUserType = async (e, userType, user, userTypeSetter) => {
        const newUserType = e.target.value;
        const url = `http://localhost:3003/api/${userType}/${user._id}`;

        const response = await handleUserAction(url, 'PATCH', { userType: newUserType });

        if (response) {
            userTypeSetter(prevUsers =>
                prevUsers.map(u => u._id === user._id ? { ...u, userType: newUserType } : u)
            );
        }
    };

    // Function to delete user (DELETE)
    const deleteUser = async (userId, userType, userSetter) => {
        const url = `http://localhost:3003/api/${userType}/${userId}`;

        const response = await handleUserAction(url, 'DELETE');

        if (response) {
            userSetter(prevUsers => prevUsers.filter(user => user._id !== userId));
        }
    };

    return { error, updateUserType, deleteUser };
};

export default useUserActions;
