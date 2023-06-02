const http = require('http');
require('dotenv').config();

http.createServer().listen(process.env.PORT, () => {
    console.log('Node is up and running on port ${process.env.PORT}');
});