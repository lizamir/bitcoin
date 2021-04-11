import { storageService } from './async-storage.service';
export const userService = {
  getUserById,
  signup,
  addMove,
  getLogedinUser,
};
const STORAGE_KEY = 'user';
const gDefaultUsers = [
  {
    _id: '101',
    name: 'Liz Hajaj',
    coins: 100,
    moves: [],
  },
];
 _loadUsers();

 function getLogedinUser(user = gDefaultUsers[0]) {
  return user;
}

async function getUserById(id) {
  try {
    const user = await storageService.get(STORAGE_KEY, id);
    return user;
  } catch (err) {
    console.log('cant get user', err);
  }
}
async function signup(name) {
  const user = {
    name,
    coins: 100,
    moves: [],
  };
  try {
    const savedUser = await storageService.post(STORAGE_KEY, user);
    return savedUser;
  } catch (err) {
    console.log('cant save user', err);
  }
}
async function addMove(contact, amount, userId) {
  const move = {
    toId: contact._id,
    to: contact.name,
    at: Date.now(),
    amount,
  };
  try {
    const user = await storageService.get(STORAGE_KEY, userId);
    user.coins -= amount;
    user.moves.unshift(move);
    const updatedUser = await storageService.put(STORAGE_KEY, user);
    return updatedUser;
  } catch (err) {
    console.log('cant save move', err);
  }
}
function _loadUsers() {
  var users = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  if (!users || !users.length) {
    users = gDefaultUsers;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  }
  return users;
}