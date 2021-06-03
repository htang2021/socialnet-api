const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    addReaction,
    removeThought,
    removeReaction
} = require('../../controllers/comment-controller');

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
  .put(addReaction)
  .delete(removeThought);

router
    .route('/:userId/:thoughtId/:reactionId')
    .delete(removeReaction);

module.exports = router;