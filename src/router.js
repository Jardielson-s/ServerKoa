const Router = require('koa-router');

const router = new Router();



router.get('/',(ctx, next) => {
     ctx.body = 'Appliacation running on server for AWS';
})
.post('/create',(ctx, next) =>{

    const { name, age } = ctx.request.body.name;
    
     ctx.body = 'hello ' + name + 'your age is ' + age + ' years'; 
})


module.exports = router;