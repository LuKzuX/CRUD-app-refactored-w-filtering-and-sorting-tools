const Item = require(`../model/item`);
const wrapper = require(`./wrapper`);

const getAllItems = wrapper(async (req, res) => {
  const { name, year, sort } = req.query;
  const queryObj = {};
  if (name) {
    queryObj.name = name;
  }
  if (year) {
    queryObj.year = year;
  }
  let result = Item.find(queryObj);
  if (sort) {
    const sortList = sort.split(`,`).join(` `);
    result = result.sort(sortList);
  }
  const allItems = await result;
  res.json(allItems);
});

const getItem = wrapper(async (req, res) => {
  const item = await Item.findOne({ id: req.params.id });
  res.json(item);
});

const createItem = wrapper(async (req, res) => {
  const newItem = await Item.create(req.body);
  res.json(newItem);
});

const updateItem = wrapper(async (req, res) => {
  const updatedItem = await Item.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    {
      new: true,
    }
  );
  res.json(updatedItem);
});

const deleteItem = wrapper(async (req, res) => {
  const deletedItem = await Item.findOneAndDelete({ _id: req.params.id });
  if (!deletedItem) {
    return res.json(`no item found to delete`);
  }
  res.json(deletedItem);
});

module.exports = { getAllItems, getItem, createItem, updateItem, deleteItem };
