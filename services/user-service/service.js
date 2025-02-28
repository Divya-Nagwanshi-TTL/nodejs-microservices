import { users } from './userEntity.js'; // Import mock data

export const getUserById = (userId) => {
  console.log(`Looking for user with ID: ${userId}`);  // Log the ID being searched
  const user = users.find((user) => user.id === String(userId));
  if (!user) {
    throw new Error('User not found');
  }
  console.log(`Found user: ${JSON.stringify(user)}`);
  return user;
};

export const createUser = (userData) => {
  const newUser = {
    id: String(users.length + 1), // Generate a unique ID
    ...userData,
  };
  users.push(newUser);
  return newUser;
};

export const updateUser = (userId, updates) => {
  const userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex === -1) {
    throw new Error('User not found');
  }
  users[userIndex] = { ...users[userIndex], ...updates };
  return users[userIndex];
};

export const deleteUser = (userId) => {
  const userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex === -1) {
    throw new Error('User not found');
  }
  users.splice(userIndex, 1); // Remove the user
};
