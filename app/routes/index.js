const express = require('express');
const router = express.Router();
const todos = [{data: 'abc 123'}, {data: 'abc 345'}];

`localhost:3000/api`;
router.get('/', (req, res) => {
    res.status(200).json({ 
      message: `GET - SUCCESSFUL`,
      data: todos,
      metadata: {
        hostname: req.hostname,
        method: req.method,
      }, 
    });
});

`localhost:3000/api/:id`;
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const arrayId = (parseInt(id) - 1);

  // Checking to ensure the index exists in the todo array.
  if(todos[arrayId] !== undefined) {
    data = todos[arrayId];
    console.log('params >>>', id);
    res.status(200).json({
      message: `GET - SUCCESSFUL`,
      id: id,
      data: data,
      metadata: {
        hostname: req.hostname,
        method: req.method,
      }, 
    });
  } else { // The index doesn't exist in the todo array.
    res.status(404).json({ 
      message: `GET - UNSUCCESSFUL! ID NOT FOUND`,
      metadata: {
        hostname: req.hostname,
        method: req.method,
      }, 
    });
  }
});

`localhost:3000/api/`;
router.post('/', (req, res) =>{
  console.log('Request body >>>', req.body);
  const { data } = req.body;

  // Ensuring that data being recieved isn't blank or an empty string
  if(data !== undefined && data !== null && data !== '') {
    todos.push({data});
    res.status(200).json({ 
      message: `POST - SUCCESSFUL`,
      id: todos.length,
      data: data,
      metadata: {
        hostname: req.hostname,
        method: req.method,
      }, 
    });
  } else { // The data being recived is either blank or an empty string
    res.status(404).json({ 
      message: `POST - UNSUCCESSFUL! Post data cannot be found!`,
      metadata: {
        hostname: req.hostname,
        method: req.method,
      }, 
    });
  }

});

`localhost:3000/api/:id`;
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  let arrayId = parseInt(id) - 1;
// Checking to ensure the index exists in the todo array.
  if(todos[arrayId] !== undefined) {
    todos[arrayId] = {data};
    console.log('params >>>', id);
    res.status(200).json({ 
      message: `PATCH - SUCCESSFUL`,
      id: id,
      data: data,
      metadata: {
        hostname: req.hostname,
        method: req.method,
      }, 
    });
  } else {// The index doesn't exist in the todo array.
    res.status(404).json({ 
      message: `PATCH - UNSUCCESSFUL! ID NOT FOUND`,
      metadata: {
        hostname: req.hostname,
        method: req.method,
      }, 
    });
  }

});

`localhost:3000/api/:id`;
router.delete('/:id', (req, res) => {
  let { id } = req.params;
  let arrayId = (parseInt(id) - 1);
// Checking to ensure the index exists in the todo array.
  if(todos[arrayId] !== undefined) {
      todos.splice(arrayId, 1);
      console.log('params >>>', id);
      res.status(200).json({ 
        message: `DELETE - SUCCESSFUL`,
        id: id,
        metadata: {
          hostname: req.hostname,
          method: req.method,
        }, 
      });
    } else {// The index doesn't exist in the todo array.
      res.status(404).json({ 
        message: `GET - UNSUCCESSFUL! ID NOT FOUND`,
        metadata: {
          hostname: req.hostname,
          method: req.method,
        }, 
      });
    }
  });

module.exports = router;