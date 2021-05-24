const http = require('http');
const app = require('./app')
const port = process.env.PORT | process.env.MY_PORT;

app.set('app', port);

const server = http.createServer(app)

server.listen(port, ()=>{ console.log(`http://localhost:${port}`)})