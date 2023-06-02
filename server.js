const http = require('http');


http.createServer().listen(process.env.PORT, () => {
    console.log('Node is up and running');
});