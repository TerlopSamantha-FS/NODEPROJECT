const express = require('express');
const router = express.Router();
const todos = [45, 89, 9];

`localhost:3000/api`;
router.get('/', (req, res) => {
    res.status(200).json({ message: 'From the API' });
});

`localhost:3000/api/:city`;
router.get('/:city', (req, res) => {
  // const todo = arr.find(obj => obj.id === id);
  const city = req.params.city;
  console.log('params >>>', city);
    res.status(200).json({ message: 'From the API' });
});

`localhost:3000/:id`;
router.get('/:id', (req, res) => {
  const id = req.params.id;
  console.log('params >>>', id);
  res.status(200).json({
    message: 'GET - SUCESS',
    id: id,
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});


router.patch('/:id',(req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: 'From the API' });
});

router.delete('/:id', (req, res) => {
    const todo = arr.find(obj => obj.id === id);
    const id = req.params.id;
    console.log('params >>>', id);
    res.status(200).json({ message: 'From the API' });
});


router.post('/', (req, res) =>{
  console.log('Request body >>>', req.body);
  const { data } = req.body;
  todos.push()
  res.status(200).json({message: "We got the request", data})
});

module.exports = router;