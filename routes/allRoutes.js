const express = require("express");
const router = express.Router();

const {
  getAllItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require(`../functions/routeFunctions`);

router.get(`/`, getAllItems);
router.get(`/:id`, getItem);
router.post(`/`, createItem);
router.patch(`/:id`, updateItem);
router.delete(`/:id`, deleteItem);

module.exports = router;
