import express from 'express';
import * as controller from './Project01.controller_1';

let router = express.Router();

// GET methods
router.get('/:id', controller.showRecipe);
router.get('/:id', controller.showReview);
router.get('/:id', controller.showUser);
// POST method
router.post('/', controller.createRecipe);
router.post('/', controller.createReview);
router.post('/', controller.createUser);

// PUT method
router.put('/:id', controller.updateRecipe);
router.put('/:id', controller.updateReview);
router.put('/:id', controller.updateUser);

// DELETE method
router.delete('/:id', controller.destroyRecipe);
router.delete('/:id', controller.destroyReview);
router.delete('/:id', controller.destroyUser);

export {router};
