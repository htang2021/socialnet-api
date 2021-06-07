const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    addFriend,
    deleteUser,
    deleteFriend
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// Route to add a friend to the userID (Id)
router
  .route('/:id/friends')
  .post(addFriend);

// Route to delete a friend from the UserID (Id)
router
  .route('/:id/friends/:friendId')
  .delete(deleteFriend);

module.exports = router;