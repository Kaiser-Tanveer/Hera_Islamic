// In your SingleUser.js or a separate file
export const loader = async ({ params }) => {
    const response = await fetch('/Users/Users.json');
    if (!response.ok) throw new Error('Failed to fetch users');
    const users = await response.json();
    
    // Find the user by ID from the fetched users
    const user = users.find(user => user.id === parseInt(params.id)); // Ensure params.id is the correct type
    if (!user) throw new Error('User not found');
    
    return user;
};
