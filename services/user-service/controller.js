import { getUserById, createUser as createUserService, updateUser, deleteUser } from './service.js';  // Renaming createUser to createUserService

export const getUser = (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Getting user with ID: ${id}`); // Log the ID being passed
    const user = getUserById(id);
    res.json(user);
  } catch (error) {
    console.error(error);  // Log the error for better visibility
    res.status(404).json({ error: error.message });
  }
};


export const createUser = (req, res) => {
  try {
    const newUser = createUserService(req.body);  // Using the renamed function here
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateUserDetails = (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = updateUser(id, req.body);
    res.json(updatedUser);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const deleteUserAccount = (req, res) => {
  try {
    const { id } = req.params;
    deleteUser(id);
    res.json({ message: `User with ID ${id} deleted successfully.` });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
