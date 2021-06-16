const Koa = require('koa');
const cors = require('@koa/cors');
const router = require("./router");
const server = new Koa();
const koaBody = require('koa-body');


server.use(cors());
server.use(koaBody());

server.use(router.routes());
server.listen(process.env.PORT || 3000, function(){
    console.log('running in port: ', process.env.PORT || 3000);
});