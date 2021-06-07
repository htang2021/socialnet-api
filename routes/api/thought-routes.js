const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
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
    // /api/thoughts/<thoughtId>
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

//Set up POST at /api/thoughts/userId
router
  // api/thoughts/<userId>/
  .route('/:userId')
  .post(addThought);

// Set up POST reaction at /api/thoughts/<thoughtId>/reactions
router
    // /api/thoughts/<thoughtId>/reactions
    .route('/:thoughtId/reactions')
    .post(addReaction)

router
    .route('/:userId/:thoughtId/:reactionId')
    .delete(removeReaction);

module.exports = router;