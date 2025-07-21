const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // For now, return a simple array of dummy products
  res.json([
    { id: 1, name: 'Product One', price: 100 },
    { id: 2, name: 'Product Two', price: 200 },
  ]);
});

module.exports = router;


