const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const data = await Category.findAll({
      include: [{ model: Product }]
    });
    res.json(data)
  } catch (err) {
    res.status(500).json(err.message)
  }
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try {
    const data = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    res.json(data)
  } catch (err) {
    res.status(500).json(err.message)
  }
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
    const data = await Category.create(req.body);
    res.json(data)
  } catch (err) {
    res.status(500).json(err.message)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const data = await Category.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
    res.json(data)
  } catch (err) {
    res.status(500).json(err.message)
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const data = await Category.delete({
      where: {
        id: req.params.id,
      }
    })
    res.json(data)
  } catch (err) {
    res.status(500).json(err.message)
  }
  // delete a category by its `id` value
});

module.exports = router;
