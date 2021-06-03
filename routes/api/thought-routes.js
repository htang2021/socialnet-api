const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    addReaction,
    removeThought,
    removeReaction
} = require('../../controllers/thought-controller');

router
    // api/thoughts
    .route('/')
    .get(getAllThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:userId
router
    // /api/thoughts/<userId>
  .route('/:userId')
  .get(getThoughtById)
  .post(addThought);

// Set up GET all and POST at /api/users
router
    // /api/thoughts/<userId>/<thoughtId>
  .route('/:userId/:thoughtId')
//   .put(addReaction)
  .delete(removeThought);

// Set up POST reaction at /api/thoughts/<thoughtId>/reactions
router
    // /api/thoughts/<thoughtId>/reactions
    .route('/:thoughtId/reactions')
    .post(addReaction)

router
    .route('/:userId/:thoughtId/:reactionId')
    .delete(removeReaction);

module.exports = router;