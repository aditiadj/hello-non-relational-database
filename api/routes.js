const express = require('express');
const router = express.Router();
const charactersController = require('./controllers');

/*
 * GET all data
 */
router.get(`/`, charactersController.list);

/*
 * GET by id
 */
router.get(`/:id`, charactersController.show);

/*
 * POST one
 */
router.post(`/`, charactersController.create);

/*
 * PUT by id
 */
router.put(`/:id`, charactersController.update);

/*
 * DELETE by id
 */
router.delete(`/:id`, charactersController.remove);

module.exports = router;